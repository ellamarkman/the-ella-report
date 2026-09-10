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

          <p className="currentsDate">Week of September 7, 2026</p>
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
          {/* 01 - SPOTIFY */}

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

          {/* 02 - FOOD */}

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

          {/* 03 - PODCAST */}

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

              <p>Ft. Brittany Broski and Caleb Hearon</p>

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

          {/* 04 - CAMPAIGN */}

          <article className="currentCard campaignCard">
            <div className="cardHeader">
              <p className="cardNumber">04</p>
              <p className="cardCategory">WORTH STUDYING</p>
            </div>

            <div className="cardContent">
              <h2>Campaign of the Week</h2>

              <p className="featureTitle">
                Walker Lyons x Dr Pepper
              </p>

              <p>
                I love when an athlete partnership actually lets the athlete
                have a personality. Walker Lyons&apos; Dr Pepper collab is
                exactly the type of college partnership I want to see more of.
              </p>

              <p>
                Dr Pepper already feels at home in college football, so the
                brand does not need to spend the entire campaign convincing us
                why it belongs there. Instead, it can have fun with the athlete
                and create something that feels built for social rather than
                taking a traditional commercial and shrinking it down for
                Instagram.
              </p>

              <p>
                That is what stood out to me here. Walker gets to show some
                personality, Dr Pepper gets another natural entry point into
                college football culture, and the product does not have to
                overpower the content for you to remember who sponsored it.
              </p>

              <div className="runnerUp">
                <p className="runnerUpLabel">WHY I LIKE IT</p>

                <h3>Let the athlete be the creative.</h3>

                <p>
                  NIL gives brands access to athletes, but access alone does
                  not make good content. The best partnerships figure out what
                  makes the athlete entertaining in the first place and build
                  around that instead of turning them into a spokesperson
                  reading brand copy.
                </p>
              </div>

              <a
                className="externalButton"
                href="https://www.instagram.com/reels/Dc65WsOvkGb/"
                target="_blank"
                rel="noreferrer"
              >
                Watch the campaign ↗
              </a>
            </div>
          </article>

          {/* 05 - WHAT CAUGHT MY ATTENTION */}

          <article className="currentCard momentCard">
            <div className="cardHeader">
              <p className="cardNumber">05</p>
              <p className="cardCategory">WHAT CAUGHT MY ATTENTION</p>
            </div>

            <div className="cardContent">
              <h2>College Jersey Patches Are Here</h2>

              <p className="featureTitle">
                The Next Big Piece of College Sports Inventory
              </p>

              <p>
                Last time I talked about college jersey patches,
                JPMorganChase x Ohio State caught my attention because the
                partnership went beyond putting a logo on a uniform. Now I am
                watching the category itself.
              </p>

              <p>
                College sports has officially opened up a completely new piece
                of sponsorship inventory, and I think the interesting part is
                going to be seeing what schools and brands actually do with it.
              </p>

              <p>
                A jersey is different from a sign in the stadium. It is on the
                athlete, in every highlight, every photo, every social post,
                and potentially some of the most memorable moments in a
                school&apos;s season. That makes the visibility incredibly
                valuable, but it also makes brand fit way more important.
              </p>

              <p>
                I do not want to see schools treat this like another empty
                rectangle to sell to whoever writes the biggest check. The
                partnerships I am most interested in are the ones where the
                company already has a reason to be part of that school&apos;s
                world, whether that is through the region, alumni, students,
                recruiting, or an existing relationship with the university.
              </p>

              <div className="runnerUp">
                <p className="runnerUpLabel">WHAT I&apos;M WATCHING</p>

                <h3>Who earns the jersey?</h3>

                <p>
                  The patch itself is only the beginning. I want to see which
                  brands turn the placement into a larger partnership and which
                  ones stop at logo exposure. The brands that can connect the
                  jersey to athletes, students, fans, and the university itself
                  are going to make this inventory much more interesting.
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