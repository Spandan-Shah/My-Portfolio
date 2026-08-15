import Link from "next/link";
import { navItems, type Project } from "./site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="monogram" href="/" aria-label="Spandan Shah home">
        SS
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <Link href={href} key={href}>
            {label}
          </Link>
        ))}
        <a href="/Spandan_Shah_Resume.pdf" download>
          Résumé
        </a>
      </nav>
      <Link className="header-cta" href="/contact">
        Let&apos;s talk <span>↗</span>
      </Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <div>
          {navItems.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
          <a href="/Spandan_Shah_Resume.pdf" download>
            Download résumé
          </a>
        </div>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="monogram" href="/" aria-label="Spandan Shah home">
        SS
      </Link>
      <p>Spandan Shah © 2026 · Ahmedabad, Gujarat</p>
      <div className="footer-links">
        <a href="mailto:spandanshah10@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/spandan-shah0312">LinkedIn</a>
        <a href="https://github.com/Spandan-Shah">GitHub</a>
      </div>
    </footer>
  );
}

export function PageHero({
  index,
  eyebrow,
  title,
  intro,
  accent = "coral",
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  accent?: string;
}) {
  return (
    <section className={`page-hero ${accent}`}>
      <div className="page-index">{index} / 07</div>
      <p className="eyebrow">
        <span /> {eyebrow}
      </p>
      <h1>{title}</h1>
      <p className="page-intro">{intro}</p>
    </section>
  );
}

export function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      className={`project-row ${project.tone}`}
      href={`/projects/${project.slug}`}
    >
      <span className="project-number">{project.number}</span>
      <div className="project-title">
        <p>{project.category}</p>
        <h3>{project.name}</h3>
      </div>
      <p className="project-summary">{project.summary}</p>
      <div className="project-meta">
        <span>{project.year}</span>
        <span>{project.status}</span>
      </div>
      <span className="project-arrow">↗</span>
    </Link>
  );
}

export function ContactBand() {
  return (
    <section className="contact-band">
      <p className="kicker">Internships · Research · Product conversations</p>
      <h2>
        Have a serious problem
        <br />
        <em>worth engineering?</em>
      </h2>
      <div>
        <p>
          I am open to opportunities across cybersecurity, AI/ML, embedded
          systems and autonomous platforms.
        </p>
        <Link href="/contact">
          Start a conversation <span>↗</span>
        </Link>
      </div>
    </section>
  );
}
