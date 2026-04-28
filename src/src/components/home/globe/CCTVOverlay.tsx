import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const FEEDS = [
  { id: "CAM_01", sector: "SECTOR_7", label: "STREET_VIEW" },
  { id: "CAM_02", sector: "SECTOR_3", label: "TRAFFIC_HUB" },
  { id: "CAM_03", sector: "SECTOR_12", label: "GOVT_BLDG" },
  { id: "CAM_04", sector: "SECTOR_1", label: "PORT_ENTRY" },
];

function NoiseCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d")!;
    c.width = 200;
    c.height = 150;
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
  return <canvas ref={ref} className="absolute inset-0 w-full h-full object-cover cctv-filter" />;
}

function Timecode() {
  const [t, setT] = useState("");
  useEffect(() => {
    const u = () => {
      const d = new Date();
      setT(`${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}:${String(Math.floor(d.getMilliseconds() / 10)).padStart(2, "0")}`);
    };
    u();
    const id = setInterval(u, 100);
    return () => clearInterval(id);
  }, []);
  return <span>{t}</span>;
}

interface Props {
  countryName: string;
  onDisconnect: () => void;
}

const CCTVOverlay = ({ countryName, onDisconnect }: Props) => {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const timers = FEEDS.map((_, i) => setTimeout(() => setShown(i + 1), (i + 1) * 350));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="absolute inset-0 z-20 animate-cctv-glitch">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Header */}
      <div className="relative z-10 p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="font-mono-cyber text-xs text-neon-cyan animate-rgb-split tracking-widest">
            ◈ INTERCEPTING FEEDS — {countryName.toUpperCase()}
          </div>
          <button
            onClick={onDisconnect}
            className="flex items-center gap-2 border border-primary/50 px-4 py-1.5 font-mono-cyber text-xs text-primary hover:bg-primary hover:text-primary-foreground transition-all tracking-widest group"
          >
            <X size={12} className="group-hover:animate-spin" />
            DISCONNECT
          </button>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
      </div>

      {/* Feed grid */}
      <div className="relative z-10 grid grid-cols-2 gap-3 p-4 pt-2 h-[calc(100%-90px)]">
        {FEEDS.map((feed, i) => (
          <div
            key={feed.id}
            className={`relative border border-neon-cyan/20 bg-background/50 overflow-hidden transition-all duration-500 ${i < shown ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            <NoiseCanvas />

            {/* Scanline */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 scanline opacity-40" />
              <div className="absolute w-full h-8 bg-gradient-to-b from-neon-cyan/10 to-transparent animate-cctv-scanline" />
            </div>

            {/* Static flash */}
            <div className="absolute inset-0 bg-foreground/5 animate-cctv-static pointer-events-none" />

            {/* Info */}
            <div className="absolute inset-0 p-2 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start">
                <span className="font-mono-cyber text-[10px] text-neon-cyan/80">{feed.id}_{feed.sector}</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary animate-blink-rec" />
                  <span className="font-mono-cyber text-[10px] text-primary">REC</span>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <span className="font-mono-cyber text-[9px] text-foreground/50">{feed.label}</span>
                <span className="font-mono-cyber text-[10px] text-neon-cyan/60"><Timecode /></span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Status bar */}
      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
        <div className="flex items-center justify-between font-mono-cyber text-[10px] text-muted-foreground">
          <span>FEEDS: {shown}/{FEEDS.length} ACTIVE</span>
          <span className="text-primary animate-pulse-glow">⚠ UNAUTHORIZED ACCESS</span>
          <span>ENCRYPTION: AES-256</span>
        </div>
      </div>
    </div>
  );
};

export default CCTVOverlay;
