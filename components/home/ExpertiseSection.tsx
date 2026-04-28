import { Shield, Radar, Search, Microscope } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Comprehensive security assessments, penetration testing, and vulnerability management to fortify your digital infrastructure against evolving threats.",
  },
  {
    icon: Radar,
    title: "Threat Analysis",
    desc: "Real-time threat intelligence gathering and analysis using advanced SIEM tools, machine learning models, and dark web monitoring to preempt attacks.",
  },
  {
    icon: Search,
    title: "Criminal Investigations",
    desc: "Expert digital evidence collection and analysis for law enforcement, corporate fraud cases, and international cybercrime investigations.",
  },
  {
    icon: Microscope,
    title: "Digital Forensics",
    desc: "Deep forensic analysis of compromised systems, malware reverse engineering, and incident reconstruction for legal proceedings and compliance.",
  },
];

const ExpertiseSection = () => (
  <section className="border-t border-border bg-surface py-20">
    <div className="container">
      <p className="font-mono-cyber text-xs tracking-widest text-neon-cyan mb-2">// SERVICES</p>
      <h2 className="mb-12 font-display text-2xl font-bold tracking-wider text-foreground md:text-3xl">
        Our <span className="text-primary">Expertise</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <div key={i} className="card-neon group rounded-lg p-6 transition-all">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background">
              <service.icon className="text-primary transition-colors group-hover:text-neon-cyan" size={28} />
            </div>
            <h3 className="mb-3 font-display text-sm tracking-wider text-foreground">{service.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExpertiseSection;
