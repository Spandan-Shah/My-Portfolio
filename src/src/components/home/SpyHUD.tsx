import { useState, useEffect, useRef } from "react";
import { Satellite, Shield, AlertTriangle, Radio, Wifi, Lock, Eye } from "lucide-react";

// Satellite tracking data
const satellites = [
  { id: "SAT-7X91", name: "SIGINT-Alpha", orbit: "LEO 340km", status: "ACTIVE", signal: 94 },
  { id: "SAT-3K42", name: "RECON-Bravo", orbit: "MEO 2040km", status: "ACTIVE", signal: 87 },
  { id: "SAT-9P15", name: "COMINT-Delta", orbit: "LEO 510km", status: "TRACKING", signal: 72 },
  { id: "SAT-6H88", name: "ELINT-Gamma", orbit: "GEO 35786km", status: "ACTIVE", signal: 99 },
];

const threatLevels = [
  { region: "EASTERN EUROPE", level: "HIGH", color: "text-primary" },
  { region: "EAST ASIA", level: "ELEVATED", color: "text-primary" },
  { region: "MIDDLE EAST", level: "CRITICAL", color: "text-primary" },
  { region: "SOUTH ASIA", level: "MODERATE", color: "text-neon-cyan" },
  { region: "NORTH AMERICA", level: "LOW", color: "text-neon-cyan" },
];

const interceptedComms = [
  "[ENCRYPTED] FREQ 14.225 MHz — ORIGIN: 55.7°N 37.6°E",
  "[INTERCEPT] PKT.BURST — NODE_ID: 0xA7F3 — PROTO: UNKNOWN",
  "[DECODED] MSG_FRAG: '...shipment confirmed... grid ref...'",
  "[SIGNAL] SAT-UPLINK DETECTED — BAND: Ku — STRENGTH: -42dBm",
  "[ALERT] ANOMALOUS TRAFFIC — TOR EXIT NODE 185.xx.xx.12",
  "[CRYPTO] RSA-4096 HANDSHAKE INTERCEPTED — ANALYZING...",
];

function useTypewriter(text: string, speed = 30) {
  const [displayed, setDisplayed] = useState("");
  const idx = useRef(0);

  useEffect(() => {
    idx.current = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      if (idx.current < text.length) {
        setDisplayed(text.slice(0, idx.current + 1));
        idx.current++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

function TerminalFeed() {
  const [lines, setLines] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLines((prev) => {
        const next = [...prev, interceptedComms[i % interceptedComms.length]];
        return next.slice(-8);
      });
      i++;
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="card-neon rounded-lg p-4">
      <div className="mb-3 flex items-center gap-2">
        <Radio size={12} className="text-primary animate-pulse-glow" />
        <span className="font-mono-cyber text-[10px] tracking-wider text-primary">INTERCEPTED COMMUNICATIONS</span>
      </div>
      <div ref={scrollRef} className="h-36 overflow-hidden space-y-1.5">
        {lines.map((line, i) => (
          <p key={i} className="font-mono-cyber text-[10px] leading-relaxed text-neon-cyan/70 animate-fade-in">
            {line}
          </p>
        ))}
        <span className="inline-block h-3 w-1.5 animate-pulse-glow bg-neon-cyan" />
      </div>
    </div>
  );
}

function SatelliteTracker() {
  const [activeSat, setActiveSat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSat((prev) => (prev + 1) % satellites.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-neon rounded-lg p-4">
      <div className="mb-3 flex items-center gap-2">
        <Satellite size={12} className="text-neon-cyan" />
        <span className="font-mono-cyber text-[10px] tracking-wider text-neon-cyan">SATELLITE NETWORK</span>
      </div>
      <div className="space-y-2">
        {satellites.map((sat, i) => (
          <div
            key={sat.id}
            className={`flex items-center justify-between rounded-sm border px-3 py-2 transition-all duration-300 ${
              i === activeSat
                ? "border-neon-cyan/40 bg-neon-cyan/5"
                : "border-border bg-transparent"
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`h-1.5 w-1.5 rounded-full ${
                  sat.status === "ACTIVE" ? "bg-neon-cyan animate-pulse-glow" : "bg-primary animate-pulse-glow"
                }`}
              />
              <div>
                <p className="font-mono-cyber text-[10px] text-foreground">{sat.id}</p>
                <p className="font-mono-cyber text-[8px] text-muted-foreground">{sat.orbit}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono-cyber text-[8px] text-muted-foreground">{sat.name}</p>
              <div className="flex items-center gap-1">
                <Wifi size={8} className={i === activeSat ? "text-neon-cyan" : "text-muted-foreground"} />
                <span className="font-mono-cyber text-[8px] text-neon-cyan">{sat.signal}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ThreatMatrix() {
  return (
    <div className="card-neon rounded-lg p-4">
      <div className="mb-3 flex items-center gap-2">
        <AlertTriangle size={12} className="text-primary" />
        <span className="font-mono-cyber text-[10px] tracking-wider text-primary">GLOBAL THREAT MATRIX</span>
      </div>
      <div className="space-y-2">
        {threatLevels.map((threat) => (
          <div key={threat.region} className="flex items-center justify-between">
            <span className="font-mono-cyber text-[10px] text-muted-foreground">{threat.region}</span>
            <span className={`font-mono-cyber text-[10px] font-bold ${threat.color}`}>{threat.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-surface/50 px-4 py-2">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Shield size={10} className="text-neon-cyan" />
          <span className="font-mono-cyber text-[10px] text-neon-cyan">DEFCON 3</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Lock size={10} className="text-neon-cyan" />
          <span className="font-mono-cyber text-[10px] text-neon-cyan">AES-256 ACTIVE</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Eye size={10} className="text-primary" />
          <span className="font-mono-cyber text-[10px] text-primary">4 ASSETS TRACKED</span>
        </div>
      </div>
      <span className="font-mono-cyber text-[10px] text-muted-foreground">
        {time.toISOString().replace("T", " ").slice(0, 19)} UTC
      </span>
    </div>
  );
}

const SpyHUD = () => (
  <div className="space-y-4">
    <StatusBar />
    <div className="grid gap-4 lg:grid-cols-3">
      <SatelliteTracker />
      <TerminalFeed />
      <ThreatMatrix />
    </div>
  </div>
);

export default SpyHUD;
