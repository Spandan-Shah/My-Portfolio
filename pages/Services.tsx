import Layout from "@/components/Layout";
import { Shield, Radar, Search, Microscope, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Cybersecurity",
    paragraphs: [
      "Our cybersecurity services encompass the full spectrum of defensive and offensive security measures. From initial risk assessments to ongoing monitoring, we provide end-to-end protection for your digital assets.",
      "Our methodology includes vulnerability scanning, penetration testing, red team exercises, and security architecture review. We use industry-leading tools and frameworks including NIST, ISO 27001, and MITRE ATT&CK.",
      "Client benefits include reduced risk exposure, compliance with regulatory requirements, and a hardened security posture. Deliverables include detailed vulnerability reports, executive summaries, and prioritized remediation roadmaps.",
    ],
    process: ["Discovery & Scoping", "Vulnerability Assessment", "Exploitation & Testing", "Reporting & Remediation"],
  },
  {
    icon: Radar,
    title: "Threat Analysis",
    paragraphs: [
      "Our threat analysis service provides real-time intelligence gathering and proactive threat hunting to identify and neutralize threats before they materialize into breaches.",
      "We leverage advanced SIEM platforms, custom threat intelligence feeds, dark web monitoring, and machine learning models to detect anomalous behavior and emerging threat patterns across your infrastructure.",
      "Deliverables include threat landscape reports, indicator of compromise (IOC) feeds, custom detection rules, and strategic threat briefings for executive leadership.",
    ],
    process: ["Intelligence Collection", "Threat Modeling", "Detection Engineering", "Strategic Briefing"],
  },
  {
    icon: Search,
    title: "Criminal Investigations",
    paragraphs: [
      "Our digital criminal investigation services support law enforcement agencies, corporate legal teams, and regulatory bodies in building airtight cases with digital evidence.",
      "We follow strict chain-of-custody protocols, utilize forensically sound acquisition methods, and document every step for legal admissibility. Our investigators are experienced expert witnesses in federal and international courts.",
      "Services include digital evidence acquisition, mobile device forensics, cryptocurrency tracing, social media analysis, and comprehensive expert reports suitable for legal proceedings.",
    ],
    process: ["Evidence Preservation", "Forensic Analysis", "Report Generation", "Expert Testimony"],
  },
  {
    icon: Microscope,
    title: "Digital Forensics",
    paragraphs: [
      "Our digital forensics practice specializes in the deep analysis of compromised systems, malware reverse engineering, and complete incident reconstruction.",
      "We use state-of-the-art forensic tools including EnCase, FTK, Autopsy, Volatility, and custom-built analysis pipelines to examine disk images, memory dumps, network captures, and log files.",
      "Every engagement produces a detailed forensic report with timeline reconstruction, root cause analysis, impact assessment, and recommendations for preventing future incidents.",
    ],
    process: ["System Acquisition", "Deep Analysis", "Malware Reverse Engineering", "Incident Reconstruction"],
  },
];

const Services = () => (
  <Layout>
    <section className="py-20">
      <div className="container">
        <p className="font-mono-cyber text-xs tracking-widest text-neon-cyan mb-2">// SERVICES</p>
        <h1 className="mb-16 font-display text-3xl font-bold tracking-wider text-foreground md:text-4xl">
          Our <span className="text-primary text-glow-red">Services</span>
        </h1>

        <div className="space-y-20">
          {services.map((service, i) => (
            <div key={i} className="card-neon rounded-xl p-8 transition-all lg:p-10">
              <div className="grid gap-10 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-4">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background">
                      <service.icon className="text-primary" size={28} />
                    </div>
                    <h2 className="font-display text-xl font-bold tracking-wider text-foreground">{service.title}</h2>
                  </div>
                  {service.paragraphs.map((p, j) => (
                    <p key={j} className="font-body text-base text-muted-foreground leading-relaxed">{p}</p>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-xs tracking-widest text-neon-cyan">PROCESS FLOW</h3>
                  <div className="space-y-3">
                    {service.process.map((step, j) => (
                      <div key={j} className="flex items-center gap-3 rounded-sm border border-border bg-background p-3">
                        <span className="font-mono-cyber text-xs text-primary">{String(j + 1).padStart(2, "0")}</span>
                        <ArrowRight size={12} className="text-muted-foreground" />
                        <span className="font-body text-sm text-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#" className="mt-4 inline-block font-mono-cyber text-xs text-primary transition-colors hover:text-neon-cyan">
                    Download Case Study PDF →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
