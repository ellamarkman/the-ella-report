"use client";

import Link from "next/link";
import { useRef } from "react";
import "./currently.css";

export default function CurrentlyPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const moveCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    carousel.scrollBy({
      left:
        direction === "right"
          ? carousel.clientWidth * 0.82
          : -carousel.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  return (
    <main className="currentsPage">
      <nav className="currentsNav">
        <Link href="/" className="currentsLogo">
          THE ELLA REPORT
        </Link>

        <div className="currentsNavLinks">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/currents">Currents</Link>
          <Link href="/reports">Issues</Link>
        </div>
      </nav>

      <header className="currentsHero">
        <div>
          <p className="currentsEyebrow">UPDATED WEEKLY</p>

          <h1>
            Ella&apos;s
            <br />
            Weekly Draft.
          </h1>
        </div>

        <div className="currentsIntro">
          <p className="currentsSubtitle">My top picks of the week</p>

          <p>
            Five picks. One board. Music, food, culture, campaigns, and moments
            that earned a spot this week.
          </p>

          <p className="currentsDate">Week of August 10, 2026</p>
        </div>
      </header>

      <section className="carouselSection">
        <div className="carouselControls">
          <p>Swipe, scroll, or use the arrows.</p>

          <div className="arrowButtons">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => moveCarousel("left")}
            >
              ←
            </button>

            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => moveCarousel("right")}
            >
              →
            </button>
          </div>
        </div>

        <div className="currentsCarousel" ref={carouselRef}>
          <article className="currentCard musicCard">
            <div className="cardHeader">
              <p className="cardNumber">01</p>
              <p className="cardCategory">NOW PLAYING</p>
            </div>

            <div className="cardContent">
              <h2>My Top 10 Songs</h2>

              <p>
                The songs currently soundtracking my week, collected in one
                constantly changing Spotify playlist.
              </p>

              <div className="spotifyEmbed">
                <iframe
                  title="Ella's Top 10 Songs"
                  src="https://open.spotify.com/embed/playlist/7p2XCx4Isemc0TwQhm6VT1"
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>

              <a
                className="externalButton"
                href="https://open.spotify.com/playlist/7p2XCx4Isemc0TwQhm6VT1?si=fa568062e8c745b6"
                target="_blank"
                rel="noreferrer"
              >
                Open the playlist ↗
              </a>
            </div>
          </article>

          <article className="currentCard foodCard">
            <div className="cardHeader">
              <p className="cardNumber">02</p>
              <p className="cardCategory">AT THE TABLE</p>
            </div>

            <div className="cardContent">
              <h2>My Beli Top Eat</h2>

              <p className="featureTitle">Birdseye Kitchen</p>

              <p>
                This week, the entire Beli section is dedicated to Birdseye
                Kitchen. I went with my family and it has officially made its
                way into my top three restaurants in San Diego.
              </p>

              <p>
                It&apos;s a small kitchen and one of those places where you
                should probably walk in with three different options because,
                depending on the day, they might be out of your first choice.
                Honestly, that is part of what makes it so good.
              </p>

              <div className="runnerUp">
                <p className="runnerUpLabel">THE ORDER</p>

                <h3>Curry Mii Kati</h3>
                <p>
                  One of my favorites and an automatic order if they have it.
                </p>

                <h3>Red Curry</h3>
                <p>
                  Another one I would order again without even looking at the
                  rest of the menu.
                </p>

                <h3>Garlic Green Beans</h3>
                <p>
                  I&apos;m saying it. Better than Din Tai Fung&apos;s garlic
                  green beans.
                </p>

                <h3>Thai Tea</h3>
                <p>
                  Obviously you need something to drink with all of the above.
                </p>
              </div>
            </div>
          </article>

          <article className="currentCard podcastCard">
            <div className="cardHeader">
              <p className="cardNumber">03</p>
              <p className="cardCategory">ON REPEAT</p>
            </div>

            <div className="cardContent">
              <h2>Throwback of the Week</h2>

              <p className="featureTitle">
                COMMENT SECTION: ALL STARS
              </p>

              <p>
                Ft. Brittany Broski and Caleb Hearon
              </p>

              <p>
                I genuinely watch this episode at least once a month. You have
                Drew Afualo, Brittany Broski, and Caleb Hearon all together,
                three of my favorite names in pop culture, and it is genuinely
                one of the funniest podcast episodes I have ever watched.
              </p>

              <p>
                I already know what is coming and somehow still laugh every
                single time. The three of them together are absolute chaos in
                the best way possible.
              </p>

              <p>
                This is also my reminder that something does not have to be new
                to make the weekly draft. If I am still going back and watching
                it this often, it deserves a spot.
              </p>

              <div className="spotifyEmbed episodeEmbed">
                <iframe
                  title="Comment Section All Stars with Brittany Broski and Caleb Hearon"
                  src="https://open.spotify.com/embed/episode/6SvoTCeke0w8ot5WoQw9qu"
                  width="100%"
                  height="232"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>

              <a
                className="externalButton"
                href="https://open.spotify.com/episode/6SvoTCeke0w8ot5WoQw9qu?si=5be604a932ab4aa1"
                target="_blank"
                rel="noreferrer"
              >
                Listen on Spotify ↗
              </a>
            </div>
          </article>

          <article className="currentCard campaignCard">
            <div className="cardHeader">
              <p className="cardNumber">04</p>
              <p className="cardCategory">WORTH STUDYING</p>
            </div>

            <div className="cardContent">
              <h2>Campaign of the Week</h2>

              <p className="featureTitle">
                Netflix&apos;s Living Billboard
              </p>

              <p>
                How do you get people in Los Angeles to actually look up from
                their phones? Apparently, you put a man inside a living room
                30 feet above Sunset Boulevard.
              </p>

              <p>
                To promote <em>The Last House</em>, Netflix turned a billboard
                into an actual living space with a person inside. Instead of
                simply putting another movie poster over Sunset, they gave
                people something weird enough to stop, stare at, photograph,
                and send to someone else.
              </p>

              <p>
                That is what I love about this campaign. A billboard is one of
                the oldest forms of advertising, but Netflix made the billboard
                itself the entertainment. You did not even need to know what
                was being promoted yet. First you wanted to know why there was
                a man living above Sunset Boulevard.
              </p>

              <div className="runnerUp">
                <p className="runnerUpLabel">WHY IT WORKED</p>

                <h3>Curiosity did the advertising.</h3>

                <p>
                  The campaign gave people a reason to pull out their phones
                  without asking them to. Once people started posting the
                  billboard, the stunt stopped being limited to everyone who
                  drove past it and became content for everyone else.
                </p>
              </div>
            </div>
          </article>

          <article className="currentCard momentCard">
            <div className="cardHeader">
              <p className="cardNumber">05</p>
              <p className="cardCategory">WHAT CAUGHT MY ATTENTION</p>
            </div>

            <div className="cardContent">
              <h2>Don&apos;t Forget About the Players</h2>

              <p className="featureTitle">
                JPMorganChase x Ohio State
              </p>

              <p>
                When we talk about sports partnerships, so much of the
                conversation is about the fan. How can a sponsor improve the
                fan experience? What activation can they build? How can they
                reach the people sitting in the stands?
              </p>

              <p>
                What caught my attention about JPMorganChase&apos;s partnership
                with Ohio State is that it looks at another audience that
                deserves just as much attention: the athletes actually playing
                the game.
              </p>

              <p>
                Along with becoming a major partner across Ohio State
                athletics, the partnership includes a focus on financial
                education for student-athletes. That feels especially relevant
                in the NIL era, where college athletes can suddenly be earning
                real money while they are still learning how to manage it.
              </p>

              <p>
                It also makes sense for JPMorganChase beyond athletics. The
                company already has a major recruiting presence on Ohio
                State&apos;s campus, so the partnership connects athletics,
                education, and future talent instead of existing only as a logo
                in a stadium.
              </p>

              <div className="runnerUp">
                <p className="runnerUpLabel">THE BIGGER IDEA</p>

                <h3>Players are an audience too.</h3>

                <p>
                  Sports partnerships do not always have to start and end with
                  the fan. Sometimes the strongest partnership opportunity is
                  creating something useful for the athletes, students, or
                  communities that make the property valuable in the first
                  place.
                </p>

                <p>
                  This one has me thinking about a future issue on how brands
                  can build sponsorships around the players, not just the
                  people watching them.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <footer className="currentsFooter">
        <div>
          <p className="footerTitle">THE ELLA REPORT</p>
          <p>New favorites and observations added regularly.</p>
        </div>

        <div className="currentsFooterLinks">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/currents">Currents</Link>
          <Link href="/reports">Issues</Link>
        </div>

        <div className="currentsContact">
          <p>LET&apos;S CONNECT</p>

          <a href="mailto:ellammarkman@gmail.com">
            ellammarkman@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}