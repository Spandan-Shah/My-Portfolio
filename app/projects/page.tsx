import { ContactBand, PageHero, ProjectRow } from "../components";
import { projects } from "../site-data";

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        index="01"
        eyebrow="Selected work / 2024—26"
        title="Systems, not isolated screens."
        intro="My portfolio spans secure communication, autonomous platforms, machine learning, cybersecurity and backend engineering. Every case study states the role, problem, approach, present evidence and honest boundary of the work."
        accent="coral"
      />

      <section className="section project-index-section">
        <div className="project-filter-line">
          <span>08 projects</span>
          <span>04 disciplines</span>
          <span>Research → prototype → product direction</span>
        </div>
        <div className="project-list full">
          {projects.map((project) => (
            <ProjectRow project={project} key={project.slug} />
          ))}
        </div>
      </section>

      <section className="project-method">
        <p className="kicker light">How to read this work</p>
        <div>
          <h2>Implemented work and future ambition are deliberately separated.</h2>
          <p>
            A prototype is valuable evidence, but it is not a production
            certification. Each case study identifies what exists now and what
            still requires validation, scale, hardware integration or
            independent review.
          </p>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
