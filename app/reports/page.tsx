"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./reports.css";

const issues = [
  {
  number: "05",
  category: "PARTNERSHIPS",
  title: "The Best World Cup Partnerships",
  description:
    "The World Cup gives brands access to one of the largest audiences in sports, but attention alone does not create a memorable partnership. Three campaigns understood what makes the tournament different.",
  href: "/reports/issue-5",
},
  {
    number: "04",
    category: "MARKETING & CULTURE",
    title: "Marketing Done Right: The Bravoverse",
    description:
      "Bravo has turned reality television into an interconnected world of personalities, quotes, podcasts, products, and viral moments. Its greatest marketing advantage is simple: the content never really stops.",
    href: "/reports/issue-4",
  },
  {
    number: "03",
    category: "PERSONAL ESSAY",
    title: "The Art of Post-Grad",
    description:
      "Graduation is supposed to be the finish line, but no one really talks about what comes next. Two months into post-grad life, I am learning how to slow down, start over, and be okay without having everything figured out.",
    href: "/reports/issue-3",
  },
  {
    number: "02",
    category: "OPINION",
    title: "So Why Is Kalshi Targeting Love Island Fans?",
    description:
      "Kalshi is using reality television to reach a new prediction-market audience. The strategy is smart, but the creative left me scrolling.",
    href: "/reports/issue-2",
  },
  {
    number: "01",
    category: "WELCOME",
    title: "Welcome to The Ella Report",
    description:
      "A new space for my thoughts on sports, pop culture, marketing, events, and whatever else has my attention.",
    href: "/reports/issue-1",
  },
];

export default function ReportsPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  function updateArrowState() {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const maximumScroll = carousel.scrollWidth - carousel.clientWidth;

    setCanScrollBack(carousel.scrollLeft > 4);
    setCanScrollForward(carousel.scrollLeft < maximumScroll - 4);
  }

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    updateArrowState();

    carousel.addEventListener("scroll", updateArrowState);
    window.addEventListener("resize", updateArrowState);

    return () => {
      carousel.removeEventListener("scroll", updateArrowState);
      window.removeEventListener("resize", updateArrowState);
    };
  }, []);

  function scrollIssues(direction: "back" | "forward") {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const scrollDistance = carousel.clientWidth;

    carousel.scrollBy({
      left: direction === "forward" ? scrollDistance : -scrollDistance,
      behavior: "smooth",
    });
  }

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

        <div className="issuesHeaderContent">
          <h1>Every issue of The Ella Report.</h1>

          <p className="issuesIntroduction">
            Thoughts, observations, and opinions on sports, marketing,
            entertainment, culture, and the moments that make me stop
            scrolling.
          </p>
        </div>
      </header>

      <section className="issuesArchive">
        <div className="issuesArchiveHeader">
          <div>
            <p className="issuesArchiveLabel">ALL ISSUES</p>
            <p className="issuesArchiveDescription">
              Browse the complete collection, beginning with the latest issue.
            </p>
          </div>

          <div className="issuesCarouselControls">
            <button
              type="button"
              aria-label="View previous issues"
              onClick={() => scrollIssues("back")}
              disabled={!canScrollBack}
            >
              <span aria-hidden="true">←</span>
            </button>

            <button
              type="button"
              aria-label="View more issues"
              onClick={() => scrollIssues("forward")}
              disabled={!canScrollForward}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="issuesCarousel" ref={carouselRef}>
          {issues.map((issue) => (
            <Link
              href={issue.href}
              className="issueCard"
              key={issue.number}
            >
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
        </div>
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