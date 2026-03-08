import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const R = 1.6;

function latLngTo3(lat: number, lng: number, r: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const th = (lng + 180) * (Math.PI / 180);
  return [-(r * Math.sin(phi) * Math.cos(th)), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(th)];
}

export interface DarknetNode {
  id: string;
  lat: number;
  lng: number;
  type: "darknet" | "threat" | "marketplace";
  label: string;
}

export const DARKNET_NODES: DarknetNode[] = [
  { id: "DN_001", lat: 55.7, lng: 37.6, type: "darknet", label: "HYDRA_NEXUS" },
  { id: "DN_002", lat: 52.5, lng: 13.4, type: "marketplace", label: "SILK_ROAD_V4" },
  { id: "DN_003", lat: 39.9, lng: 116.4, type: "threat", label: "APT_41_C2" },
  { id: "DN_004", lat: 25.0, lng: -80.2, type: "marketplace", label: "CARTEL_LEDGER" },
  { id: "DN_005", lat: -23.5, lng: -46.6, type: "darknet", label: "ONION_RELAY_BR" },
  { id: "DN_006", lat: 35.6, lng: 51.4, type: "threat", label: "ZERO_DAY_CACHE" },
  { id: "DN_007", lat: 1.3, lng: 103.8, type: "darknet", label: "TOR_EXIT_SG" },
  { id: "DN_008", lat: 48.8, lng: 2.3, type: "marketplace", label: "ARMS_BAZAAR_EU" },
  { id: "DN_009", lat: 33.9, lng: -118.2, type: "threat", label: "BOTNET_WEST" },
  { id: "DN_010", lat: 19.4, lng: -99.1, type: "darknet", label: "NARCO_NET_MX" },
  { id: "DN_011", lat: -33.8, lng: 18.5, type: "marketplace", label: "CRYPTO_LAUNDER_ZA" },
  { id: "DN_012", lat: 37.5, lng: 127.0, type: "threat", label: "LAZARUS_PROXY" },
];

const COLOR_MAP = {
  darknet: "#ff4422",
  threat: "#ff8800",
  marketplace: "#ff2266",
};

interface Props {
  node: DarknetNode;
  onClick: (node: DarknetNode) => void;
}

export default function ThreatNodeMesh({ node, onClick }: Props) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const pos = useMemo(() => latLngTo3(node.lat, node.lng, R * 1.01), [node]);
  const color = COLOR_MAP[node.type];

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pulse = 1 + 0.5 * Math.sin(t * 4 + node.lat * 0.1);
    if (meshRef.current) meshRef.current.scale.setScalar(pulse);
    if (ringRef.current) {
      const ringPulse = 1 + 0.8 * Math.sin(t * 2 + node.lng * 0.1);
      ringRef.current.scale.setScalar(ringPulse);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 0.6 - 0.4 * Math.sin(t * 2 + node.lng * 0.1);
    }
  });

  return (
    <group position={pos}>
      {/* Core pulsating node */}
      <mesh ref={meshRef} onClick={(e) => { e.stopPropagation(); onClick(node); }}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshBasicMaterial color={color} />
      </mesh>
      {/* Outer ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.05, 0.065, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}
