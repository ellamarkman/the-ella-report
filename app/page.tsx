import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="homePage">
      <section className="hero">
        <nav className="navigation">
          <Link href="/" className="logo">
            THE ELLA REPORT
          </Link>

          <div className="navLinks">
            <Link href="/" className="activeNavLink">
              Home
            </Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/currents">Currents</Link>
            <Link href="/reports">Issues</Link>
          </div>
        </nav>

        <div className="heroContent">
          <div className="heroMain">
            <header className="heroHeading">
              <h1>THE ELLA REPORT</h1>

              <div
                className="heroTopics"
                aria-label="Sports, marketing, and culture"
              >
                <span className="topicLine" aria-hidden="true" />

                <p>
                  <span>Sports</span>
                  <span aria-hidden="true">/</span>
                  <span>Marketing</span>
                  <span aria-hidden="true">/</span>
                  <span>Culture</span>
                </p>

                <span className="topicLine" aria-hidden="true" />
              </div>
            </header>

            <div className="heroIntroduction">
              <p>
                <span>
                  Inside the projects, stories, and ideas I&apos;m paying
                  attention to
                </span>

                <span>
                  right now, through the lens of <em>Ella!</em>
                </span>
              </p>

              <div className="heroButtons">
                <Link href="/reports/issue-10" className="primaryButton">
                  <span>View the latest issue</span>
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link href="/projects" className="secondaryButton">
                  <span>Explore my projects</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>

          <aside className="heroConnect">
            <a
              href="https://www.linkedin.com/in/ellamarkman"
              target="_blank"
              rel="noopener noreferrer"
              className="portraitLink"
              aria-label="Visit Ella Markman's LinkedIn profile"
            >
              <div className="portraitFrame">
                <div className="portraitInner">
                  <Image
                    src="/images/about/linkedin.png"
                    alt="Ella Markman"
                    fill
                    priority
                    sizes="(max-width: 600px) 195px, 275px"
                  />
                </div>
              </div>
            </a>

            <div className="connectText">
              <p>LET&apos;S CONNECT</p>

              <a
                href="https://www.linkedin.com/in/ellamarkman"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </aside>
        </div>

        <div className="heroFooter">
          <p>Marketing Editorial Portfolio</p>
          <p>Sports · Marketing · Culture</p>
        </div>
      </section>

      <section className="marquee" aria-label="Areas of interest">
        <p>
          PARTNERSHIPS • EXPERIENCES • CREATORS • SPORTS • CULTURE • EVENTS •
          BRAND STRATEGY • PARTNERSHIPS • EXPERIENCES • CREATORS • SPORTS •
          CULTURE • EVENTS • BRAND STRATEGY • PARTNERSHIPS • EXPERIENCES •
          CREATORS • SPORTS • CULTURE • EVENTS • BRAND STRATEGY •
        </p>
      </section>

      <section className="contentSection latestIssueSection">
        <div className="sectionHeading">
          <p className="sectionNumber">01</p>
          <p className="sectionLabel">LATEST ISSUE</p>
        </div>

        <div className="featuredGrid">
          <Link
            href="/reports/issue-10"
            className="featuredImage"
            aria-label="Read Issue 10 of The Ella Report"
          >
            <span>THE ELLA REPORT</span>
          </Link>

          <div className="featuredStory">
            <p className="category">
              ISSUE #10 · PARTNERSHIPS + ENTERTAINMENT
            </p>

            <h2>
              The DWTS Playbook: Sponsorship Matchmaker for the Pros
            </h2>

            <p>
              The pros of Dancing With the Stars have become brands of their
              own. So I&apos;m playing sponsorship matchmaker and pairing ten
              of them with the brands, campaigns, and activations I think fit
              them best.
            </p>

            <Link href="/reports/issue-10" className="textLink">
              Read Issue #10 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="contentSection darkSection">
        <div className="sectionHeading">
          <p className="sectionNumber">02</p>
          <p className="sectionLabel">CURRENTS</p>
        </div>

        <div className="currentsGrid">
          <article>
            <p className="currentType">LISTENING</p>
            <h3>Ella&apos;s Top Ten</h3>
            <p>The songs currently soundtracking my week.</p>
          </article>

          <article>
            <p className="currentType">EATING</p>
            <h3>Birdseye Kitchen</h3>
            <p>
              One of my new top three restaurants in San Diego, with an order
              that deserves its own weekly spot.
            </p>
          </article>

          <article>
            <p className="currentType">ON REPEAT</p>
            <h3>Comment Section: All Stars</h3>
            <p>
              Drew Afualo, Brittany Broski, and Caleb Hearon in one episode I
              somehow still rewatch every month.
            </p>
          </article>

          <article>
            <p className="currentType">CAMPAIGN OF THE WEEK</p>
            <h3>Walker Lyons x Dr Pepper</h3>
            <p>
              A college athlete partnership that lets the athlete&apos;s
              personality lead the creative.
            </p>
          </article>

          <article>
            <p className="currentType">CAUGHT MY ATTENTION</p>
            <h3>College Jersey Patches</h3>
            <p>
              College sports has a new piece of sponsorship inventory. Now
              I&apos;m watching which brands actually earn the space.
            </p>
          </article>
        </div>

        <Link href="/currents" className="lightLink">
          See this week&apos;s currents <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="contentSection">
        <div className="sectionHeading">
          <p className="sectionNumber">03</p>
          <p className="sectionLabel">PROJECTS</p>
        </div>

        <div className="homeProjectGrid">
          <article className="homeProjectCard">
            <div className="homeProjectImage">01</div>
            <p className="category">PARTNERSHIPS + EXPERIENTIAL</p>
            <h3>GW Program Board</h3>
            <p>
              Building sponsorship strategy and bringing major brand
              activations directly to students.
            </p>
          </article>

          <article className="homeProjectCard">
            <div className="homeProjectImage">02</div>
            <p className="category">FESTIVAL MARKETING</p>
            <h3>Windy City Smokeout</h3>
            <p>
              Evaluating partners and turning sponsorships into memorable
              festival experiences.
            </p>
          </article>

          <article className="homeProjectCard">
            <div className="homeProjectImage">03</div>
            <p className="category">CAMPAIGN STRATEGY</p>
            <h3>Live Nation</h3>
            <p>
              Developing an integrated campaign through audience research,
              strategy, media, and measurable goals.
            </p>
          </article>
        </div>

        <Link href="/projects" className="textLink">
          View all projects <span aria-hidden="true">→</span>
        </Link>
      </section>

      <footer className="homeFooter">
        <div>
          <p className="footerLogo">THE ELLA REPORT</p>
          <p>Marketing editorial portfolio by Ella Markman.</p>
        </div>

        <div className="footerLinks">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/currents">Currents</Link>
          <Link href="/reports">Issues</Link>
        </div>

        <div className="footerContact">
          <p>LET&apos;S CONNECT</p>

          <a href="mailto:ellammarkman@gmail.com">
            ellammarkman@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/ellammarkman"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </footer>
    </main>
  );
}