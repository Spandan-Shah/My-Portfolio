import { ContactBand, PageHero } from "../components";
import { skillGroups } from "../site-data";

export default function SkillsPage() {
  return (
    <main>
      <PageHero
        index="03"
        eyebrow="Skills & Engineering Practice"
        title="Capabilities connected to evidence."
        intro="This is not a keyword wall. Each capability is paired with the projects where I have applied it and the kind of engineering decision it helps me make."
        accent="violet"
      />

      <section className="section skills-list">
        {skillGroups.map((group) => (
          <article className={`skill-group ${group.tone}`} key={group.title}>
            <div className="skill-title">
              <span>{group.number}</span>
              <h2>{group.title}</h2>
              <p>{group.summary}</p>
            </div>
            <div>
              <p className="kicker">Working knowledge</p>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="kicker">Applied in</p>
              <ul className="evidence-list">
                {group.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="toolbox-section">
        <div>
          <p className="kicker light">Toolbox</p>
          <h2>Languages, frameworks and platforms.</h2>
        </div>
        <div className="toolbox-grid">
          <article>
            <h3>Languages</h3>
            <p>Python · TypeScript · JavaScript · C/C++ · Java · SQL</p>
          </article>
          <article>
            <h3>Web & APIs</h3>
            <p>React · Vite · FastAPI · REST · Tailwind CSS · SQLite</p>
          </article>
          <article>
            <h3>AI & Data</h3>
            <p>Pandas · scikit-learn · Lightkurve · feature engineering · model evaluation</p>
          </article>
          <article>
            <h3>Embedded</h3>
            <p>ESP32 · ESP32-S3 · ESP-NOW · NRF24L01 · sensors · TFT touch UI</p>
          </article>
          <article>
            <h3>Security</h3>
            <p>AES-GCM · X25519 · HKDF · threat modelling · replay defence · risk assessment</p>
          </article>
          <article>
            <h3>Engineering workflow</h3>
            <p>Git · GitHub · VS Code · testing · technical documentation · system diagrams</p>
          </article>
        </div>
      </section>

      <section className="section growth-section">
        <p className="kicker">Current growth areas</p>
        <h2>What I am deliberately strengthening next.</h2>
        <div>
          <article>
            <span>01</span>
            <h3>Independent security validation</h3>
            <p>Formal threat models, fuzz testing, known-answer tests and external protocol review.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Multi-platform embedded ports</h3>
            <p>Extending secure-session work beyond ESP32 and across different transport constraints.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Production AI evaluation</h3>
            <p>Improving dataset quality, baselines, error analysis and deployment-aware model decisions.</p>
          </article>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
