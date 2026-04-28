import { useEffect, useRef, useState, useMemo } from "react";
import { X, Zap, ShieldAlert, Wifi } from "lucide-react";
import type { DarknetNode } from "./ThreatNode";

// ── Terminal log lines ──
const LOG_LINES = [
  "> DECRYPTING P2P LEDGER: Contraband transaction intercepted...",
  "> ISOLATING NODE: Illegal arms marketplace identified...",
  "> TRAFFIC ANOMALY: Narcotics distribution network pinged at 54.32, -12.44",
  "> PAYLOAD DETECTED: Weaponized zero-day exploit routed via onion protocol.",
  "> TRACING WALLET: Cryptocurrency tumbler output → 3xF9k...7mZp",
  "> INTERCEPT: Encrypted dead drop scheduled at [REDACTED]",
  "> WARNING: Polymorphic malware signature detected in relay chain",
  "> PARSING: Dark pool transaction log — $2.4M in unregistered assets",
  "> GEOFENCE BREACH: Unauthorized access from TOR exit node 194.xx.xx.12",
  "> SIGNAL INTEL: Voice intercept — language: [CLASSIFIED] — priority: ALPHA",
  "> SCRAPING: Hidden wiki index updated — 47 new .onion services cataloged",
  "> ALERT: Ransomware C2 beacon detected — callback interval: 300s",
  "> FORENSIC: Steganographic payload extracted from image header",
  "> MONITORING: IRC channel #shadowmarket — 312 active users",
  "> DECRYPT COMPLETE: PGP key ring compromised — 8 identities exposed",
];

// ── Noise Canvas ──
function NoiseCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d")!;
    c.width = 200; c.height = 150;
    let on = true, last = 0;
    const draw = (t: number) => {
      if (!on) return;
      if (t - last > 80) {
        const img = ctx.createImageData(200, 150);
        for (let i = 0; i < img.data.length; i += 4) {
          const v = Math.random() * 100;
          img.data[i] = v * 0.4;
          img.data[i + 1] = v;
          img.data[i + 2] = v * 0.3;
          img.data[i + 3] = 255;
        }
        ctx.putImageData(img, 0, 0);
        last = t;
      }
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
    return () => { on = false; };
  }, []);
  return <canvas ref={ref} className={`absolute inset-0 w-full h-full object-cover cctv-filter ${className || ""}`} />;
}

// ── Timecode ──
function Timecode() {
  const [t, setT] = useState("");
  useEffect(() => {
    const u = () => {
      const d = new Date();
      setT(`${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}:${String(Math.floor(d.getMilliseconds() / 10)).padStart(2, "0")}`);
    };
    u(); const id = setInterval(u, 100);
    return () => clearInterval(id);
  }, []);
  return <span>{t}</span>;
}

// ── Radar Sweep SVG ──
function RadarSweep() {
  return (
    <div className="relative w-full aspect-square">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Rings */}
        {[20, 35, 50].map(r => (
          <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="hsl(var(--neon-cyan))" strokeWidth="0.3" opacity="0.3" />
        ))}
        {/* Cross */}
        <line x1="50" y1="0" x2="50" y2="100" stroke="hsl(var(--neon-cyan))" strokeWidth="0.2" opacity="0.2" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="hsl(var(--neon-cyan))" strokeWidth="0.2" opacity="0.2" />
        {/* Sweep */}
        <line x1="50" y1="50" x2="50" y2="0" stroke="hsl(var(--neon-cyan))" strokeWidth="0.8" opacity="0.8" className="origin-center animate-[radar-sweep_4s_linear_infinite]" />
        {/* Blips */}
        {[[35, 30], [60, 65], [70, 25], [40, 70], [55, 40]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.5" fill="hsl(var(--primary))" opacity="0.8" className="animate-pulse-glow" />
        ))}
      </svg>
    </div>
  );
}

