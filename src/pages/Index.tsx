import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import SpyHUD from "@/components/home/SpyHUD";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import SpotlightSection from "@/components/home/SpotlightSection";
import AlertsCasesSection from "@/components/home/AlertsCasesSection";
import TracingBeamDemo from "@/components/tracing-beam-demo";

const Index = () => (
  <Layout>
    <HeroSection />
    {/* Spy HUD Section */}
    <section className="border-t border-border py-12">
      <div className="container">
        <p className="font-mono-cyber text-xs tracking-widest text-neon-cyan mb-2">// INTELLIGENCE DASHBOARD</p>
        <h2 className="mb-8 font-display text-2xl font-bold tracking-wider text-foreground md:text-3xl">
          Situation <span className="text-primary text-glow-red">Awareness</span>
        </h2>
        <SpyHUD />
      </div>
    </section>
    <ExpertiseSection />
    <SpotlightSection />
    <AlertsCasesSection />

    <section className="mt-20 pb-40">
      <div className="container">
        <TracingBeamDemo />
      </div>
    </section>
  </Layout>

);

export default Index;
