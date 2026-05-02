

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
            src="GSSP"
            alt="Operation Dark Net"
            className="relative w-full max-w-md rounded-lg border border-border"
          />
        </div>

        <div className="space-y-6">
          <span className="inline-block rounded-sm border border-primary/30 bg-primary/10 px-3 py-1 font-mono-cyber text-[15px] tracking-wider text-primary">
            CLASSIFIED — PATENTED PROJECT
          </span>
          <h3 className="font-display text-xl font-bold tracking-wider text-foreground md:text-2xl">
            GoblinWisp:{" "}
            <span className="text-primary text-glow-red">Secure Session Protocol</span>
          </h3>
            <div className="space-y-5 font-body text-sm leading-7 text-white md:text-base lg:text-lg">
  <p>
    <span className="font-mono-cyber text-yellow-500">Field of the Invention: </span>
    The present invention relates to secure communication architectures for peer devices operating without centralized infrastructure.
  </p>

  <p>
    More particularly, the invention relates to a directionally isolated, identity-bound secure session architecture that establishes mutually authenticated, replay-resistant, forward-secure communication between peer devices across infrastructure-free environments.
  </p>

  <p>
    The architecture is designed for implementation in firmware, software, hardware, or combinations thereof across diverse communication media.
  </p>

  <p>
    <span className="font-mono-cyber text-yellow-500">Background of the Invention: </span>
    Secure communication protocols commonly depend on centralized certificate authorities, trusted third-party servers, or network-based key distribution systems.
  </p>

  <p>
    In infrastructure-free environments such as embedded wireless devices, autonomous radio systems, industrial edge nodes, decentralized peer applications, ad-hoc networks, and distributed machine-to-machine systems, centralized authentication infrastructure is unavailable, undesirable, or operationally impractical.
  </p>

  <p>
    <span className="font-mono-cyber text-yellow-500">Summary of the Invention: </span>
    The invention provides a directionally isolated secure session architecture that forms a cryptographically partitioned bidirectional secure channel framework between peer devices.
  </p>

  <p>
    Each communication direction functions as an independent cryptographic state machine with its own encryption context, counter domain, and replay validation state.
  </p>

  <p>
    The architecture operates independently of the underlying transport medium and supports deployment across wireless communication systems, radio frequency devices, wired peer links, mesh networking nodes, long-range communication modules, satellite-based links, and software-based peer communication platforms.
  </p>
</div>
        </div>
      </div>
    </div>
  </section>
);

export default SpotlightSection;
