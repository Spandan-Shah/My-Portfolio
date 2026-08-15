import { ContactBand, PageHero } from "../components";
import { TimelineProgress } from "./TimelineProgress";

export default function JourneyPage() {
  return (
    <main>
      <PageHero
        index="04"
        eyebrow="Education · Achievements · Credentials"
        title="A journey shaped by building."
        intro="My academic progress, hackathon experience, cybersecurity learning and original research are presented as one timeline—showing how each step changed the next project."
        accent="emerald"
      />

      <section className="section education-feature">
        <div>
          <p className="kicker">Education</p>
          <h2>B.E. Computer Engineering</h2>
          <p>
            SAL Institute of Technology & Engineering Research
            <br />
            Gujarat Technological University
          </p>
        </div>
        <dl>
          <div>
            <dt>Current semester</dt>
            <dd>Semester 7</dd>
          </div>
          <div>
            <dt>Performance</dt>
            <dd>8.93 CGPA through Semester 6</dd>
          </div>
          <div>
            <dt>Academic direction</dt>
            <dd>Computer Engineering with a cybersecurity focus</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>Ahmedabad, Gujarat</dd>
          </div>
        </dl>
      </section>

      <TimelineProgress />

      <section className="credential-section">
        <div>
          <p className="kicker light">Cybersecurity learning</p>
          <h2>Cisco CCST Cybersecurity</h2>
          <p>
            Completed learning across security principles, network and endpoint
            security, threat intelligence, vulnerability assessment, incident
            handling, continuity and recovery.
          </p>
        </div>
        <div>
          <p className="kicker light">Applied evidence</p>
          <ul>
            <li>PhishBuster cybersecurity application</li>
            <li>Security assessment for a 50-employee organisation scenario</li>
            <li>Risk matrix, password/MFA, encryption and endpoint controls</li>
            <li>Incident-response and security-awareness planning</li>
            <li>Internship report, presentation and final submission package</li>
          </ul>
        </div>
      </section>

      <section className="section recognition-section">
        <div className="section-heading">
          <p className="kicker">Recognition</p>
          <h2>Milestones that matter because they changed the work.</h2>
          <p>
            Recognition is valuable when it becomes momentum for a stronger
            system, clearer research or better engineering practice.
          </p>
        </div>
        <div className="recognition-grid">
          <article className="coral">
            <span>SIH</span>
            <h3>Smart India Hackathon 2024</h3>
            <p>Shortlisted team experience in a national innovation programme.</p>
          </article>
          <article className="violet">
            <span>ISRO BAH</span>
            <h3>ExoTrace</h3>
            <p>Space-technology problem solving through a structured exoplanet-detection pipeline.</p>
          </article>
          <article className="blue">
            <span>IP</span>
            <h3>Patent pending</h3>
            <p>Original secure-session research advanced to a complete specification.</p>
          </article>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
