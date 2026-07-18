import Link from "next/link";
import "./reports.css";

const issues = [
  {
    number: "01",
    category: "WELCOME",
    title: "Welcome to The Ella Report",
    description:
      "A new space for my thoughts on sports, pop culture, marketing, events, and whatever else has my attention.",
    href: "/reports/issue-1",
  },
  {
    number: "02",
    category: "OPINION",
    title: "So Why Is Kalshi Targeting Love Island Fans?",
    description:
      "Kalshi is using reality television to reach a new prediction-market audience. The strategy is smart, but the creative left me scrolling.",
    href: "/reports/issue-2",
  },
];

export default function ReportsPage() {
  return (
    <main className="issuesPage">
      <nav className="issuesNav">
        <Link href="/" className="issuesLogo">
          THE ELLA REPORT
        </Link>

        <div className="issuesNavLinks">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/currents">Currents</Link>
          <Link href="/reports">Issues</Link>
        </div>
      </nav>

      <header className="issuesHeader">
        <p className="issuesEyebrow">THE ARCHIVE</p>

        <h1>Every issue of The Ella Report.</h1>

        <p className="issuesIntroduction">
          Thoughts, observations, and opinions on sports, marketing,
          entertainment, culture, and the moments that make me stop scrolling.
        </p>
      </header>

      <section className="issuesGrid">
        {issues.map((issue) => (
          <Link href={issue.href} className="issueCard" key={issue.number}>
            <div className="issueCardTop">
              <span className="issueNumber">ISSUE #{issue.number}</span>
              <span className="issueCategory">{issue.category}</span>
            </div>

            <div className="issueCardContent">
              <h2>{issue.title}</h2>
              <p>{issue.description}</p>
            </div>

            <div className="issueCardBottom">
              <span>Read the issue</span>
              <span aria-hidden="true">→</span>
            </div>
          </Link>
        ))}
      </section>

      <footer className="issuesFooter">
        <div>
          <p className="footerLogo">THE ELLA REPORT</p>
          <span>
            Sports, entertainment, culture, and the ideas behind them.
          </span>
        </div>

        <div className="issuesFooterLinks">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/currents">Currents</Link>
          <Link href="/reports">Issues</Link>
        </div>

        <div>
          <p className="footerLabel">LET&apos;S CONNECT</p>
          <a href="mailto:ellammarkman@gmail.com">
            ellammarkman@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}