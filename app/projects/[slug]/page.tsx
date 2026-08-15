import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand } from "../../components";
import { projects } from "../../site-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main>
      <section className={`case-hero ${project.tone}`}>
        <Link className="back-link" href="/projects">
          ← All projects
        </Link>
        <div className="case-title">
          <p>{project.category}</p>
          <h1>{project.name}</h1>
          <p>{project.summary}</p>
        </div>
        <div className="case-status">
          <span>{project.number} / 08</span>
          <dl>
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Present status</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section case-overview">
        <p className="kicker">Overview</p>
        <h2>{project.overview}</h2>
      </section>

      <section className="case-grid">
        <article>
          <span>01</span>
          <p className="kicker">The challenge</p>
          <h2>{project.challenge}</h2>
        </article>
        <article>
          <span>02</span>
          <p className="kicker">The approach</p>
          <ol>
            {project.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      </section>

      <section className="section outcome-section">
        <div>
          <p className="kicker">Outcome and boundary</p>
          <h2>{project.outcome}</h2>
        </div>
        <div>
          <p className="kicker">Technology</p>
          <div className="large-tags">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p className="kicker secondary-kicker">Disciplines</p>
          <div className="large-tags">
            {project.disciplines.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <Link className={`next-project ${nextProject.tone}`} href={`/projects/${nextProject.slug}`}>
        <span>Next case study</span>
        <strong>{nextProject.name}</strong>
        <i>↗</i>
      </Link>

      <ContactBand />
    </main>
  );
}
