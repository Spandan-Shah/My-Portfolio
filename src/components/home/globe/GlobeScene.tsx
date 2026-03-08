import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import type { ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Sphere, Line } from "@react-three/drei";
import * as THREE from "three";
import ThreatNodeMesh, { DARKNET_NODES, type DarknetNode } from "./ThreatNode";

type HackPhase = "idle" | "zooming" | "hacked" | "disconnecting";

const R = 1.6;
const ATLAS = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function latLngTo3(lat: number, lng: number, r: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const th = (lng + 180) * (Math.PI / 180);
  return [-(r * Math.sin(phi) * Math.cos(th)), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(th)];
}

// Country name lookup
const CN: Record<string, string> = {
  "004":"Afghanistan","008":"Albania","012":"Algeria","024":"Angola","032":"Argentina",
  "036":"Australia","040":"Austria","050":"Bangladesh","056":"Belgium","076":"Brazil",
  "100":"Bulgaria","116":"Cambodia","120":"Cameroon","124":"Canada","152":"Chile",
  "156":"China","170":"Colombia","180":"DR Congo","188":"Costa Rica","192":"Cuba",
  "203":"Czech Republic","208":"Denmark","218":"Ecuador","818":"Egypt","231":"Ethiopia",
  "246":"Finland","250":"France","276":"Germany","288":"Ghana","300":"Greece",
  "320":"Guatemala","348":"Hungary","356":"India","360":"Indonesia","364":"Iran",
  "368":"Iraq","372":"Ireland","376":"Israel","380":"Italy","392":"Japan",
  "400":"Jordan","404":"Kenya","408":"N. Korea","410":"S. Korea","414":"Kuwait",
  "434":"Libya","458":"Malaysia","484":"Mexico","504":"Morocco","508":"Mozambique",
  "524":"Nepal","528":"Netherlands","554":"New Zealand","566":"Nigeria","578":"Norway",
  "586":"Pakistan","591":"Panama","604":"Peru","608":"Philippines","616":"Poland",
  "620":"Portugal","634":"Qatar","642":"Romania","643":"Russia","682":"Saudi Arabia",
  "702":"Singapore","710":"South Africa","724":"Spain","752":"Sweden","756":"Switzerland",
  "760":"Syria","764":"Thailand","792":"Turkey","804":"Ukraine","784":"UAE",
  "826":"United Kingdom","840":"United States","858":"Uruguay","862":"Venezuela",
  "704":"Vietnam","887":"Yemen","894":"Zambia","716":"Zimbabwe",
};

// TopoJSON decoder
interface DecodedCountry { id: string; name: string; rings: [number, number, number][][]; cLat: number; cLng: number; }

function decodeTopo(topo: any, radius: number): DecodedCountry[] {
  const { scale: [sx, sy], translate: [tx, ty] } = topo.transform;
  const arcs: [number, number][][] = topo.arcs.map((arc: number[][]) => {
    let x = 0, y = 0;
    return arc.map(([dx, dy]) => { x += dx; y += dy; return [x * sx + tx, y * sy + ty] as [number, number]; });
  });
  const ring = (indices: number[]): [number, number][] => {
    const pts: [number, number][] = [];
    for (const idx of indices) {
      const a = idx >= 0 ? arcs[idx] : [...arcs[~idx]].reverse();
      for (let i = pts.length ? 1 : 0; i < a.length; i++) pts.push(a[i]);
    }
    return pts;
  };
  return topo.objects.countries.geometries.map((g: any) => {
    const polys: [number, number][][] = [];
    if (g.type === "Polygon") for (const r of g.arcs) polys.push(ring(r));
    else if (g.type === "MultiPolygon") for (const p of g.arcs) for (const r of p) polys.push(ring(r));
    let tLat = 0, tLng = 0, n = 0;
    const rings = polys.map(p => p.map(([lng, lat]) => { tLat += lat; tLng += lng; n++; return latLngTo3(lat, lng, radius * 1.003); }));
    return { id: String(g.id), name: CN[String(g.id)] || `ZONE_${g.id}`, rings, cLat: n ? tLat / n : 0, cLng: n ? tLng / n : 0 };
  });
}

