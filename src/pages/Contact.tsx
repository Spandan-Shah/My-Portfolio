import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <p className="font-mono-cyber text-xs tracking-widest text-neon-cyan mb-2">// CONTACT</p>
          <h1 className="mb-16 font-display text-3xl font-bold tracking-wider text-foreground md:text-4xl">
            Get In <span className="text-primary">Touch</span>
          </h1>

          <div className="grid gap-12 lg:grid-cols-3">
            <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-display text-xs tracking-wider text-foreground">NAME</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-sm border border-border bg-surface px-4 py-3 font-body text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-display text-xs tracking-wider text-foreground">EMAIL</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-sm border border-border bg-surface px-4 py-3 font-body text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-display text-xs tracking-wider text-foreground">SUBJECT</label>
                <input
                  type="text"
                  required
                  maxLength={200}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-sm border border-border bg-surface px-4 py-3 font-body text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="mb-2 block font-display text-xs tracking-wider text-foreground">MESSAGE</label>
                <textarea
                  required
                  maxLength={2000}
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-sm border border-border bg-surface px-4 py-3 font-body text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="gradient-red-btn flex items-center gap-2 rounded-sm px-8 py-3 font-display text-xs tracking-wider text-primary-foreground transition-all"
              >
                <Send size={14} /> SEND MESSAGE
              </button>
            </form>

            <div className="space-y-8">
              <h2 className="font-display text-xl tracking-widest text-foreground">DIRECT CONTACT</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "spandanshah10@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 0x3E8" },
                  { icon: MapPin, label: "Location", value: "Washington, D.C." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface">
                      <item.icon className="text-primary" size={16} />
                    </div>
                    <div>
                      <p className="font-display text-xs tracking-wider text-muted-foreground">{item.label}</p>
                      <p className="font-body text-sm text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-neon rounded-lg p-5">
                <p className="font-mono-cyber text-xs text-neon-cyan">// AVAILABILITY</p>
                <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">
                  Available for consulting, investigations, and speaking engagements. Response time: within 24 hours for
                  standard inquiries, immediate for emergency incident response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
