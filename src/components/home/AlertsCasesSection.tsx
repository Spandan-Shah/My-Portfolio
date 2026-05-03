import { AlertTriangle, FileSearch, ShieldAlert } from "lucide-react";

const alerts = [
  {
    icon: ShieldAlert,
    title: "Data Breach Detected",
    desc: "Critical vulnerability exploited in client's cloud infrastructure. Immediate containment initiated.",
    severity: "CRITICAL",
    time: "2 hours ago",
  },
  {
    icon: AlertTriangle,
    title: "Ransomware Attack In Progress",
    desc: "LockBit 4.0 variant detected propagating through lateral movement. Isolation protocol active.",
    severity: "HIGH",
    time: "5 hours ago",
  },
];

const cases = [
  {
    icon: FileSearch,
    title: "Online Fraud Investigation",
    desc: "Multi-jurisdictional investigation into a sophisticated phishing ring targeting financial institutions. Evidence collection phase completed with 2,400+ artifacts catalogued.",
    status: "IN PROGRESS",
    client: "Financial Crimes Unit",
  },
];

const AlertsCasesSection = () => (
  <section className="border-t border-border bg-surface py-20">
    <div className="container">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Alerts */}
        <div>
          <p className="font-mono-cyber text-xs tracking-widest text-neon-cyan mb-2">// LIVE FEED</p>
          <h2 className="mb-8 font-mono-cyber text-xl font-bold tracking-wider text-foreground">
            Patents
          </h2>
          <div className="space-y-4">
            {alerts.map((alert, i) => (
              <div key={i} className="card-neon rounded-lg border-l-2 border-l-primary p-5 transition-all">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <alert.icon className="text-primary animate-pulse-glow" size={18} />
                    <h3 className="font-display text-xs tracking-wider text-foreground">{alert.title}</h3>
                  </div>
                  <span className="rounded-sm bg-primary/20 px-2 py-0.5 font-mono-cyber text-[10px] text-primary">
                    {alert.severity}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{alert.desc}</p>
                <p className="mt-2 font-mono-cyber text-[10px] text-muted-foreground">{alert.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cases */}
        <div>
          <p className="font-mono-cyber text-xs tracking-widest text-neon-cyan mb-2">// CASE FILES</p>
          <h2 className="mb-8 font-display text-xl font-bold tracking-wider text-foreground">
            Recent <span className="text-primary">Cases</span>
          </h2>
          <div className="space-y-4">
            {cases.map((c, i) => (
              <div key={i} className="card-neon rounded-lg p-5 transition-all">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <c.icon className="text-neon-cyan" size={18} />
                    <h3 className="font-display text-xs tracking-wider text-foreground">{c.title}</h3>
                  </div>
                  <span className="rounded-sm border border-neon-cyan/30 bg-neon-cyan/10 px-2 py-0.5 font-mono-cyber text-[10px] text-neon-cyan">
                    {c.status}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <p className="mt-2 font-mono-cyber text-[10px] text-muted-foreground">Client: {c.client}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AlertsCasesSection;