// ── Sine Wave ──
function SineWave() {
  const path = useMemo(() => {
    const pts: string[] = [];
    for (let x = 0; x <= 200; x += 2) {
      const y = 25 + Math.sin(x * 0.08) * 15 + Math.sin(x * 0.15) * 8 + Math.random() * 4;
      pts.push(`${x},${y}`);
    }
    return `M${pts.join(" L")}`;
  }, []);

  return (
    <svg viewBox="0 0 200 50" className="w-full h-12">
      <path d={path} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.7" />
      <path d={path} fill="none" stroke="hsl(var(--primary))" strokeWidth="3" opacity="0.15" />
    </svg>
  );
}

// ── Terminal Feed ──
function TerminalFeed() {
  const [lines, setLines] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let idx = 0;
    const iv = setInterval(() => {
      setLines(prev => {
        const next = [...prev, LOG_LINES[idx % LOG_LINES.length]];
        idx++;
        return next.slice(-12);
      });
    }, 1200);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [lines]);

  return (
    <div ref={scrollRef} className="h-full overflow-hidden font-mono-cyber text-[10px] leading-relaxed">
      {lines.map((l, i) => (
        <div key={i} className={`py-0.5 ${l.includes("ALERT") || l.includes("WARNING") ? "text-primary" : l.includes("INTERCEPT") || l.includes("DECRYPT") ? "text-neon-cyan" : "text-muted-foreground"}`}>
          {l}
        </div>
      ))}
      <span className="inline-block w-2 h-3 bg-neon-cyan/80 animate-pulse-glow" />
    </div>
  );
}

// ── CCTV Feed ──
const CCTV_FEEDS = [
  { id: "CAM_01", sector: "DARKNET_RELAY", label: "SERVER_ROOM", status: "SURVEILLANCE_LINK_ESTABLISHED" },
  { id: "CAM_02", sector: "PORT_ALPHA", label: "SHIPPING_PORT", status: "INTERPOL_WARRANT_PENDING" },
  { id: "CAM_03", sector: "URBAN_GRID", label: "DARK_ALLEY", status: "FACIAL_MATCH: 87.3%" },
  { id: "CAM_04", sector: "BORDER_CHK", label: "CHECKPOINT", status: "CONTRABAND_SCAN_ACTIVE" },
];

