import Link from "next/link";
import "./projects.css";

type Project = {
  title: string;
  description: string;
  year: string;
  file: string;
  type: "pdf" | "video";
  mediaLabel: string;
  mediaTitle: string;
  details?: string[];
};

type ProjectCategory = {
  name: string;
  number: string;
  projects: Project[];
};

const projectCategories: ProjectCategory[] = [
  {
    name: "Partnership Pitch Decks",
    number: "01",
    projects: [
      {
        title: "GW Program Board Sponsor Pitch Deck",
        description:
          "A partnership deck introducing GW Program Board’s audience, major campus events, impact, and opportunities for brand collaboration.",
        year: "2025",
        file: "/projects/program-board-sponsor-pitch-deck.pdf",
        type: "pdf",
        mediaLabel: "PITCH DECK",
        mediaTitle: "GW PROGRAM BOARD",
        details: ["Partnership Strategy", "Sponsorship", "Deck Design"],
      },
      {
        title: "Smokeout Sponsor Research",
        description:
          "Sponsor prospecting and activation concepts developed for Windy City Smokeout and Lone Star Smokeout, with an emphasis on culturally relevant brand partnerships.",
        year: "2026",
        file: "/projects/smokeout-sponsor-research.pdf",
        type: "pdf",
        mediaLabel: "PITCH DECK",
        mediaTitle: "SMOKEOUT",
        details: [
          "Sponsor Research",
          "Activation Concepts",
          "Festival Marketing",
        ],
      },
    ],
  },
  {
    name: "Analysis",
    number: "02",
    projects: [
      {
        title: "Windy City Smokeout Retail Vendor Evaluations",
        description:
          "An evaluation of festival retail vendors using sales, social performance, audience traffic, and operational observations to inform future vendor decisions.",
        year: "2025",
        file: "/projects/retail-vendor-evaluations.pdf",
        type: "pdf",
        mediaLabel: "ANALYSIS",
        mediaTitle: "RETAIL VENDORS",
        details: ["Data Analysis", "Vendor Strategy", "Recommendations"],
      },
      {
        title: "CRM & Relational Databases Case Brief",
        description:
          "A customer and advertising analysis identifying effective acquisition channels, seasonal purchasing patterns, and loyalty-building opportunities.",
        year: "2024",
        file: "/projects/crm-case-brief.pdf",
        type: "pdf",
        mediaLabel: "CASE BRIEF",
        mediaTitle: "CRM & DATABASES",
        details: ["CRM", "Customer Retention", "Marketing Analytics"],
      },
      {
        title: "Students’ Food Shopping Habits",
        description:
          "A consumer behavior research project examining how GW students shop for food, make purchasing decisions, and develop brand loyalty.",
        year: "2024",
        file: "/projects/student-food-shopping-habits.pdf",
        type: "pdf",
        mediaLabel: "RESEARCH",
        mediaTitle: "FOOD SHOPPING",
        details: ["Consumer Research", "Brand Loyalty", "Survey Analysis"],
      },
    ],
  },
  {
    name: "Merch Design",
    number: "03",
    projects: [
      {
        title: "AKPsi Fall 2023 Merch Collection",
        description:
          "A collection of apparel concepts created for Alpha Kappa Psi, including T-shirts, sweatshirts, hoodies, and zip-up designs.",
        year: "2023",
        file: "/projects/akpsi-merch-fall-2023.pdf",
        type: "pdf",
        mediaLabel: "MERCH",
        mediaTitle: "AKPSI FALL 2023",
        details: ["Merch Design", "Creative Direction", "Apparel"],
      },
    ],
  },
  {
    name: "Class Projects",
    number: "04",
    projects: [
      {
        title: "Live Nation Advertising & Marketing Campaign",
        description:
          "An integrated campaign focused on strengthening Live Nation’s brand awareness and perception through audience research, strategy, media tactics, and measurable KPIs.",
        year: "2025",
        file: "/projects/live-nation-campaign.pdf",
        type: "pdf",
        mediaLabel: "CAMPAIGN",
        mediaTitle: "LIVE NATION",
        details: ["Campaign Strategy", "Audience Research", "Media Planning"],
      },
    ],
  },
];

function ProjectPreview({ project }: { project: Project }) {
  return (
    <a
      href={project.file}
      target="_blank"
      rel="noopener noreferrer"
      className="projectMedia projectPlaceholder"
      aria-label={`Open ${project.title}`}
    >
      <div className="placeholderTop">
        <span>{project.mediaLabel}</span>
        <span aria-hidden="true">
          {project.type === "video" ? "▶" : "↗"}
        </span>
      </div>

      <div className="placeholderCenter">
        <p>{project.mediaTitle}</p>
      </div>

      <div className="placeholderBottom">
        <span>{project.year}</span>
        <span>
          {project.type === "video" ? "Play video" : "Open project"}
        </span>
      </div>
    </a>
  );
}

export default function ProjectsPage() {
  return (
    <main className="projectsPage">
      <nav className="projectsNav">
        <Link href="/" className="projectsLogo">
          THE ELLA REPORT
        </Link>

        <div className="projectsNavLinks">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects" className="activeLink">
            Projects
          </Link>
          <Link href="/currents">Currents</Link>
          <Link href="/reports">Issues</Link>
        </div>
      </nav>

      <header className="projectsHeader">
        <p className="projectsEyebrow">PROJECTS</p>

        <h1>
          Projects across strategy, creative, partnerships, and analysis.
        </h1>

        <p className="projectsIntro">
          A collection of professional and academic work spanning sponsorship
          strategy, research, data analysis, campaign development, and design.
        </p>

        <div className="projectsCount">
          <span>07 projects</span>
          <span>04 categories</span>
        </div>
      </header>

      <div className="categoryList">
        {projectCategories.map((category) => (
          <section className="projectCategory" key={category.name}>
            <div className="categoryHeader">
              <span className="categoryNumber">{category.number}</span>
              <h2>{category.name}</h2>

              <span className="categoryTotal">
                {category.projects.length}{" "}
                {category.projects.length === 1 ? "project" : "projects"}
              </span>
            </div>

            <div className="projectGrid">
              {category.projects.map((project) => (
                <article className="projectCard" key={project.title}>
                  <ProjectPreview project={project} />

                  <div className="projectContent">
                    <div className="projectTopLine">
                      <span>{category.name}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    {project.details && (
                      <div className="projectTags">
                        {project.details.map((detail) => (
                          <span key={detail}>{detail}</span>
                        ))}
                      </div>
                    )}

                    <a
                      href={project.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projectButton"
                    >
                      {project.type === "video"
                        ? "Open video"
                        : "View full project"}

                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="projectsFooter">
        <div>
          <p className="projectsFooterLogo">THE ELLA REPORT</p>

          <span>
            Sports, entertainment, culture, and the ideas behind them.
          </span>
        </div>

        <div className="projectsFooterLinks">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/currents">Currents</Link>
          <Link href="/reports">Issues</Link>
        </div>

        <div>
          <p className="projectsFooterLabel">LET&apos;S CONNECT</p>

          <a href="mailto:ellammarkman@gmail.com">
            ellammarkman@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}