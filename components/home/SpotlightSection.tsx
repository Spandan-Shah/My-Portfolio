import spotlightImg from "@/assets/spotlight.jpg";

const SpotlightSection = () => (
  <section className="border-t border-border py-20">
    <div className="container">
      <p className="font-mono-cyber text-xs tracking-widest text-neon-cyan mb-2">// FEATURED</p>
      <h2 className="mb-12 font-display text-2xl font-bold tracking-wider text-foreground md:text-3xl">
        Featured <span className="text-primary">Spotlight</span>
      </h2>

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-neon-red/20 to-neon-cyan/20 blur-xl" />
          <img
            src={spotlightImg}
            alt="Operation Dark Net"
            className="relative w-full max-w-md rounded-lg border border-border"
          />
        </div>

        <div className="space-y-6">
          <span className="inline-block rounded-sm border border-primary/30 bg-primary/10 px-3 py-1 font-mono-cyber text-[10px] tracking-wider text-primary">
            CLASSIFIED — CLEARANCE REQUIRED
          </span>
          <h3 className="font-display text-xl font-bold tracking-wider text-foreground md:text-2xl">
            Recent Deep-State Analysis:{" "}
            <span className="text-primary text-glow-red">Operation Dark Net</span>
          </h3>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            A multi-month investigation into an international dark web marketplace facilitating the sale of
            stolen credentials, zero-day exploits, and ransomware-as-a-service kits. Working alongside
            Interpol and the FBI's Cyber Division, our team mapped the infrastructure, identified key
            operators, and contributed to the successful takedown of the platform.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            The operation resulted in 47 arrests across 12 countries and the seizure of over $30 million
            in cryptocurrency assets, making it one of the largest coordinated cyber operations of 2025.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SpotlightSection;
