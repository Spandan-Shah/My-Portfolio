import Link from "next/link";
import { ContactBand, ProjectRow } from "./components";
import { milestones, projects, skillGroups } from "./site-data";

export default function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Engineer · Researcher · Founder
          </p>
          <h1>
            Spandan Shah
          </h1>
          <h2>
            Building secure systems
            <br />
            for the physical world<span>.</span>
          </h2>
          <p className="lede">
            I am a Computer Engineering student working across cybersecurity,
            AI/ML, embedded intelligence and autonomous systems—turning
            ambitious research into practical, testable products.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/projects">
              Explore selected work <span>↘</span>
            </Link>
            <Link className="button secondary" href="/research">
              Read the patent story <span>→</span>
            </Link>
            <a
              className="button secondary"
              href="/Spandan_Shah_Resume.pdf"
              download
            >
              Download résumé <span>↓</span>
            </a>
          </div>
          <div className="proof-row">
            <span>
              <i className="dot coral" /> Patent pending
            </span>
            <span>
              <i className="dot blue" /> SIH 2024 shortlisted
            </span>
            <span>
              <i className="dot cyan" /> 8.93 CGPA through Sem 6
            </span>
            <span>
              <i className="dot emerald" /> Open to internships & research
            </span>
          </div>
        </div>

        <div
          className="hero-portrait"
          aria-label="Designed placeholder for Spandan Shah's professional photograph"
        >
          <div className="portrait-index">
            <strong>01</strong>
            <span>/04</span>
          </div>
          <div className="portrait-art">
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <span className="portrait-initials">SS</span>
            <span className="portrait-note">
              PROFESSIONAL
              <br />
              PORTRAIT
            </span>
          </div>
          <div className="portrait-caption">
            Portrait space reserved—no generated identity used
          </div>
        </div>

        <div className="signal-line" aria-hidden="true">
          <span className="signal-label one">SECURE LINKS</span>
          <span className="signal-label two">EMBEDDED AI</span>
          <span className="signal-label three">AUTONOMOUS SYSTEMS</span>
        </div>
      </section>

      <section className="section home-intro">
        <p className="kicker">Profile / 01</p>
        <h2>
          Software, electronics and security—
          <em>designed as one system.</em>
        </h2>
        <div className="home-intro-copy">
          <p>
            My work begins where a typical software boundary ends: at the radio
            link, sensor, physical environment or operator decision. I build
            across layers so the final system remains understandable and useful
            outside a controlled demo.
          </p>
          <Link href="/about">More about my approach ↗</Link>
        </div>
      </section>

      <section className="section work-section">
        <div className="section-heading">
          <p className="kicker">Selected systems / 02</p>
          <h2>
            Work designed to move
            <br />
            from lab to field.
          </h2>
          <p>
            Four current projects across secure communication, UAV operations,
            astronomical machine learning and applied cybersecurity.
          </p>
        </div>
        <div className="project-list">
          {featured.map((project) => (
            <ProjectRow project={project} key={project.slug} />
          ))}
        </div>
        <Link className="text-link" href="/projects">
          View all eight projects <span>↗</span>
        </Link>
      </section>

      <section className="expertise-preview">
        <div className="expertise-lead">
          <p className="kicker light">Capabilities / 03</p>
          <h2>
            Broad enough to connect the layers.
            <br />
            Focused enough to ship.
          </h2>
          <p>
            Each capability is tied to evidence from an actual project—not a
            decorative list of technologies.
          </p>
          <Link href="/skills">See the complete skills map ↗</Link>
        </div>
        <div className="mini-capabilities">
          {skillGroups.map((group) => (
            <article className={group.tone} key={group.title}>
              <span>{group.number}</span>
              <h3>{group.title}</h3>
              <p>{group.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="research-preview">
        <div className="patent-marker">
          PATENT
          <br />
          PENDING
        </div>
        <div>
          <p className="kicker light">Original research / 04</p>
          <h2>
            Directionally-Isolated
            <br />
            Identity-Bound Secure
            <br />
            Session Architecture.
          </h2>
          <p>
            GoblinWisp investigates authenticated session establishment,
            persistent peer identity, separated traffic-direction state, replay
            resistance and lifecycle-safe recovery for constrained peer
            devices.
          </p>
          <Link href="/research">Explore the research and patent ↗</Link>
        </div>
        <dl>
          <div>
            <dt>Field</dt>
            <dd>Embedded security</dd>
          </div>
          <div>
            <dt>Reference build</dt>
            <dd>ESP32 / ESP-NOW</dd>
          </div>
          <div>
            <dt>Commercial direction</dt>
            <dd>Transport-independent SDK</dd>
          </div>
        </dl>
      </section>

      <section className="section journey-preview">
        <div className="section-heading compact">
          <p className="kicker">Trajectory / 05</p>
          <h2>Learning by building.</h2>
        </div>
        <div className="timeline">
          {milestones.slice(0, 4).map((milestone) => (
            <article key={milestone.title}>
              <time>{milestone.year}</time>
              <span>{milestone.type}</span>
              <h3>{milestone.title}</h3>
              <p>{milestone.copy}</p>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/journey">
          View education, achievements and credentials <span>↗</span>
        </Link>
      </section>

      <ContactBand />
    </main>
  );
}
