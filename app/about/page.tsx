import Image from "next/image";
import Link from "next/link";
import "../about.css";

function CircleDoodle() {
  return (
    <svg
      className="photoDoodle circleDoodle"
      viewBox="0 0 500 600"
      aria-hidden="true"
    >
      <path d="M254 25C119 18 31 116 29 287C27 457 123 571 270 568C418 565 482 461 470 286C458 111 389 30 254 25Z" />
      <path d="M264 38C134 28 47 125 43 290C39 455 127 550 269 553C411 556 463 451 456 288C449 125 394 48 264 38Z" />
    </svg>
  );
}

function HeartDoodle() {
  return (
    <svg
      className="photoDoodle heartDoodle"
      viewBox="0 0 520 430"
      aria-hidden="true"
    >
      <path d="M261 391C229 358 83 264 51 174C25 102 63 39 129 37C181 35 227 72 259 124C290 72 337 35 390 37C458 39 493 103 468 176C435 271 292 360 261 391Z" />
      <path d="M257 374C219 336 94 257 66 176C44 112 72 56 132 54C184 52 223 86 259 139C294 87 335 53 389 54C448 55 477 113 454 179C425 260 295 339 257 374Z" />
    </svg>
  );
}

function StarDoodle() {
  return (
    <svg
      className="photoDoodle starDoodle"
      viewBox="0 0 520 520"
      aria-hidden="true"
    >
      <path d="M263 26L318 174L474 124L378 257L494 361L334 350L268 495L206 350L42 369L151 255L43 129L202 174L263 26Z" />
      <path d="M262 49L307 190L451 147L360 263L464 344L321 333L267 468L216 333L72 348L168 257L70 154L214 192L262 49Z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="reporterPage">
      <nav className="reporterNav">
        <Link href="/" className="reporterLogo">
          THE ELLA REPORT
        </Link>

        <div className="reporterNavLinks">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/currents">Currents</Link>
          <Link href="/reports">Articles</Link>
        </div>
      </nav>

      <section className="reporterHero">
        <div className="reporterIntro">
          <p className="reporterEyebrow">MEET THE REPORTER</p>

          <h1>Behind The Ella Report.</h1>

          <p className="reporterQuote">
            I can&apos;t walk through a stadium without looking at the
            sponsor logos around me. I&apos;m reading the LED ribbon boards, spotting
            the title sponsor, and wondering what conversation convinced a
            brand to invest millions in that moment. By the time the game
            starts, I&apos;ve probably spent as much time studying the marketing
            as I have the game itself.
          </p>
        </div>

        <div className="editorialPhotos">
          <figure className="photoCard headshotCard">
            <div className="doodlePhoto">
              <CircleDoodle />

              <Image
                src="/images/about/linkedin.png"
                alt="Ella Markman"
                width={430}
                height={520}
                priority
              />
            </div>

            <figcaption>That&apos;s me!</figcaption>
          </figure>

          <figure className="photoCard familyCard">
            <div className="doodlePhoto">
              <HeartDoodle />

              <Image
                src="/images/about/family.png"
                alt="Ella with her family"
                width={320}
                height={240}
              />
            </div>

            <figcaption>The people who made this all happen.</figcaption>
          </figure>

          <figure className="photoCard programBoardCard">
            <div className="doodlePhoto">
              <StarDoodle />

              <Image
                src="/images/about/programboard.png"
                alt="Ella with GW Program Board"
                width={300}
                height={360}
              />
            </div>

            <figcaption>Building campus culture at GW.</figcaption>
          </figure>
        </div>
      </section>

      <section className="reporterStory">
        <div className="storyHeading">
          <p className="reporterEyebrow">WHY THE ELLA REPORT?</p>

          <h2>Curiosity deserves somewhere to live.</h2>
        </div>

        <div className="storyBody">
          <p className="openingLine">Hi, I&apos;m Ella!</p>

          <p>
            I recently graduated from The George Washington University with a
            B.S. in Marketing, a concentration in Sports and Events Management,
            and a minor in Psychology. More than anything, I&apos;m someone who
            always wants to learn and grow.
          </p>

          <p>
            I always joke that I&apos;ve been interested in partnerships my
            whole life. I have a twin brother, so growing up meant constantly
            balancing different personalities, opinions, and interests.
            Looking back, maybe that&apos;s where my fascination with bringing
            people together first started.
          </p>

          <p>
            I&apos;ve always been fascinated by the stories behind why things
            matter. Whether it&apos;s a sponsorship announcement, creator
            partnership, business decision, major event, or cultural moment,
            I&apos;m usually the person clicking the article to understand why
            it happened, who made it happen, and what made it work.
          </p>

          <p>
            When I began my post-grad job search, I realized I wanted something
            more than a traditional portfolio. I wanted to build something that
            could grow alongside my career: a living website for my work,
            thoughts, opinions, and curiosity across sports, entertainment,
            business, events, culture, and beyond.
          </p>

          <p className="reportStatement">Your inside scoop on all things pop culture and sports!</p>

          <p>
            It's one part portfolio, one part publication, and one part notebook. A place to showcase the projects I've built, write about the stories that catch my attention, and keep a running record of how my perspective evolves over time.
          </p>
        </div>
      </section>

      <footer className="aboutFooter">
        <div className="footerBrand">
          <p>THE ELLA REPORT</p>

          <span>
            Sports, entertainment, culture, and the ideas behind them.
          </span>
        </div>

        <div className="footerLinks">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/currents">Currents</Link>
          <Link href="/reports">Articles</Link>
        </div>

        <div className="footerContact">
          <p>LET&apos;S CONNECT</p>

          <a href="mailto:ellammarkman@gmail.com">
            ellammarkman@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}