// Country borders
function Borders({ countries, selId }: { countries: DecodedCountry[]; selId: string | null }) {
  const matRef = useRef<THREE.LineBasicMaterial>(null!);
  const { allGeo, selGeo } = useMemo(() => {
    const ap: number[] = [], sp: number[] = [];
    for (const c of countries) {
      const t = c.id === selId ? sp : ap;
      for (const ring of c.rings) for (let i = 0; i < ring.length - 1; i++) { t.push(...ring[i], ...ring[i + 1]); }
    }
    const allGeo = new THREE.BufferGeometry();
    allGeo.setAttribute("position", new THREE.Float32BufferAttribute(ap, 3));
    const selGeo = sp.length ? (() => { const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.Float32BufferAttribute(sp, 3)); return g; })() : null;
    return { allGeo, selGeo };
  }, [countries, selId]);
  useFrame(({ clock }) => { if (matRef.current) matRef.current.opacity = 0.4 + 0.6 * Math.sin(clock.getElapsedTime() * 6); });
  return (
    <>
      <lineSegments geometry={allGeo}><lineBasicMaterial color="#00e5ff" transparent opacity={0.2} /></lineSegments>
      {selGeo && <lineSegments geometry={selGeo}><lineBasicMaterial ref={matRef} color="#00ff88" transparent opacity={1} /></lineSegments>}
    </>
  );
}

// Missile arcs
const routes = [
  { f: { lat: 39, lng: 125.7 }, t: { lat: 38.9, lng: -77 } },
  { f: { lat: 55.7, lng: 37.6 }, t: { lat: 51.5, lng: -0.1 } },
  { f: { lat: 35.6, lng: 51.4 }, t: { lat: 25.2, lng: 55.2 } },
  { f: { lat: 39.9, lng: 116.4 }, t: { lat: 35.7, lng: 139.7 } },
];

function arcPts(from: { lat: number; lng: number }, to: { lat: number; lng: number }) {
  const s = new THREE.Vector3(...latLngTo3(from.lat, from.lng, R));
  const e = new THREE.Vector3(...latLngTo3(to.lat, to.lng, R));
  return Array.from({ length: 65 }, (_, i) => {
    const t = i / 64;
    const p = new THREE.Vector3().lerpVectors(s, e, t);
    p.normalize().multiplyScalar(R * (1 + 0.4 * Math.sin(Math.PI * t)));
    return p;
  });
}

function Missile({ route }: { route: typeof routes[0] }) {
  const ref = useRef<THREE.Mesh>(null);
  const pts = useMemo(() => arcPts(route.f, route.t), [route]);
  const pos = useMemo(() => pts.map(p => [p.x, p.y, p.z] as [number, number, number]), [pts]);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const idx = Math.min(Math.floor(((clock.getElapsedTime() * 0.15) % 1) * (pts.length - 1)), pts.length - 1);
    ref.current.position.copy(pts[idx]);
  });
  return (
    <>
      <Line points={pos} color="#ff2244" lineWidth={1} opacity={0.4} transparent />
      <mesh ref={ref}><sphereGeometry args={[0.03, 8, 8]} /><meshBasicMaterial color="#ff2244" /></mesh>
    </>
  );
}

