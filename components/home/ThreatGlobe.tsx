import { useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import GlobeScene from "./globe/GlobeScene";
import ThreatDashboard from "./globe/ThreatDashboard";
import type { DarknetNode } from "./globe/ThreatNode";

export type HackPhase = "idle" | "zooming" | "hacked" | "disconnecting";

const ThreatGlobe = () => {
  const [phase, setPhase] = useState<HackPhase>("idle");
  const [targetNode, setTargetNode] = useState<DarknetNode | null>(null);

  const handleNodeClick = useCallback((node: DarknetNode) => {
    if (phase !== "idle") return;
    setTargetNode(node);
    setPhase("zooming");
    setTimeout(() => setPhase("hacked"), 2200);
  }, [phase]);

  const handleDisconnect = useCallback(() => {
    setPhase("disconnecting");
    setTimeout(() => {
      setPhase("idle");
      setTargetNode(null);
    }, 1500);
  }, []);

  return (
    <div className="relative h-[600px] w-full lg:h-[700px] select-none">
      <Canvas
        camera={{ position: [0, 1.5, 4.5], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <GlobeScene
          phase={phase}
          target={targetNode ? { lat: targetNode.lat, lng: targetNode.lng } : null}
          onNodeClick={handleNodeClick}
        />
      </Canvas>

      {phase === "hacked" && targetNode && (
        <ThreatDashboard node={targetNode} onDisconnect={handleDisconnect} />
      )}

      {/* Corner brackets */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-4 top-4"><div className="h-8 w-8 border-l-2 border-t-2 border-neon-cyan/30" /></div>
        <div className="absolute right-4 top-4"><div className="h-8 w-8 border-r-2 border-t-2 border-neon-cyan/30" /></div>
        <div className="absolute bottom-4 left-4"><div className="h-8 w-8 border-b-2 border-l-2 border-primary/30" /></div>
        <div className="absolute bottom-4 right-4"><div className="h-8 w-8 border-b-2 border-r-2 border-primary/30" /></div>
      </div>

      {phase === "idle" && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
          <p className="font-mono-cyber text-xs text-neon-cyan/60 animate-pulse-glow">
            [ CLICK ANY THREAT NODE TO INITIATE INTERCEPTION ]
          </p>
        </div>
      )}

      {phase === "zooming" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="font-mono-cyber text-sm text-primary animate-pulse-glow text-glow-red tracking-widest">
            ▶ ACQUIRING TARGET: {targetNode?.label}...
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreatGlobe;
