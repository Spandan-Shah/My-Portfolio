import Layout from "@/components/Layout";
import portrait from "../assets/Portrait.png";
import { Award, ShieldCheck, BookOpen, Target } from "lucide-react";

const timeline = [
  { year: "2015", title: "Started in InfoSec", desc: "Began career as a junior penetration tester at a boutique security firm." },
  { year: "2017", title: "First Major Investigation", desc: "Led forensic analysis of a state-sponsored APT campaign targeting critical infrastructure." },
  { year: "2019", title: "Founded CyberOps Division", desc: "Established a specialized cyber investigations unit for a multinational corporation." },
  { year: "2021", title: "International Collaboration", desc: "Partnered with Interpol on cross-border cybercrime investigations spanning 8 countries." },
  { year: "2023", title: "Published Research", desc: "Published peer-reviewed research on zero-day exploit detection methodologies." },
  { year: "2025", title: "Operation Dark Net", desc: "Led the technical investigation resulting in 47 arrests and $30M in seized assets." },
];

const certifications = [
  { name: "CISSP", full: "Certified Information Systems Security Professional" },
  { name: "OSCP", full: "Offensive Security Certified Professional" },
  { name: "CEH", full: "Certified Ethical Hacker" },
  { name: "GCFA", full: "GIAC Certified Forensic Analyst" },
  { name: "CISM", full: "Certified Information Security Manager" },
  { name: "CompTIA Security+", full: "CompTIA Security+ Certification" },
];

const About = () => (
  <Layout>
    <section className="py-20">
      <div className="container">
        <p className="font-mono-cyber text-xs tracking-widest text-neon-cyan mb-2">// ABOUT</p>
        <h1 className="mb-16 font-display text-3xl font-bold tracking-wider text-foreground md:text-4xl">
          About <span className="text-primary text-glow-red">Me</span>
        </h1>

        {/* Two column intro */}
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-neon-red/20 to-neon-cyan/20 blur-xl" />
            <img src={portrait} alt="Professional portrait" className="relative w-full rounded-lg border border-border" />
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-xl tracking-wider text-foreground">
              Mission & <span className="text-neon-cyan text-glow-cyan">Philosophy</span>
            </h2>
            <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
              <p>
                I am a passionate and growth-driven Computer Engineering student with a strong focus on cybersecurity, software development, and emerging technologies. I enjoy exploring the deeper layers of systems—whether it’s understanding how networks operate, analyzing security vulnerabilities, or building full-stack applications with clean and scalable design.
              </p>
              <p>
                Over time, I have developed hands-on experience with tools and technologies such as ethical hacking frameworks, network analysis tools, and modern development stacks. My learning approach is highly practical—I prefer building real-world projects, experimenting with new concepts, and continuously improving through iteration and problem-solving.
              </p>
              <p>
                Beyond coding, I am deeply interested in system architecture, documentation, and structured development workflows. I treat projects not just as assignments but as complete products, focusing on performance, security, usability, and presentation.
              </p>
            </div>
          </div>
        </div>

    

        {/* Certifications */}
        <div className="mt-24">
          <h2 className="mb-12 font-display text-xl tracking-wider text-foreground">
            <span className="text-neon-cyan text-glow-cyan">Certifications</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <div key={i} className="card-neon flex items-start gap-4 rounded-lg p-5 transition-all">
                <Award className="mt-0.5 shrink-0 text-primary" size={20} />
                <div>
                  <h3 className="font-display text-xs tracking-wider text-foreground">{cert.name}</h3>
                  <p className="mt-1 font-body text-xs text-muted-foreground">{cert.full}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
