import Layout from "@/components/Layout";
import { ShoppingCart, Skull, X } from "lucide-react";
import { TimelineDemo } from "@/components/TimeLine";


const projects = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Security Audit",
    desc: "Comprehensive penetration testing and security audit of a major e-commerce platform processing $50M+ in annual transactions. Identified 23 critical vulnerabilities including SQL injection, XSS, and insecure API endpoints. Delivered a remediation roadmap that reduced attack surface by 87%.",
    tags: ["Penetration Testing", "Web Security", "API Security"],
    color: "neon-cyan",
  },
  {
    icon: Skull,
    title: "Drug Cartel Investigation",
    desc: "Multi-year digital forensics investigation supporting DEA operations against a transnational drug trafficking network. Traced cryptocurrency transactions across multiple blockchains, recovered encrypted communications, and provided expert testimony leading to 12 convictions.",
    tags: ["Digital Forensics", "Cryptocurrency", "Law Enforcement"],
    color: "primary",
  },
  {
    icon: X,
    title: "Terrorism Threat Analysis",
    desc: "Intelligence analysis and digital surveillance support for counter-terrorism operations. Developed custom OSINT tools for monitoring extremist communications, identified recruitment networks, and contributed to preventing 3 planned attacks through early warning intelligence.",
    tags: ["Threat Intelligence", "OSINT", "Counter-Terrorism"],
    color: "neon-magenta",
  },
];



const tools = [
  "Nmap", "Wireshark", "Metasploit", "Burp Suite", "Kali Linux",
  "Maltego", "Autopsy", "Volatility", "IDA Pro", "Ghidra",
  "Splunk", "Snort", "Hashcat", "John the Ripper", "Cobalt Strike",
];

const Portfolio = () => (
  <Layout>
    <section className="py-20">
      <div className="container">
        <p className="font-mono-cyber text-xs tracking-widest text-neon-cyan mb-2">// PORTFOLIO</p>
        <h1 className="font-mono-cyber text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-4xl">
          
          <span className="animate-gradient bg-gradient-to-r from-purple-600 via-red-500 to-green-600 bg-[length:200%_200%] bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        <div className="grid gap-6 lg:grid-cols-3 py-5">
          {projects.map((project, i) => (
            <div key={i} className="card-neon group rounded-lg p-6 transition-all">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background">
                <project.icon className={`text-${project.color}`} size={24} />
              </div>
              <h3 className="mb-3 font-display text-sm tracking-wider text-foreground">{project.title}</h3>
              <p className="mb-4 font-body text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-sm border border-border bg-background px-2 py-1 font-mono-cyber text-[10px] text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
        <TimelineDemo />
        </div>

        {/* Tool Kit */}
        <div className="mt-24">
          <h2 className="mb-8 font-display text-xl tracking-wider text-foreground">
            My <span className="text-primary">Tool Kit</span>
          </h2>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-5">
            {tools.map((tool) => (
              <div key={tool} className="card-neon flex items-center justify-center rounded-lg p-4 text-center transition-all">
                <span className="font-mono-cyber text-xs text-muted-foreground">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Portfolio;
