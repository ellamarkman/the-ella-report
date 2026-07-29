"use client";

import Link from "next/link";
import { useRef } from "react";
import "./currently.css";

const restaurants = [
  {
    rank: "01",
    name: "Los Tacos",
    location: "Carlsbad, California",
    order: "Three Tacos with Rice and Beans",
    note:
      "I genuinely eat here at least once a week. Three tacos with rice and beans for only $15 is hard to beat, and the quality never disappoints. It has become one of my go-to lunch spots in North County.",
  },
  {
    rank: "02",
    name: "Kai Ola",
    location: "Leucadia, California",
    order: "Moonlight Roll",
    note:
      "A sushi spot I keep coming back to. Fresh fish, a relaxed atmosphere, and one of my favorite specialty rolls.",
  },
  {
    rank: "03",
    name: "Lola 67 Market",
    location: "Carlsbad Village, California",
    order: "Lunch Plate with a Carne Asada Taco and Enchilada",
    note:
      "A true hole-in-the-wall spot nestled inside a neighborhood market between the houses of Carlsbad Village. The food feels authentic, local, and deserving of far more attention.",
  },
];

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

          <p className="currentsDate">Week of July 27, 2026</p>
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
                href="https://open.spotify.com/playlist/7p2XCx4Isemc0TwQhm6VT1?si=79a8a78326c1458d"
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
                Not Gonna Lie with Kylie Kelce
              </p>

              <p>
                This week&apos;s episode brings Kylie and Ilona Maher together
                to talk about everything from Disneyland Paris and body image
                to the Olympics and life inside the Olympic Village.
              </p>

              <p>
                I liked how naturally their personalities worked together. The
                conversation was funny and casual, but it also made room for
                more honest discussions about confidence, sports, and the
                expectations placed on women.
              </p>

              <div className="spotifyEmbed episodeEmbed">
                <iframe
                  title="Not Gonna Lie with Kylie Kelce episode featuring Ilona Maher"
                  src="https://open.spotify.com/embed/episode/1t2fUj3RkQLkkLBePPvAQO"
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
                Gap Inc.&apos;s Employee Creator Program
              </p>

              <p>
                Gap Inc. is expanding its creator and social advocacy program
                to employees across Gap, Old Navy, Banana Republic, and Athleta.
                Instead of looking only to outside influencers, the company is
                giving its own employees an opportunity to become brand
                creators.
              </p>

              <p>
                What stood out to me is the internal focus. Employees already
                understand the products, customers, and culture, which gives
                them the potential to create content that feels more natural
                than a traditional influencer partnership.
              </p>

              <p>
                It also shows employees that the company values their voices
                beyond their regular job responsibilities. Some of the most
                believable brand advocates may already be working inside the
                company.
              </p>

              <a
                className="externalButton"
                href="https://www.retaildive.com/news/gap-inc-opens-creator-influencer-program-staff-employees/826238/"
                target="_blank"
                rel="noreferrer"
              >
                Read about the program ↗
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

              <p className="featureTitle">San Diego Comic-Con</p>

              <p>
                Comic-Con once again transformed San Diego into the center of
                entertainment. Even without a convention badge, fans could
                experience major free activations, pop-ups, installations, and
                branded events throughout the Gaslamp Quarter.
              </p>

              <p>
                Marvel also used the weekend to reveal more about the future of
                its universe, including a new Black Panther film and additional
                details surrounding Doctor Doom and Avengers: Doomsday. The
                announcements quickly became some of the weekend&apos;s biggest
                conversations.
              </p>

              <p>
                What makes Comic-Con so interesting from a marketing
                perspective is that the experience extends far beyond the
                convention center. Studios compete for attention across the
                entire city, turning fans into active participants instead of
                simply showing them another trailer.
              </p>

              <div className="runnerUp">
                <p className="runnerUpLabel">THE CONTROVERSY</p>

                <h3>The Marvel Panel Access Debate</h3>

                <p>
                  The Marvel conversation also received criticism after many
                  fans with convention tickets were still unable to enter the
                  highly anticipated panel. It showed the difficult balance
                  between creating exclusivity and making major fan moments
                  feel accessible to the people who traveled to attend.
                </p>

                <p>
                  Scarcity creates excitement, but it can also create negative
                  attention when fans feel shut out of the experience they came
                  to see.
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