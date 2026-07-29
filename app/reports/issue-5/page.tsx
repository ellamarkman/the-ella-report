import Link from "next/link";
import IssueInteractions from "./IssueInteractions";
import "./issue.css";

export default function IssueFivePage() {
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
            <span>ISSUE #05</span>
            <span>SPORTS MARKETING</span>
          </div>

          <h1>
            The Best World Cup
            <br />
            Partnerships
          </h1>

          <p className="issueDek">
            The World Cup gives brands access to one of the largest audiences
            in sports, but attention alone does not create a memorable
            partnership. Three campaigns understood what makes the tournament
            different.
          </p>

          <div className="issueByline">
            <span>By Ella Markman</span>
            <span>Published July 29, 2026</span>
            <span>7 min read</span>
          </div>
        </header>

        <div className="issueBody">
          <p className="issueOpening">
            I always joke that I watch major sporting events as much for the
            sponsors as I do for the games.
          </p>

          <p>
            Half the time, I am paying more attention to the advertisements,
            athlete partnerships, brand activations, and sponsorship placements
            than what is actually happening on the field.
          </p>

          <p>
            The World Cup is one of the hardest sporting events to market. It
            only comes around once every four years, its audience spans nearly
            every country, and brands have to create campaigns that resonate
            across cultures, languages, and generations.
          </p>

          <p>
            Unlike a league sponsorship that develops throughout an entire
            season, a World Cup campaign has a limited window to make an
            impression. Brands have to introduce their message quickly without
            distracting from the tournament itself.
          </p>

          <p>
            That is not easy. A brand can spend millions of dollars becoming an
            official sponsor and still feel completely disconnected from the
            event.
          </p>

          <aside className="issuePullQuote">
            <p>
              The best World Cup partnerships do not simply borrow the
              tournament&apos;s audience. They understand why that audience is
              watching.
            </p>
          </aside>

          <section className="issueSection">
            <p className="issueSectionLabel">THE CHALLENGE</p>
            <h2>Marketing to the entire world</h2>

            <p>
              World Cup sponsors have to speak to lifelong football fans,
              casual viewers, families, travelers, athletes, and people who may
              only watch one match every four years.
            </p>

            <p>
              A campaign that works perfectly in the United States may not
              connect with audiences in Brazil, England, Japan, Mexico, or
              Argentina. Even the word used for the sport changes depending on
              where the campaign appears.
            </p>

            <p>
              That means the strongest partnerships usually focus on emotions
              that translate anywhere: pride, connection, anticipation,
              celebration, and belonging.
            </p>

            <p>
              The following three partnerships stood out to me because each
              brand approached that challenge differently. Kalshi used an
              athlete to establish trust. Coca-Cola focused on the emotion
              surrounding the tournament. Visa positioned itself as part of the
              global experience.
            </p>
          </section>

          <section className="issueSection">
            <p className="issueSectionLabel">PARTNERSHIP ONE</p>
            <h2>Kalshi × Lionel Messi</h2>

            <p>
              While I literally just criticized Kalshi last week for its{" "}
              <em>Love Island</em> campaign, I have to give credit where it is
              due.
            </p>

            <p>
              Its World Cup campaign was a major step up. Partnering with Lionel
              Messi immediately gave the brand credibility on the biggest stage
              in sports.
            </p>

            <p>
              Instead of feeling like another betting or prediction platform
              trying to force itself into the conversation, Kalshi finally
              looked like it belonged there.
            </p>

            <p>
              Messi was especially valuable because he represents more than
              athletic success. He is connected to one of the most memorable
              World Cup victories in recent history, recognized by fans across
              generations, and familiar even to people who do not regularly
              follow football.
            </p>

            <p>
              That level of recognition gave Kalshi a way to explain an
              unfamiliar product through a familiar person.
            </p>
          </section>

          <aside className="issueAnalysisBox">
            <p className="issueAnalysisLabel">WHY IT WORKED</p>

            <h3>Kalshi borrowed credibility before asking for trust.</h3>

            <p>
              Sports betting and prediction markets are still new to many
              American consumers, and the category continues to face questions
              around regulation, legitimacy, and trust. Pairing with Lionel
              Messi gave Kalshi immediate credibility while introducing the
              platform to millions of people who may have never heard of a
              prediction market before.
            </p>
          </aside>

          <section className="issueSection">
            <p className="issueSectionLabel">THE MARKETING TAKEAWAY</p>
            <h2>A recognizable face can simplify an unfamiliar product</h2>

            <p>
              Celebrity partnerships are often criticized for feeling random,
              but this one had a clear purpose. Kalshi did not only need
              attention. It needed consumers to believe that it was a legitimate
              platform worthy of being associated with a major global event.
            </p>

            <p>
              Messi helped close that gap. His presence made the campaign feel
              established before many viewers fully understood what Kalshi
              offered.
            </p>

            <p>
              The strongest athlete partnerships are not based only on follower
              counts. They solve a specific marketing problem. For Kalshi, that
              problem was trust.
            </p>
          </section>

          <aside className="issuePullQuote">
            <p>
              The strongest athlete partnerships do more than attract
              attention. They solve a problem for the brand.
            </p>
          </aside>

          <section className="issueSection">
            <p className="issueSectionLabel">PARTNERSHIP TWO</p>
            <h2>Coca-Cola × the World Cup</h2>

            <p>
              Some partnerships just feel right, and Coca-Cola with the World
              Cup is one of them.
            </p>

            <p>
              Even though Coca-Cola is one of the most recognizable American
              brands in the world, it somehow feels at home everywhere the World
              Cup goes.
            </p>

            <p>
              With this year&apos;s tournament being hosted across North
              America, the partnership felt even more natural. Coca-Cola already
              has global recognition, strong ties to major sporting events, and
              products that are connected to shared meals, celebrations, and
              social experiences.
            </p>

            <p>
              That makes the brand an easy fit for an event centered around
              people gathering together.
            </p>

            <p>
              Coca-Cola also understands that it does not need to explain
              itself. Unlike a newer brand attempting to introduce an unfamiliar
              service, Coca-Cola can use its sponsorship to reinforce a feeling
              audiences already associate with the company.
            </p>
          </section>

          <aside className="issueAnalysisBox">
            <p className="issueAnalysisLabel">WHY IT WORKED</p>

            <h3>Coca-Cola understood that the fans should remain the stars.</h3>

            <p>
              Coca-Cola never tries to make itself bigger than the tournament.
              Its campaigns celebrate supporters, cultures, traditions, and the
              emotional moments that make the World Cup special. The product is
              present, but the experience comes first.
            </p>
          </aside>

          <section className="issueSection">
            <p className="issueSectionLabel">THE MARKETING TAKEAWAY</p>
            <h2>Long-term partnerships create their own meaning</h2>

            <p>
              Coca-Cola&apos;s strength is not one advertisement or activation.
              It is the consistency of the relationship.
            </p>

            <p>
              After appearing alongside major sporting moments for decades, the
              brand no longer feels like an outside company purchasing access to
              the event. It feels like part of the tradition surrounding it.
            </p>

            <p>
              That is what long-term sponsorship can accomplish. Repetition
              creates familiarity, and familiarity can eventually create an
              emotional association.
            </p>

            <p>
              Coca-Cola has reached the point where its World Cup presence feels
              expected. The challenge is no longer proving that the brand
              belongs. It is finding new ways to celebrate the tournament
              without overpowering it.
            </p>
          </section>          <section className="issueSection">
            <p className="issueSectionLabel">PARTNERSHIP THREE</p>
            <h2>Visa × the World Cup</h2>

            <p>
              Visa took a different approach.
            </p>

            <p>
              Instead of focusing entirely on the matches themselves, the brand
              focused on what makes the World Cup unique: bringing people from
              around the world into one shared experience.
            </p>

            <p>
              Whether a fan was traveling to a host city, purchasing
              merchandise, attending a watch party, or cheering from home, Visa
              positioned itself around the movement and activity surrounding the
              tournament.
            </p>

            <p>
              That approach made sense because Visa is not naturally connected
              to one specific team, player, or match. Its relevance comes from
              helping people participate in the broader experience.
            </p>

            <p>
              The campaign presented payment as a small but necessary part of
              everything happening around the event, from travel and food to
              tickets and fan experiences.
            </p>
          </section>

          <aside className="issueAnalysisBox">
            <p className="issueAnalysisLabel">WHY IT WORKED</p>

            <h3>Visa marketed the experience surrounding the matches.</h3>

            <p>
              The World Cup is not only a sporting event. It is a global event.
              Visa leaned into that idea by connecting its brand to travel,
              access, movement, and participation. That made the company feel
              like part of the fan journey instead of another logo placed beside
              the tournament.
            </p>
          </aside>

          <section className="issueSection">
            <p className="issueSectionLabel">THE MARKETING TAKEAWAY</p>
            <h2>Brands do not have to own the action to own a moment</h2>

            <p>
              Visa could never credibly claim responsibility for the goals,
              rivalries, or emotional moments taking place on the field.
              Instead, it focused on the practical experiences surrounding
              them.
            </p>

            <p>
              That is an important lesson for brands entering sports. Not every
              sponsor needs to center its campaign on athletic performance.
              Sometimes the better opportunity is the trip, the purchase, the
              celebration, or the interaction that allows a fan to feel closer
              to the event.
            </p>

            <p>
              Visa found a role that made sense for its business and stayed
              within it.
            </p>
          </section>

          <aside className="issuePullQuote">
            <p>
              A sponsor becomes more memorable when it finds a useful role in
              the fan experience.
            </p>
          </aside>

          <section className="issueSection">
            <p className="issueSectionLabel">THE BIGGER LESSON</p>
            <h2>What separates a sponsor from a partnership</h2>

            <p>
              Kalshi, Coca-Cola, and Visa each used the World Cup differently.
              Their campaigns were not built around the same product, audience,
              or marketing objective.
            </p>

            <p>
              Kalshi needed credibility. Coca-Cola wanted to reinforce an
              emotional connection. Visa wanted to become part of the activity
              surrounding the event.
            </p>

            <p>
              What connected all three was that the strategy began with the
              brand&apos;s role.
            </p>

            <p>
              The weakest sponsorship campaigns begin with available inventory:
              a logo placement, digital advertisement, uniform patch, or
              hospitality package. The strongest begin with a question.
            </p>

            <p>
              Why should this specific brand be part of this specific event?
            </p>

            <p>
              Once that answer is clear, the activation becomes much easier to
              understand. The partnership no longer feels like a company
              interrupting the tournament. It feels like a company contributing
              something to it.
            </p>
          </section>

          <section className="issueSection">
            <p className="issueSectionLabel">LOOKING AHEAD</p>
            <h2>Partnerships I would love to see in 2027</h2>

            <p>
              With the 2027 FIFA Women&apos;s World Cup heading to Brazil, I am
              already excited to see which brands step up next.
            </p>

            <p>
              The following are not announced sponsors or confirmed
              partnerships. They are three brands I believe could create
              memorable campaigns around the tournament because of their
              connections to fashion, beauty, music, culture, and a growing
              global audience.
            </p>

            <p>
              The Women&apos;s World Cup gives brands an opportunity to do more
              than place their logos around the matches. Brazil&apos;s culture,
              colors, music, fashion, and history create an entire world that
              sponsors could build around.
            </p>
          </section>

          <section className="issueSection">
            <p className="issueSectionLabel">MY 2027 PICK</p>
            <h2>FARM Rio</h2>

            <p>
              I would love to see FARM Rio create a campaign that celebrates
              Brazilian culture through fashion, color, and the fans.
            </p>

            <p>
              As a Brazilian brand recognized for bold patterns and vibrant
              designs, FARM Rio feels like a natural partner for a tournament
              hosted in Brazil. The company would not have to force a connection
              to the host nation because that connection already exists within
              its identity.
            </p>

            <p>
              A partnership could include limited-edition apparel, customized
              match-day looks, fan styling content, athlete collaborations, or
              collections inspired by each host city.
            </p>

            <p>
              The brand could also highlight Brazilian designers, artists, and
              local communities rather than reducing the host country to a few
              familiar visual references.
            </p>
          </section>

          <aside className="issueAnalysisBox">
            <p className="issueAnalysisLabel">WHY IT COULD WORK</p>

            <h3>FARM Rio could turn the host nation into the creative center.</h3>

            <p>
              The partnership would connect directly to Brazil while giving fans
              something expressive and wearable. Rather than simply sponsoring
              the tournament, FARM Rio could help shape how the event looks and
              feels away from the field.
            </p>
          </aside>

          <section className="issueSection">
            <p className="issueSectionLabel">MY 2027 PICK</p>
            <h2>Rhode</h2>

            <p>
              I would also love to see Rhode become part of the Women&apos;s
              World Cup conversation.
            </p>

            <p>
              After Justin Bieber&apos;s involvement in this year&apos;s World
              Cup entertainment, the connection made me think about how Hailey
              Bieber and Rhode could approach the women&apos;s tournament from
              a beauty and culture perspective.
            </p>

            <p>
              This is not an existing Rhode partnership. It is an example of how
              a beauty brand could enter the event in a way that feels current
              and different from the categories that traditionally dominate
              sports sponsorship.
            </p>

            <p>
              Rhode could work with players, creators, supporters, and Brazilian
              beauty talent to build content around match-day routines, travel,
              confidence, skincare, and personal style.
            </p>

            <p>
              The campaign would have to keep the athletes at the center rather
              than treating the tournament as a backdrop for a product launch.
              Done well, it could connect beauty, culture, and one of the
              fastest-growing sporting events in the world.
            </p>
          </section>

          <aside className="issueAnalysisBox">
            <p className="issueAnalysisLabel">WHY IT COULD WORK</p>

            <h3>Rhode could introduce a less traditional sponsorship category.</h3>

            <p>
              Women&apos;s sports audiences are not one-dimensional. A beauty
              partnership could reflect the overlapping interests of fans while
              giving players and creators room to show their personalities away
              from competition.
            </p>
          </aside>

          <section className="issueSection">
            <p className="issueSectionLabel">MY 2027 PICK</p>
            <h2>Spotify</h2>

            <p>
              I would also love to see Spotify continue leaning into the music
              and culture surrounding the tournament.
            </p>

            <p>
              Music is already part of nearly every major sporting event. It
              plays in stadiums, appears in broadcasts, fuels fan celebrations,
              and becomes connected to the memories people take away from the
              tournament.
            </p>

            <p>
              In Brazil, Spotify would have the opportunity to highlight local
              artists, regional sounds, player playlists, fan-created music,
              match-day mixes, and collaborations between international and
              Brazilian performers.
            </p>

            <p>
              The activation could extend beyond one official tournament song.
              Spotify could build a living soundtrack that changes throughout
              the competition and reflects the teams, cities, and supporters
              involved.
            </p>
          </section>

          <aside className="issueAnalysisBox">
            <p className="issueAnalysisLabel">WHY IT COULD WORK</p>

            <h3>Spotify could give the tournament a soundtrack shaped by fans.</h3>

            <p>
              The platform naturally connects different countries and cultures
              through music. A strong activation could make Brazilian artists
              central to the global event while giving supporters a way to
              participate from anywhere.
            </p>
          </aside>

          <section className="issueSection">
            <p className="issueSectionLabel">THE FINAL WHISTLE</p>
            <h2>The culture matters as much as the competition</h2>

            <p>
              Women&apos;s sports continue to grow every year, and I think the
              brands that embrace the culture around the event, not just the
              matches themselves, will be the ones people remember most.
            </p>

            <p>
              Whether it was Kalshi using the biggest name in football to build
              trust, Coca-Cola celebrating the emotion of the game, or Visa
              highlighting the tournament&apos;s global reach, each campaign
              understood what made the World Cup different.
            </p>

            <p>
              They did not treat the event like interchangeable sponsorship
              inventory. They found a role that connected their brand to the
              way fans experienced the tournament.
            </p>

            <p className="issueClosing">
              The best sponsorships do not interrupt the event.
              <br />
              <br />
              They become part of it.
            </p>
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