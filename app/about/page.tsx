import Link from "next/link";
import { ContactBand, PageHero } from "../components";

const principles = [
  {
    number: "01",
    title: "Start with the operating reality",
    copy:
      "I first ask what can fail in the actual environment: connectivity, power, attention, physical access, noisy data or unclear responsibility.",
  },
  {
    number: "02",
    title: "Connect the layers",
    copy:
      "A secure radio link, a useful API and an operator interface are parts of one system. I design their boundaries together.",
  },
  {
    number: "03",
    title: "Keep evidence separate from ambition",
    copy:
      "I distinguish what is implemented, what is being validated and what belongs to the longer-term product roadmap.",
  },
  {
    number: "04",
    title: "Make complexity explainable",
    copy:
      "Whether the topic is cryptography or machine learning, the outcome should be understandable enough to test, operate and improve.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        index="05"
        eyebrow="About / Profile"
        title="An engineer with an inventor’s lens."
        intro="I am Spandan Shah, a B.E. Computer Engineering student in Ahmedabad, Gujarat. My work combines cybersecurity, AI/ML, embedded systems and full-stack engineering to solve problems that cross the boundary between software and the physical world."
        accent="amber"
      />

      <section className="section editorial-split">
        <div>
          <p className="kicker">My direction</p>
          <h2>
            I want to build technology that remains useful when conditions
            become difficult.
          </h2>
        </div>
        <div className="long-copy">
          <p>
            I study Computer Engineering at SAL Institute of Technology &
            Engineering Research, affiliated with Gujarat Technological
            University. I am currently in Semester 7 and have maintained an
            8.93 CGPA through Semester 6.
          </p>
          <p>
            My strongest projects share a common theme. GoblinWisp secures
            direct peer communication. AeroNexus connects autonomous hardware
            to an operational mission system. ExoTrace turns noisy
            astronomical data into interpretable evidence. PhishBuster turns
            cybersecurity learning into a practical user-facing application.
          </p>
          <p>
            I am interested in roles and collaborations where research,
            implementation and responsible product thinking matter together.
            That includes cybersecurity engineering, applied AI, embedded
            intelligence, autonomous platforms and research-led product teams.
          </p>
        </div>
      </section>

      <section className="dark-section">
        <div className="section-heading inverse">
          <p className="kicker light">Working principles</p>
          <h2>How I approach an unfamiliar system.</h2>
          <p>
            The tools may change. These habits stay consistent across projects.
          </p>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article key={principle.title}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section facts-section">
        <div className="section-heading compact">
          <p className="kicker">At a glance</p>
          <h2>Profile facts.</h2>
        </div>
        <dl className="fact-list">
          <div>
            <dt>Based in</dt>
            <dd>Ahmedabad, Gujarat, India</dd>
          </div>
          <div>
            <dt>Degree</dt>
            <dd>B.E. Computer Engineering</dd>
          </div>
          <div>
            <dt>Institute</dt>
            <dd>SAL Institute of Technology & Engineering Research</dd>
          </div>
          <div>
            <dt>University</dt>
            <dd>Gujarat Technological University</dd>
          </div>
          <div>
            <dt>Current stage</dt>
            <dd>Semester 7 · 8.93 CGPA through Semester 6</dd>
          </div>
          <div>
            <dt>Current focus</dt>
            <dd>Secure systems, applied AI and autonomous platforms</dd>
          </div>
        </dl>
        <Link className="text-link" href="/journey">
          See the complete journey <span>↗</span>
        </Link>
      </section>

      <ContactBand />
    </main>
  );
}
