import { Shield, Radar, Search, Microscope, Globe, Newspaper } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/Portrait.png";
import ThreatGlobe from "./ThreatGlobe";

const skills = [
  "Ethical Hacking", "Nmap", "Wireshark", "Metasploit", "Burp Suite",
  "Kali Linux", "OSINT", "Splunk", "Snort", "Autopsy",
];

const focusCards = [
  { icon: Shield, title: "Cybersecurity", desc: "Advanced threat protection and network defense strategies." },
  { icon: Search, title: "Criminal Investigations", desc: "Digital evidence analysis for law enforcement agencies." },
  { icon: Microscope, title: "Digital Forensics", desc: "Deep-dive analysis of compromised systems and data." },
];

const newsItems = [
  { title: "Selected For Smart India Hackathon - 2024", date: "Dec 2024" },

];

const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Cyber workspace" className="h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      <div className="scanline absolute inset-0 pointer-events-none" />
    </div>

    <div className="relative z-10 w-full px-6 py-20 lg:px-16 lg:py-28 lg:mx-16">
      {/* Hero intro */}
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-6">
          <p className="font-mono-cyber text-md tracking-widest text-white animate-flicker">
            // SYSTEM.ONLINE — SECURE CONNECTION ESTABLISHED
          </p>
          <h1 className="font-mono-cyber text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-primary text-red">Spandan Shah</span>
          </h1>
          <h2 className="font-display text-lg tracking-wider text-yellow-500 md:text-xl">
            Student
          </h2>
          <div className="space-y-4 font-body text-base leading-relaxed text-white md:text-lg lg:text-2xl">
            <p>
              I am a highly driven and innovation-focused engineering student with a deep passion for cybersecurity, 
              embedded systems, artificial intelligence, and full-stack development. I enjoy building ambitious projects that solve real-world problems through secure, 
              intelligent, and scalable technology.
            </p>
            <p>
              I am not only interested in coding, but also in building complete ecosystems around my ideas, including architecture design, 
              structured documentation, version control, patent-oriented thinking, startup vision, and research publication goals. I pay close attention to both technical depth and presentation quality, 
              and I like treating my projects with the seriousness of real products rather than just student submissions.
            </p>
            <p>
              My mindset is growth-oriented, ambitious, and future-focused. I want to transform ideas into impactful products, intellectual property, and meaningful contributions in cybersecurity, intelligent systems, 
              and next-generation communication technologies. I see myself as someone who is not just learning technology, 
              but actively using it to engineer original solutions with academic, industrial, and entrepreneurial value.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 lg:col-span-2">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-neon-red/30 to-neon-cyan/30 blur-md" />
            <img
              src={portrait}
              alt="Professional portrait"
              className="relative h-72 w-72 rounded-lg object-cover border border-border lg:h-80 lg:w-80"
            />
          </div>

          {/* On the News */}
          <div className="w-full space-y-3 pr-10 px-5">
            <h3 className="flex items-center gap-2 font-display text-xs tracking-widest text-foreground">
              <Newspaper size={14} className="text-primary" /> ON THE NEWS
            </h3>
            {newsItems.map((item, i) => (
              <a
                key={i}
                href="#"
                className="card-neon block rounded-sm p-3 transition-all hover:border-glow-red"
              >
                <p className="font-body text-sm text-foreground">{item.title}</p>
                <p className="font-mono-cyber text-[10px] text-muted-foreground">{item.date}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* About Me + Focus Cards */}
      <div className="mt-20">
        <h2 className="mb-10 text-center font-display text-2xl font-bold tracking-wider md:text-3xl">
          <span className="text-neon-cyan text-glow-cyan">About</span>{" "}
          <span className="text-neon-magenta text-glow-magenta">Me</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {focusCards.map((card, i) => (
            <div key={i} className="card-neon group rounded-lg p-6 transition-all">
              <card.icon className="mb-4 text-primary" size={36} />
              <h3 className="mb-2 font-display text-sm tracking-wider text-foreground">{card.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <h3 className="mb-6 font-display text-sm tracking-widest text-foreground">MY SKILLS</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-sm border border-border bg-surface px-4 py-2 font-mono-cyber text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* 3D Threat Globe */}
      <div className="mt-20">
        <div className="mb-6 flex items-center gap-3">
          <Globe className="text-primary" size={20} />
          <h3 className="font-display text-sm tracking-widest text-foreground">GLOBAL THREAT SURVEILLANCE</h3>
          <span className="rounded-sm bg-primary/20 px-2 py-0.5 font-mono-cyber text-[10px] text-primary animate-pulse-glow">
            LIVE
          </span>
        </div>
        <p className="mb-6 max-w-xl font-body text-sm text-muted-foreground leading-relaxed">
          Real-time global threat monitoring across <span className="text-primary font-bold">20+ countries</span>.
          Tracking missile trajectories, satellite networks, and intercepted communications.
        </p>
        <ThreatGlobe />
      </div>
    </div>
  </section>
);

export default HeroSection;