function CCTVFeed({ feed, delay }: { feed: typeof CCTV_FEEDS[0]; delay: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), delay); return () => clearTimeout(t); }, [delay]);

  if (!visible) return <div className="border border-border/30 bg-background/30" />;

  return (
    <div className="relative border border-neon-cyan/20 bg-background/50 overflow-hidden animate-cctv-glitch">
      <NoiseCanvas />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 scanline opacity-40" />
        <div className="absolute w-full h-8 bg-gradient-to-b from-neon-cyan/10 to-transparent animate-cctv-scanline" />
      </div>
      <div className="absolute inset-0 bg-foreground/5 animate-cctv-static pointer-events-none" />
      <div className="absolute inset-0 p-1.5 flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between items-start">
          <span className="font-mono-cyber text-[9px] text-neon-cyan/80">{feed.id}_{feed.sector}</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-blink-rec" />
            <span className="font-mono-cyber text-[8px] text-primary">REC</span>
          </div>
        </div>
        <div>
          <div className="font-mono-cyber text-[8px] text-primary/80 animate-rgb-split mb-0.5">{feed.status}</div>
          <div className="flex justify-between items-end">
            <span className="font-mono-cyber text-[8px] text-foreground/40">{feed.label}</span>
            <span className="font-mono-cyber text-[8px] text-neon-cyan/60"><Timecode /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Dashboard ──
interface Props {
  node: DarknetNode;
  onDisconnect: () => void;
}

export default function ThreatDashboard({ node, onDisconnect }: Props) {
  return (
    <div className="absolute inset-0 z-20 animate-cctv-glitch">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />

      {/* Header */}
      <div className="relative z-10 p-3">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <ShieldAlert size={14} className="text-primary animate-pulse-glow" />
            <span className="font-mono-cyber text-xs text-neon-cyan animate-rgb-split tracking-widest">
              ◈ THREAT INTERCEPTION — {node.label}
            </span>
          </div>
          <button
            onClick={onDisconnect}
            className="flex items-center gap-2 border-2 border-primary/60 px-4 py-1.5 font-mono-cyber text-xs text-primary hover:bg-primary hover:text-primary-foreground transition-all tracking-widest group sever-btn"
          >
            <X size={12} className="group-hover:animate-spin" />
            SEVER CONNECTION
          </button>
        </div>
        <div className="flex items-center gap-3 font-mono-cyber text-[10px] text-muted-foreground">
          <span><Zap size={10} className="inline text-primary" /> NODE: {node.id}</span>
          <span>|</span>
          <span>TYPE: {node.type.toUpperCase()}</span>
          <span>|</span>
          <span>COORDS: {node.lat.toFixed(2)}, {node.lng.toFixed(2)}</span>
          <span>|</span>
          <span className="text-primary animate-pulse-glow">⚠ UNAUTHORIZED ACCESS</span>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mt-2" />
      </div>

      {/* Main grid */}
      <div className="relative z-10 grid grid-cols-12 gap-2 p-3 pt-1 h-[calc(100%-100px)]">
        {/* Left: Terminal */}
        <div className="col-span-5 flex flex-col gap-2">
          <div className="border border-neon-cyan/15 bg-background/60 p-2 flex-1 overflow-hidden">
            <div className="flex items-center gap-2 mb-1">
              <Wifi size={10} className="text-neon-cyan" />
              <span className="font-mono-cyber text-[9px] text-neon-cyan/70 tracking-widest">LIVE INTERCEPT STREAM</span>
            </div>
            <div className="h-px bg-neon-cyan/10 mb-1" />
            <TerminalFeed />
          </div>

          {/* Data viz row */}
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-neon-cyan/15 bg-background/60 p-2">
              <span className="font-mono-cyber text-[8px] text-neon-cyan/60 tracking-widest block mb-1">ENCRYPTED TRAFFIC VOL.</span>
              <SineWave />
            </div>
            <div className="border border-primary/15 bg-background/60 p-2">
              <span className="font-mono-cyber text-[8px] text-primary/60 tracking-widest block mb-1">BLACK-MARKET TRADE VAL.</span>
              <SineWave />
            </div>
          </div>
        </div>

        {/* Center: Radar */}
        <div className="col-span-3 flex flex-col gap-2">
          <div className="border border-neon-cyan/15 bg-background/60 p-2 flex-1">
            <span className="font-mono-cyber text-[8px] text-neon-cyan/60 tracking-widest block mb-1">THREAT RADAR</span>
            <RadarSweep />
          </div>
          <div className="border border-primary/15 bg-background/60 p-2">
            <span className="font-mono-cyber text-[8px] text-primary/60 tracking-widest block mb-1">NETWORK STATUS</span>
            <div className="grid grid-cols-2 gap-1 mt-1">
              {[
                { label: "TOR RELAYS", value: "2,847", status: "active" },
                { label: "I2P NODES", value: "412", status: "active" },
                { label: "INTERCEPTED", value: "1,203", status: "warning" },
                { label: "BLOCKED", value: "89", status: "critical" },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className={`font-mono-cyber text-sm font-bold ${s.status === "critical" ? "text-primary" : s.status === "warning" ? "text-neon-magenta" : "text-neon-cyan"}`}>{s.value}</div>
                  <div className="font-mono-cyber text-[7px] text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: CCTV feeds */}
        <div className="col-span-4 grid grid-cols-2 grid-rows-2 gap-1.5">
          {CCTV_FEEDS.map((feed, i) => (
            <CCTVFeed key={feed.id} feed={feed} delay={(i + 1) * 400} />
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div className="absolute bottom-0 left-0 right-0 p-2 z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-1" />
        <div className="flex items-center justify-between font-mono-cyber text-[9px] text-muted-foreground">
          <span>FEEDS: 4/4 ACTIVE</span>
          <span>PROTOCOL: ONION_v3</span>
          <span className="text-primary animate-pulse-glow">⚠ THREAT LEVEL: CRITICAL</span>
          <span>ENCRYPTION: AES-256-GCM</span>
        </div>
      </div>
    </div>
  );
}