// Satellite orbit
function Sat({ inc, spd, rad }: { inc: number; spd: number; rad: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const pts = useMemo(() => Array.from({ length: 129 }, (_, i) => { const a = (i / 128) * Math.PI * 2; return [Math.cos(a) * rad, 0, Math.sin(a) * rad] as [number, number, number]; }), [rad]);
  useFrame(({ clock }) => { if (ref.current) { const a = clock.getElapsedTime() * spd; ref.current.position.set(Math.cos(a) * rad, 0, Math.sin(a) * rad); } });
  return (
    <group rotation={[inc, 0, inc * 0.5]}>
      <Line points={pts} color="#00e5ff" lineWidth={0.5} opacity={0.15} transparent />
      <mesh ref={ref}><boxGeometry args={[0.04, 0.015, 0.04]} /><meshBasicMaterial color="#00e5ff" /></mesh>
    </group>
  );
}

// Grid ring
function Ring({ rad, y }: { rad: number; y: number }) {
  const pts = useMemo(() => Array.from({ length: 129 }, (_, i) => { const a = (i / 128) * Math.PI * 2; return [Math.cos(a) * rad, y, Math.sin(a) * rad] as [number, number, number]; }), [rad, y]);
  return <Line points={pts} color="#ff2244" lineWidth={0.5} opacity={0.1} transparent />;
}

// Camera animator
function CamCtrl({ phase, target, ctrlRef }: { phase: HackPhase; target: { lat: number; lng: number } | null; ctrlRef: React.RefObject<any> }) {
  const { camera } = useThree();
  const home = useMemo(() => new THREE.Vector3(0, 1.5, 4.5), []);
  const dest = useMemo(() => {
    if (!target) return home.clone();
    const p = new THREE.Vector3(...latLngTo3(target.lat, target.lng, R));
    return p.normalize().multiplyScalar(R * 2.5);
  }, [target, home]);
  useFrame(() => {
    if (phase === "zooming" || phase === "hacked") { camera.position.lerp(dest, 0.025); camera.lookAt(0, 0, 0); }
    else if (phase === "disconnecting") { camera.position.lerp(home, 0.05); camera.lookAt(0, 0, 0); }
  });
  useEffect(() => {
    if (phase === "idle" && ctrlRef.current) { ctrlRef.current.target.set(0, 0, 0); ctrlRef.current.update(); }
  }, [phase, ctrlRef]);
  return null;
}

// Main scene
interface Props {
  phase: HackPhase;
  target: { lat: number; lng: number } | null;
  onNodeClick: (node: DarknetNode) => void;
}

export default function GlobeScene({ phase, target, onNodeClick }: Props) {
  const [countries, setCountries] = useState<DecodedCountry[]>([]);
  const ctrlRef = useRef<any>(null);

  useEffect(() => {
    fetch(ATLAS).then(r => r.json()).then(t => setCountries(decodeTopo(t, R))).catch(() => {});
  }, []);

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#00e5ff" />
      <pointLight position={[-5, -3, 3]} intensity={0.2} color="#ff2244" />

      <Sphere args={[R, 64, 64]}><meshBasicMaterial color="#001825" transparent opacity={0.7} /></Sphere>
      <Sphere args={[R * 1.001, 36, 36]}><meshBasicMaterial color="#0a2a3a" wireframe transparent opacity={0.15} /></Sphere>

      <Borders countries={countries} selId={null} />

      {/* Darknet nodes */}
      {DARKNET_NODES.map(node => (
        <ThreatNodeMesh key={node.id} node={node} onClick={onNodeClick} />
      ))}

      {routes.map((r, i) => <Missile key={i} route={r} />)}

      <Sat inc={0.5} spd={0.4} rad={R * 1.3} />
      <Sat inc={-0.3} spd={0.3} rad={R * 1.5} />
      <Sat inc={0.8} spd={0.25} rad={R * 1.7} />

      <Ring rad={R * 2.2} y={0} />
      <Ring rad={R * 2} y={0.3} />
      <Ring rad={R * 2} y={-0.3} />

      <CamCtrl phase={phase} target={target} ctrlRef={ctrlRef} />
      <OrbitControls ref={ctrlRef} enabled={phase === "idle"} enableZoom={false} enablePan={false} autoRotate={phase === "idle"} autoRotateSpeed={0.3} minPolarAngle={Math.PI * 0.3} maxPolarAngle={Math.PI * 0.7} />
    </>
  );
}
