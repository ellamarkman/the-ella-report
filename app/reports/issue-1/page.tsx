import Link from "next/link";
import IssueInteractions from "./IssueInteractions";
import "./issue.css";

export default function IssueOnePage() {
  return (
    <main className="issuePage">
      <nav className="issueNav">
        <Link href="/" className="issueLogo">
          THE ELLA REPORT
        </Link>

        <div className="issueNavLinks">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/currently">Currents</Link>
          <Link href="/reports">Issues</Link>
        </div>
      </nav>

      <article className="issueArticle">
        <header className="issueHeader">
          <div className="issueMetaTop">
            <span>ISSUE #01</span>
            <span>WELCOME</span>
          </div>

          <h1>Welcome to The Ella Report</h1>

          <p className="issueDek">
            A new space for my thoughts on sports, pop culture, marketing,
            events, and whatever else has my attention.
          </p>

          <div className="issueByline">
            <span>By Ella Markman</span>
            <span>Published July 17, 2026</span>
            <span>3 min read</span>
          </div>
        </header>

        <div className="issueBody">
          <p className="issueOpening">Welcome to The Ella Report.</p>

          <p>
            If you know anything about me, you know I am constantly reading and
            learning about all things pop culture and sports. Each morning, I
            read The Athletic, Adweek, The New York Times, and various
            Substacks—followed, of course, by a daily scroll.
          </p>

          <p>
            I&apos;m always talking to friends about my opinions on sports, pop
            culture, marketing, and whatever else has my attention, so I
            thought: why not write it all down?
          </p>

          <p>
            This is going to be blog-style, where each week I&apos;ll post one
            to three issues. It might be about a company, an event I attended,
            a campaign I noticed, or simply the thoughts I couldn&apos;t stop
            thinking about that week.
          </p>

          <p>
            I also coded in a comment section because some of my favorite parts
            of YouTube and Patreon are the comments, where people come together
            to share their opinions, reactions, and ideas.
          </p>

          <p>
            So please leave your thoughts below. I want The Ella Report to feel
            less like me talking at people and more like a conversation.
          </p>

          <p>Welcome to Issue #1, with plenty more to come.</p>

          <section className="weeklyThoughts">
            <p className="weeklyLabel">TOP THOUGHTS OF THE WEEK</p>

            <div className="thoughtItem">
              <span>01</span>
              <p>
                <em>Love Island</em> wasn&apos;t good this year, but the ad
                presence was unique and may have set a new bar for reality
                television.
              </p>
            </div>

            <div className="thoughtItem">
              <span>02</span>
              <p>
                Fanatics Fest and the ESPYs being held on the same weekend
                isn&apos;t working—especially with the inaugural TIME100 event
                in the mix. I&apos;m getting confused about which event is
                which, and they&apos;re all overshadowing one another.
              </p>
            </div>

            <div className="thoughtItem">
              <span>03</span>
              <p>
                When does influencer sponsorship become too much? Once the
                contract ends, you often never see the product again—so what
                actually makes a sponsorship worthwhile?
              </p>
            </div>
          </section>
        </div>

        <IssueInteractions />
      </article>

      <footer className="issueFooter">
        <div>
          <p className="issueFooterLogo">THE ELLA REPORT</p>
          <span>
            Sports, entertainment, culture, and the ideas behind them.
          </span>
        </div>

        <div className="issueFooterLinks">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/currently">Currents</Link>
          <Link href="/reports">Issues</Link>
        </div>

        <div>
          <p className="issueFooterLabel">LET&apos;S CONNECT</p>
          <a href="mailto:ellammarkman@gmail.com">
            ellammarkman@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}