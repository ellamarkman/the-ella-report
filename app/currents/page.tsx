"use client";

import Link from "next/link";
import { useRef } from "react";
import "./currently.css";

const restaurants = [
  {
    rank: "01",
    name: "Los Tacos",
    location: "Encinitas, California",
    order: "Al Pastor Tacos",
    note: "Simple, flavorful, and the first thing I would order again.",
  },
  {
    rank: "02",
    name: "Kai Ola",
    location: "Carlsbad, California",
    order: "Moonlight Roll",
    note: "Fresh sushi, relaxed energy, and a roll that immediately stood out.",
  },
  {
    rank: "03",
    name: "Sidecar Doughnuts",
    location: "Del Mar, California",
    order: "Salt & Butter Gluten-Friendly Doughnut",
    note: "A gluten-friendly doughnut that does not feel like a compromise.",
  },
];

export default function CurrentlyPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const moveCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    carousel.scrollBy({
      left: direction === "right" ? carousel.clientWidth * 0.82 : -carousel.clientWidth * 0.82,
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

          <p className="currentsDate">Week of July 13, 2026</p>
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
            </div>
          </article>

          <article className="currentCard foodCard">
            <div className="cardHeader">
              <p className="cardNumber">02</p>
              <p className="cardCategory">AT THE TABLE</p>
            </div>

            <div className="cardContent">
              <h2>My Beli Top Eats</h2>

              <p className="cardDescription">
                The meals I would recommend from this week.
              </p>

              <div className="restaurantList">
                {restaurants.map((restaurant) => (
                  <div className="restaurantRow" key={restaurant.rank}>
                    <p className="restaurantRank">{restaurant.rank}</p>

                    <div>
                      <h3>{restaurant.name}</h3>
                      <p className="restaurantLocation">
                        {restaurant.location}
                      </p>
                      <p className="restaurantOrder">{restaurant.order}</p>
                      <p className="restaurantNote">{restaurant.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="openSpots">
                Spots four and five are still being earned.
              </p>
            </div>
          </article>

          <article className="currentCard podcastCard">
            <div className="cardHeader">
              <p className="cardNumber">03</p>
              <p className="cardCategory">IN MY EARS</p>
            </div>

            <div className="cardContent">
              <h2>Podcast of the Week</h2>

              <p className="featureTitle">
                Flopcast <span>(Working Title)</span>
              </p>

              <p>
                Paige and Molly talk through pop culture and their latest hot
                takes in a way that feels more like listening to my own friends
                than a traditional podcast.
              </p>

              <p>
                I originally followed Paige through her work with Tana Mongeau,
                so discovering the show felt like reconnecting with a corner of
                internet culture I grew up watching.
              </p>

              <div className="spotifyEmbed episodeEmbed">
                <iframe
                  title="Flopcast episode of the week"
                  src="https://open.spotify.com/embed/episode/6O467OOVoohHLMnRCPBBxF"
                  width="100%"
                  height="232"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
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
                ADÉLA: <em>Ain&apos;t in LA</em>
              </p>

              <p>
                ADÉLA promoted her new song by placing posters across Los
                Angeles and making it appear as though someone had crossed out
                the word “are” and replaced it with “ain&apos;t.”
              </p>

              <p>
                The execution looked accidental enough to create curiosity,
                while still being recognizable as a coordinated citywide
                rollout. It turned a grammar correction into the campaign
                itself.
              </p>

              <a
                className="externalButton"
                href="https://www.instagram.com/reels/Da1NLn0xxHy/"
                target="_blank"
                rel="noreferrer"
              >
                View the campaign ↗
              </a>
            </div>
          </article>

          <article className="currentCard momentCard">
            <div className="cardHeader">
              <p className="cardNumber">05</p>
              <p className="cardCategory">THE BIG MOMENT</p>
            </div>

            <div className="cardContent">
              <h2>What Caught My Attention</h2>

              <p className="featureTitle">The ESPY Awards</p>

              <p>
                The ESPYs offer something sports fans rarely get to see:
                athletes from completely different leagues, teams, and sports
                sharing the same room and celebrating each other.
              </p>

              <p>
                This year, the Knicks and Jalen Brunson dominated the awards,
                while Marcello Hernández brought a different energy to his
                hosting debut. The fashion, storytelling, comedy, and crossover
                between sports and entertainment made the event feel bigger
                than a standard awards show.
              </p>

              <div className="runnerUp">
                <p className="runnerUpLabel">CLOSE SECOND</p>
                <h3>Fanatics Fest</h3>
                <p>
                  Another rare moment where major athletes and fan communities
                  from across sports come together under one roof.
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
          <Link href="/currently">Currents</Link>
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