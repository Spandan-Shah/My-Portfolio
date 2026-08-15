import Link from "next/link";
import { ContactBand, PageHero } from "../components";
import { researchPillars } from "../site-data";

export default function ResearchPage() {
  return (
    <main>
      <PageHero
        index="02"
        eyebrow="Patent & Research"
        title="Security architecture for direct peer systems."
        intro="GoblinWisp is my original secure-session research. It focuses on authenticated establishment, persistent peer identity, directional separation, replay-safe validation and session lifecycle management for infrastructure-free communication."
        accent="blue"
      />

      <section className="section research-context">
        <div>
          <p className="kicker">The research question</p>
          <h2>
            How can constrained devices establish and preserve a trustworthy
            session without depending on permanent infrastructure?
          </h2>
        </div>
        <div className="long-copy">
          <p>
            Encryption alone is not a complete session protocol. A practical
            design must also decide which peer is trusted, how a new session is
            authenticated, how traffic directions are separated, when state is
            allowed to advance and what happens after resets or rekeying.
          </p>
          <p>
            GoblinWisp treats these decisions as one architecture. The current
            prototype demonstrates the approach on two ESP32 devices over
            ESP-NOW. The patent specification is broader than that reference
            build and is not restricted to one microcontroller, transport or
            specific cryptographic algorithm.
          </p>
        </div>
      </section>

      <section className="protocol-section">
        <div className="section-heading inverse">
          <p className="kicker light">Session model</p>
          <h2>A simple view of the secure path.</h2>
          <p>
            The application sees a verified message only after identity,
            session context, authenticity and freshness checks succeed.
          </p>
        </div>
        <div className="protocol-diagram" role="img" aria-label="GoblinWisp secure session flow">
          <div className="protocol-node">
            <span>01</span>
            <strong>Application A</strong>
            <small>Controller / peer</small>
          </div>
          <div className="protocol-lane">
            <span>A → B · KeyA · IV-A · CounterA</span>
            <i />
            <span>B → A · KeyB · IV-B · CounterB</span>
          </div>
          <div className="protocol-core">
            <span>02</span>
            <strong>GoblinWisp</strong>
            <small>Identity · session · replay controls</small>
          </div>
          <div className="protocol-lane transport">
            <span>Transport adapter</span>
            <i />
            <span>Radio, wired or software peer link</span>
          </div>
          <div className="protocol-node">
            <span>03</span>
            <strong>Verified Peer B</strong>
            <small>Drone / robot / endpoint</small>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="kicker">Architecture pillars</p>
          <h2>Six controls working as one session lifecycle.</h2>
          <p>
            These are architectural ideas disclosed in the filed specification,
            expressed here in product language.
          </p>
        </div>
        <div className="research-grid">
          {researchPillars.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reference-build">
        <div>
          <p className="kicker light">Reference implementation</p>
          <h2>What is implemented today.</h2>
          <ul>
            <li>Two ESP32 devices communicating over ESP-NOW</li>
            <li>X25519 session agreement in the current build</li>
            <li>HKDF-SHA-256 contextual key derivation</li>
            <li>AES-GCM authenticated encryption</li>
            <li>Directional keys, nonce bases and counters</li>
            <li>Peer-key pinning, replay checks and reset handling</li>
          </ul>
        </div>
        <div>
          <p className="kicker light">What is not being claimed</p>
          <ul>
            <li>It does not increase radio range or stop RF jamming.</li>
            <li>It is not yet an independently certified security product.</li>
            <li>The present reference build is not a fleet-management platform.</li>
            <li>Patent pending is not the same as patent grant.</li>
            <li>ESP-NOW is the first transport, not the limit of the research.</li>
          </ul>
        </div>
      </section>

      <section className="section filing-section">
        <div>
          <p className="kicker">Patent status</p>
          <h2>Filed in India. Commercialisation remains evidence-led.</h2>
        </div>
        <div className="filing-timeline">
          <article>
            <time>March 2026</time>
            <h3>Provisional filing</h3>
            <p>Established the initial filing and research direction.</p>
          </article>
          <article>
            <time>5 July 2026</time>
            <h3>Complete specification</h3>
            <p>Filed the complete specification and accompanying drawings.</p>
          </article>
          <article>
            <time>Present</time>
            <h3>Patent pending</h3>
            <p>
              Application under the publication and examination lifecycle. No
              grant or certification is represented.
            </p>
          </article>
        </div>
        <Link className="text-link" href="/projects/goblinwisp">
          Read the GoblinWisp case study <span>↗</span>
        </Link>
      </section>

      <ContactBand />
    </main>
  );
}
