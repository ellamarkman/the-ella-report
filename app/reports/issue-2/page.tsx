import Link from "next/link";
import IssueInteractions from "./IssueInteractions";
import "./issue.css";

export default function IssueTwoPage() {
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
            <span>ISSUE #02</span>
            <span>OPINION</span>
          </div>

          <h1>So Why Is Kalshi Targeting Love Island Fans?</h1>

          <p className="issueDek">
            Kalshi is using reality television to reach a new prediction-market
            audience. The strategy is smart, but the creative left me
            scrolling.
          </p>

          <div className="issueByline">
            <span>By Ella Markman</span>
            <span>Published July 17, 2026</span>
            <span>5 min read</span>
          </div>
        </header>

        <div className="issueBody">
          <p className="issueOpening">
            Recently, I&apos;ve been noticing Kalshi ads taking over my social
            media feeds.
          </p>

          <p>
            For years, I&apos;ve seen ads from sportsbooks like FanDuel and
            DraftKings, but this was the first time a prediction market felt
            like it was being marketed directly to me.
          </p>

          <p>
            Instead of promoting the NFL, NBA, or March Madness, Kalshi was
            asking viewers to predict who would win <em>Love Island</em>.
          </p>

          <p className="issueEmphasis">That immediately caught my attention.</p>

          <p>
            <em>Love Island</em> has become one of the biggest reality shows
            every summer. New episodes air almost every night, the internet
            can&apos;t stop talking about it, and its audience looks very
            different from the audience sportsbooks have traditionally
            targeted.
          </p>

          <p>
            Rather than chasing the same sports fans as everyone else, Kalshi
            seems to be asking a different question:
          </p>

          <blockquote>
            How do we introduce prediction markets to an entirely new audience?
          </blockquote>

          <p>
            I remember learning in one of my psychology classes that, on
            average, women tend to be more risk-averse than men in many
            financial settings. That isn&apos;t true for everyone, but it&apos;s
            a pattern that has been observed across decades of research.
          </p>

          <p>
            One review from the Institute of Labor Economics found consistent
            gender differences in risk attitudes across a variety of economic
            decisions.
          </p>

          <p>
            That made me wonder if Kalshi is trying to lower the barrier to
            entry.
          </p>

          <p>
            Predicting the winner of a reality television show feels much less
            intimidating than placing a same-game parlay on a baseball game you
            might not even watch.
          </p>

          <p>
            Instead of teaching people sports betting, Kalshi may be trying to
            introduce prediction markets through pop culture. From that
            perspective, I actually think the strategy makes a lot of sense.
          </p>

          <h2>What I found more interesting was the execution.</h2>

          <p>
            Every sportsbook advertisement I see feels polished. There are
            athletes, creators, personalities, and high-quality production that
            matches the excitement of the event itself.
          </p>

          <p>
            The <em>Love Island</em> ads, on the other hand, felt noticeably
            simpler. Most of the ones I saw were little more than a graphic
            asking, “Watching Love Island? Predict who wins?”
          </p>

          <p className="issueEmphasis">
            I found myself scrolling past almost every time.
          </p>

          <p>
            If Kalshi&apos;s goal is to convince an entirely new audience to try
            prediction markets, I think the creative has to work harder than it
            does for existing sports bettors.
          </p>

          <p>
            It shouldn&apos;t just tell viewers they can make a prediction—it
            should make them want to.
          </p>

          <p>
            Whether this campaign ends up being successful remains to be seen,
            but I think it&apos;s one of the more interesting marketing
            strategies I&apos;ve seen recently.
          </p>

          <p>
            Instead of competing for the same customers as every sportsbook,
            Kalshi appears to be testing whether prediction markets can become
            part of mainstream entertainment culture.
          </p>

          <p>That&apos;s a strategy worth watching.</p>

          <section className="myTake">
            <p className="myTakeLabel">MY TAKE</p>

            <h2>Smart strategy. Forgettable execution.</h2>

            <p>
              Kalshi&apos;s decision to market through <em>Love Island</em>{" "}
              makes sense to me. The campaign expands beyond the traditional
              sports audience and introduces prediction markets through a
              cultural moment people are already invested in.
            </p>

            <p>
              I just wish the creative matched the strategy. If you&apos;re
              asking someone to try something completely new, the ad has to stop
              the scroll.
            </p>

            <p className="myTakeEnding">These didn&apos;t.</p>
          </section>

          <section className="references">
            <p className="referencesLabel">REFERENCES</p>

            <ol>
              <li>
                Croson, R., &amp; Gneezy, U. (2009).{" "}
                <em>Gender Differences in Preferences.</em> Institute of Labor
                Economics.{" "}
                <a
                  href="https://wol.iza.org/articles/gender-differences-in-risk-attitudes/long-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the research
                </a>
              </li>
            </ol>
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