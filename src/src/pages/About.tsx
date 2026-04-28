import Layout from "@/components/Layout";
import portrait from "@/assets/Portrait.png";
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
                My mission is to make the digital world safer through proactive security measures, rigorous investigation,
                and knowledge sharing. I believe that cybersecurity is not just about technology — it's about understanding
                human behavior, anticipating adversarial thinking, and building resilient systems.
              </p>
              <p>
                Over the past decade, I've had the privilege of working with some of the most talented security professionals
                in the world. From government agencies to Fortune 500 companies, every engagement has reinforced my belief
                that the best defense is a combination of cutting-edge technology and exceptional people.
              </p>
              <p>
                I approach every case with methodical precision and an unwavering commitment to uncovering the truth.
                Whether conducting a penetration test, analyzing malware, or testifying as an expert witness, I bring the
                same level of dedication and thoroughness.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h2 className="mb-12 font-display text-xl tracking-wider text-foreground">
            Professional <span className="text-primary">Timeline</span>
          </h2>
          <div className="relative space-y-8 border-l-2 border-border pl-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span className="font-mono-cyber text-xs text-primary">{item.year}</span>
                <h3 className="mt-1 font-display text-sm tracking-wider text-foreground">{item.title}</h3>
                <p className="mt-1 font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
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
