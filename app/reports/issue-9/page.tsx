import Link from "next/link";
import IssueInteractions from "./IssueInteractions";
import "./issue.css";

export default function IssueNinePage() {
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
          <Link href="/currents">Currents</Link>
          <Link href="/reports">Issues</Link>
        </div>
      </nav>

      <article className="issueArticle">
        <header className="issueHeader">
          <div className="issueMetaTop">
            <span>ISSUE #09</span>
            <span>PERSONAL</span>
          </div>

          <h1>
            I Have a Question <em>for You.</em>
          </h1>

          <p className="issueDek">
            My Notes app has become home to a very long list of conversation
            starters. Some are serious, some are completely ridiculous, and
            all of them tend to get an interesting answer. Here are ten of my
            favorites, answered by me.
          </p>

          <div className="issueByline">
            <span>By Ella Markman</span>
            <span>10 Questions</span>
            <span>7 min read</span>
          </div>
        </header>

        <section className="issueIntro">
          <p className="issueIntroOpening">
            I truly hate awkward silence. Like, I will do almost anything to
            avoid it.
          </p>

          <p>
            So a few years ago, I started compiling interesting conversation
            starters in my Notes app. The list has gotten slightly out of hand,
            but I have used these questions everywhere from road trips and
            conversations with friends to interviews and meeting new people,
            and somehow they always get the conversation going.
          </p>

          <p>
            Some are hypothetical, some tell you way more about a person than
            you would expect, and some are just completely random. I usually
            make everyone else answer them, so I figured it was finally time to
            answer ten of my favorites myself.
          </p>
        </section>

        <section className="questionsSection">
          <article className="questionBlock">
            <p className="questionNumber">01</p>

            <div className="questionContent">
              <h2>
                Would you rather be the most attractive person in the world or
                be able to read minds?
              </h2>

              <div className="questionAnswer">
                <p>
                  <strong>Read minds. Easily.</strong> Although, in today&apos;s
                  influencer world, being the most attractive person in the
                  world could honestly be a career. I would have to post one
                  TikTok to a popular sound, randomly blow up, and suddenly have
                  brand deals rolling in. Think Jeremy Meeks. The man&apos;s
                  mugshot went viral and turned into a modeling career.
                </p>

                <p>
                  Still, I&apos;m picking reading minds. I am way too curious
                  not to. Would knowing what everyone is thinking probably ruin
                  my life? Maybe. Would I still choose it? Absolutely.
                </p>
              </div>
            </div>
          </article>

          <article className="questionBlock">
            <p className="questionNumber">02</p>

            <div className="questionContent">
              <h2>
                Pick one person to be an ambassador of Earth for alien life.
              </h2>

              <div className="questionAnswer">
                <p>
                  <strong>Kris Jenner.</strong>
                </p>

                <p>
                  This is the easiest question on the list. If Kris Jenner can
                  turn one family into an entire business empire, I trust her to
                  represent humanity. She would somehow leave the meeting having
                  negotiated world peace, an exclusive streaming deal, and the
                  first intergalactic SKIMS campaign.
                </p>

                <p>
                  If the aliens don&apos;t like her, we probably weren&apos;t
                  surviving anyway.
                </p>
              </div>
            </div>
          </article>

          <article className="questionBlock">
            <p className="questionNumber">03</p>

            <div className="questionContent">
              <h2>Which fictional character would you love to beat up?</h2>

              <div className="questionAnswer">
                <p>
                  <strong>
                    Brian from <em>Family Guy</em>.
                  </strong>
                </p>

                <p>
                  I genuinely cannot stand him. He thinks he is the smartest
                  person in every room while consistently being one of the worst
                  people in it. I don&apos;t have some deep explanation for
                  this one. I just know that if I were dropped into Quahog for
                  24 hours, Brian would need to watch his back.
                </p>
              </div>
            </div>
          </article>

          <article className="questionBlock">
            <p className="questionNumber">04</p>

            <div className="questionContent">
              <h2>
                If someone offered you a box with everything you have ever lost,
                what is the first thing you would look for?
              </h2>

              <div className="questionAnswer">
                <p>
                  <strong>
                    A pair of green earrings I lost in the Camp Lokanda lake
                    when I was nine years old.
                  </strong>
                </p>

                <p>
                  I was going canoeing, they disappeared, and apparently I have
                  never emotionally recovered because all these years later
                  they are still the first thing that comes to mind. I
                  don&apos;t even know if I would wear them now. At this point,
                  I just need closure.
                </p>

                <p>
                  Somewhere at the bottom of that lake are my green earrings,
                  and I hope they&apos;re doing well.
                </p>
              </div>
            </div>
          </article>

          <article className="questionBlock">
            <p className="questionNumber">05</p>

            <div className="questionContent">
              <h2>What do you notice first when you meet someone new?</h2>

              <div className="questionAnswer">
                <p>
                  <strong>Their smile and eyes.</strong>
                </p>

                <p>
                  I think you can tell a lot about someone from both. I&apos;m
                  also really bad at remembering names when I first meet
                  someone, so apparently my brain has decided facial features
                  are much more important information to retain.
                </p>

                <p>
                  I might forget your name 30 seconds after you tell me, but I
                  will remember exactly what you looked like when you said it.
                </p>
              </div>
            </div>
          </article>

          <article className="questionBlock">
            <p className="questionNumber">06</p>

            <div className="questionContent">
              <h2>
                If you could be part of the plot of any show, which would you
                choose?
              </h2>

              <div className="questionAnswer">
                <p>
                  <strong>
                    <em>Below Deck</em>.
                  </strong>
                </p>

                <p>
                  Specifically, I want to be a second stew under Aesha, but
                  Captain Jason also needs to be the captain. I don&apos;t
                  really care who else is there.
                </p>

                <p>
                  I actually think I would be great at working on a yacht. I
                  love the hospitality side of it, I can handle long hours, and
                  I honestly think I would have so much fun doing it. My only
                  problem is that I would probably hate 70% of the guests. I
                  could make their espresso martinis, turn down their beds, and
                  plan their beach picnic with a smile, but the second I got
                  back into the crew mess, everyone would be hearing about it.
                </p>

                <p>
                  Also, I would absolutely need production to give me at least
                  one dramatic confessional per episode.
                </p>
              </div>
            </div>
          </article>

          <article className="questionBlock">
            <p className="questionNumber">07</p>

            <div className="questionContent">
              <h2>
                If there were stats available for every aspect of your life,
                which one would you want to see?
              </h2>

              <div className="questionAnswer">
                <p>
                  <strong>How many times I have said &quot;sorry.&quot;</strong>
                </p>

                <p>
                  I already know the number would be horrifying. I apologize
                  when someone else bumps into me, so I would love to know what
                  percentage of my lifetime vocabulary has just been the word
                  &quot;sorry.&quot;
                </p>

                <p>
                  But once I have access to the database, I&apos;m going down a
                  rabbit hole. How many hours have I spent looking for my phone
                  while it was in my hand? How many people have I walked past
                  multiple times without ever actually meeting them? What song
                  have I listened to the most in my entire life? How many
                  restaurants have I eaten at? Basically, I want Spotify Wrapped
                  for my existence.
                </p>
              </div>
            </div>
          </article>

          <article className="questionBlock">
            <p className="questionNumber">08</p>

            <div className="questionContent">
              <h2>
                If you were sent back to the Roman Empire with an iPhone, could
                you take over the world?
              </h2>

              <div className="questionAnswer">
                <p>
                  <strong>Not to be the Debbie Downer, but no.</strong>
                </p>

                <p>
                  First problem: no Wi-Fi. Second problem: no charger. My
                  incredibly advanced piece of future technology becomes a very
                  expensive camera and calculator until the battery hits zero.
                </p>

                <p>
                  Also, realistically, I probably only have a legitimate shot
                  at taking over the Roman Empire if I&apos;m a man. So unless
                  this hypothetical comes with unlimited service, a portable
                  charger, and a few other logistical adjustments, I don&apos;t
                  love my odds.
                </p>

                <p>
                  I give myself three days before someone accuses me of
                  witchcraft.
                </p>
              </div>
            </div>
          </article>

          <article className="questionBlock">
            <p className="questionNumber">09</p>

            <div className="questionContent">
              <h2>
                What topic could you give a 30-minute presentation on with zero
                prep?
              </h2>

              <div className="questionAnswer">
                <p>
                  <strong>
                    Why everyone should go to sleepaway camp for at least one
                    week before they are 18.
                  </strong>
                </p>

                <p>
                  I could probably talk for longer than 30 minutes about this.
                  You learn how to live with people who aren&apos;t your family,
                  make friends when you know absolutely no one, solve your own
                  problems, and exist without your parents immediately stepping
                  in to fix everything for you. You also learn extremely
                  important life skills like how to survive on very little
                  sleep and how to get ready for something in approximately
                  four minutes.
                </p>

                <p>
                  I genuinely think sleepaway camp teaches you things you cannot
                  learn in a classroom. You&apos;re forced to become more
                  independent while also figuring out how to be part of a
                  community.
                </p>

                <p>And yes, I am extremely biased.</p>
              </div>
            </div>
          </article>

          <article className="questionBlock">
            <p className="questionNumber">10</p>

            <div className="questionContent">
              <h2>
                If you could work for any company, what would it be?
              </h2>

              <div className="questionAnswer">
                <p>
                  <strong>
                    Dr Pepper CMO or partnerships for a major candy brand.
                  </strong>
                </p>

                <p>
                  Dr Pepper has built such a distinct personality that you can
                  recognize the brand without even seeing the logo. I would love
                  to be the person figuring out what the brand does next,
                  especially across sports, entertainment, and culture.
                </p>

                <p>
                  And candy just seems like one of the most fun categories
                  imaginable for partnerships. Sour Patch Kids, Nerds,
                  Reese&apos;s, anything in that world. There are so many
                  directions you can go with sports, music, experiential,
                  nostalgia, creators, limited-edition products, and completely
                  ridiculous collaborations that somehow make perfect sense.
                </p>

                <p>
                  I don&apos;t know exactly where my career will take me, but if
                  someone eventually lets me create partnerships for a candy
                  brand, I will not complain.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="finalQuestion">
          <p className="finalQuestionLabel">ONE MORE QUESTION</p>

          <h2>I have a question for you...</h2>

          <p className="finalQuestionText">
            These are only ten questions from a Notes app that currently has
            way too many more. Some are serious, some are stupid, and some have
            led to conversations that lasted way longer than I ever expected.
            That&apos;s probably why I keep collecting them. A good question
            can tell you more about someone than 20 minutes of small talk ever
            will.
          </p>

          <p className="finalQuestionPrompt">
            What question should I add to the list?
          </p>
        </section>

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
          <Link href="/currents">Currents</Link>
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