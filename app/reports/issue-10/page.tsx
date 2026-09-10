import Link from "next/link";
import IssueInteractions from "./IssueInteractions";
import "./issue.css";

export default function IssueTenPage() {
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
            <span>ISSUE #10</span>
            <span>PARTNERSHIPS + ENTERTAINMENT</span>
          </div>

          <h1>
            The DWTS Playbook: <em>Sponsorship Matchmaker for the Pros</em>
          </h1>

          <p className="issueDek">
            The pros of Dancing With the Stars have become brands of their own.
            So I&apos;m playing sponsorship matchmaker and pairing ten of them
            with the brands, campaigns, and activations I think fit them best.
          </p>

          <div className="issueByline">
            <span>By Ella Markman</span>
            <span>10 Pros</span>
            <span>Part 1</span>
          </div>
        </header>

        <section className="issueIntro">
          <p className="issueIntroOpening">
            With this season of <em>Dancing With the Stars</em> announced, it
            only felt right to dedicate an issue to my favorite show of all
            time.
          </p>

          <p>
            I could confidently name the winner of almost every season and,
            with a piece of paper and enough time, probably write down an
            alarming number of former contestants. Last year, my roommate and I
            watched every single week, but honestly, DWTS has been part of my
            weekly rotation for years and years.
          </p>

          <p>
            As much as I love the celebrities, I have always loved the pros
            more. The celebrity cast changes every season, but the pros are the
            people you actually get to know. You learn their personalities,
            choreography styles, relationships, families, and eventually start
            rooting for them just as much as whoever they are partnered with.
            A lot of them have also built huge audiences outside of the
            ballroom, which got me thinking about them less as dancers and more
            as individual marketing properties.
          </p>

          <p>
            So, I decided to play sponsorship matchmaker. I&apos;m taking ten
            of this season&apos;s pros and pairing each of them with a brand I
            think fits their personality, audience, or story, then figuring out
            what the partnership could actually look like. To challenge myself
            even more, I&apos;m treating everyone individually, so ignore the
            fact that what feels like half the cast is married to each other.
            Everyone gets their own partnership.
          </p>

          <p>
            The other six are coming next week!
          </p>
        </section>

        <section className="playbookSection">
          {/* SHARNA */}

          <article className="proBlock">
            <div className="proTop">
              <p className="proNumber">01</p>

              <div className="proIdentity">
                <p className="proLabel">THE COMEBACK</p>
                <h2>Sharna Burgess</h2>
              </div>
            </div>

            <div className="partnershipPitch">
              <div className="partnershipColumn">
                <p className="partnershipLabel">THE PARTNER</p>
                <p className="partnershipBrand">Haircare Brand</p>
              </div>

              <div className="partnershipColumn">
                <p className="partnershipLabel">THE CAMPAIGN</p>
                <p className="partnershipTagline">
                  &quot;The Red Is Back&quot;
                </p>
              </div>
            </div>

            <div className="proCopy">
              <p>
                My queen. I am SO glad she is back. First things first, she
                needs to go back to that bright red hair. Sharna has a
                magnetism about her that I don&apos;t think any other pro has
                completely replicated, and I have really missed her the last
                few seasons.
              </p>

              <p>
                Her last few years on the show were also weird. She won with
                Bobby Bones, got an insane amount of hate afterward, and then
                was gone from the ballroom. Now, after four seasons away,
                getting married, and having a kid, this is a comeback.
              </p>

              <p>
                First, I want a partnership with a hair company as the way we
                find out the red hair is officially back. Don&apos;t just let
                her casually show up to the premiere with it. Build a campaign
                around the transformation, tease it before the season, and make
                the reveal part of Sharna returning to DWTS.{" "}
                <strong>The Red Is Back</strong> basically writes itself.
              </p>
            </div>

            <div className="bonusPartnership">
              <p className="bonusLabel">BONUS PARTNERSHIP</p>
              <h3>Victoria&apos;s Secret</h3>
              <p>
                We need some of that rogue, hot, fiery energy back in the
                ballroom. Yes, the show is on Disney+ now, but I feel like we
                have lost some of the sexiness and passion in the dances. Half
                the pros are married to each other, and things have gotten a
                little vanilla. Sharna was always one of the pros who brought
                that edge. I could see a Victoria&apos;s Secret activation with
                Sharna, Daniella, Jenna, and maybe Britt where the dancers
                actually perform as part of the VS Fashion Show. Don&apos;t
                just put them in a campaign. Give the dancers something to
                dance in.
              </p>
            </div>
          </article>

          {/* MARK */}

          <article className="proBlock">
            <div className="proTop">
              <p className="proNumber">02</p>

              <div className="proIdentity">
                <p className="proLabel">THE ICON</p>
                <h2>Mark Ballas</h2>
              </div>
            </div>

            <div className="partnershipPitch">
              <div className="partnershipColumn">
                <p className="partnershipLabel">THE PARTNER</p>
                <p className="partnershipBrand">Demonia</p>
              </div>

              <div className="partnershipColumn">
                <p className="partnershipLabel">THE PRODUCT</p>
                <p className="partnershipTagline">
                  Custom Mark Ballas Dance Boot
                </p>
              </div>
            </div>

            <div className="proCopy">
              <p>
                The icon. The legend. Yes, he gets some of the best
                celebrities, but he also creates some of the best dances and
                moments on the show. He is one of the most successful pros for
                a reason. The fact that he can take years off, randomly come
                back, and immediately destroy everyone is so funny to me.
              </p>

              <p>
                I also love Mark because he has really embraced his alternative
                style over the years. The curly long hair, the boots, the music
                he makes with his wife as Alexander Jean, it all feels very
                distinctly Mark.
              </p>

              <p>
                That&apos;s why I would put him with <strong>Demonia</strong>,
                which is known for its platform and alternative boots. I want
                them to create a custom Mark Ballas boot that keeps that
                Demonia look but can actually be danced in. He is already
                constantly wearing boots, so it doesn&apos;t feel like we are
                forcing a product onto him.
              </p>
            </div>

            <div className="bonusPartnership">
              <p className="bonusLabel">BONUS PARTNERSHIP</p>
              <h3>Hot Topic x Alexander Jean</h3>
              <p>
                I would build on that with Hot Topic and bring his wife into it
                through Alexander Jean. Give me pop-up performances of their
                music tied to the shoe launch. I&apos;m taking some inspiration
                from what Urban Outfitters has done with KATSEYE here. Fashion,
                music, dance, and Mark&apos;s existing aesthetic all in one
                partnership. I would absolutely go.
              </p>
            </div>
          </article>

          {/* HAILEY */}

          <article className="proBlock">
            <div className="proTop">
              <p className="proNumber">03</p>

              <div className="proIdentity">
                <p className="proLabel">THE NEW GENERATION</p>
                <h2>Hailey Bills</h2>
              </div>
            </div>

            <div className="partnershipPitch">
              <div className="partnershipColumn">
                <p className="partnershipLabel">THE PARTNER</p>
                <p className="partnershipBrand">Daise</p>
              </div>

              <div className="partnershipColumn">
                <p className="partnershipLabel">THE CAMPAIGN</p>
                <p className="partnershipTagline">
                  &quot;Show Ready with Hailey&quot;
                </p>
              </div>
            </div>

            <div className="proCopy">
              <p>
                I AM SO HAPPY SHE IS A PRO. And all this discourse about
                whether she deserves to become one already needs to stop. It is
                not 2013. You do not need to spend two-plus years on troupe
                before becoming a pro. This girl is insane. I still
                occasionally go back and watch her Dracula solo from when she
                was on the competition circuit.
              </p>

              <p>
                As much as I love America&apos;s sweetheart Rylee Arnold,
                Hailey has a completely different vibe. She is young, cool,
                insanely well-rounded, and already understands social media and
                partnerships. My first idea was actually to make her an
                ambassador for a dance convention circuit, but no surprise, she
                already does that. I could also see her becoming a major
                choreographer in the college dance circuit. She recently did a
                dance with BYU, and yes, her mom is the head coach of the BYU
                dance team. No, I do not care.
              </p>

              <p>
                Instead, I want to go in a different direction with{" "}
                <strong>Daise</strong>. DWTS pros openly talk about the spray
                tans they get before every live show, so I want Daise&apos;s
                exfoliating products to own the getting-ready process with a{" "}
                <strong>Show Ready with Hailey</strong> campaign. Take us from
                rehearsal to exfoliating to spray tan to hair and makeup to
                costume to the live show.
              </p>

              <p>
                Daise has the cool branding and younger vibe that matches
                Hailey, and because she is still a new pro, I like starting
                with something digestible rather than immediately forcing her
                into some huge luxury campaign.
              </p>
            </div>
          </article>

          {/* ALAN */}

          <article className="proBlock">
            <div className="proTop">
              <p className="proNumber">04</p>

              <div className="proIdentity">
                <p className="proLabel">THE DOG DAD</p>
                <h2>Alan Bersten</h2>
              </div>
            </div>

            <div className="partnershipPitch">
              <div className="partnershipColumn">
                <p className="partnershipLabel">THE PARTNER</p>
                <p className="partnershipBrand">BarkBox</p>
              </div>

              <div className="partnershipColumn">
                <p className="partnershipLabel">THE ACTIVATION</p>
                <p className="partnershipTagline">
                  &quot;The Bark Mobile&quot;
                </p>
              </div>
            </div>

            <div className="proCopy">
              <p>
                What a kind man. He is just a sweetheart. Also, his dog is so
                funny looking and somehow so tiny, as if that dog froze in time
                immediately after being born. I mean that lovingly.
              </p>

              <p>
                I want Alan to do a collaboration with{" "}
                <strong>BarkBox</strong>, starting with a DWTS-themed box.
                Mirrorball toy, dance shoe, 10 paddle, tiny sequined
                accessories. There is so much material sitting right there.
              </p>

              <p>
                But then I want to make it more Alan by adding a charity
                component. Partner with local shelters and create a five-city
                California tour where Alan and BarkBox bring out a{" "}
                <strong>Bark Mobile</strong> for adoption events. BarkBox gives
                out toys, Alan makes appearances, and local shelters bring dogs
                looking for homes. He seems like such a genuinely nice person
                that the charity tie-in fits naturally. Also, please make the
                entire thing extremely small-dog friendly.
              </p>
            </div>
          </article>

          {/* BRITT */}

          <article className="proBlock">
            <div className="proTop">
              <p className="proNumber">05</p>

              <div className="proIdentity">
                <p className="proLabel">THE CALM</p>
                <h2>Britt Stewart</h2>
              </div>
            </div>

            <div className="partnershipPitch">
              <div className="partnershipColumn">
                <p className="partnershipLabel">THE PARTNER</p>
                <p className="partnershipBrand">Calm</p>
              </div>

              <div className="partnershipColumn">
                <p className="partnershipLabel">THE SERIES</p>
                <p className="partnershipTagline">
                  &quot;Calm in Motion&quot;
                </p>
              </div>
            </div>

            <div className="proCopy">
              <p>
                Bouncing right off Alan, we have another person who seems
                incapable of being mean. Yes, Britt has been robbed multiple
                times, but I think people sometimes overlook why she has become
                such an important part of DWTS. As much as she wants to win,
                she is also the glue of the pros. She is the tour captain and
                seems to have this calming presence that holds everyone
                together.
              </p>

              <p>
                Knowing how much Britt is into spirituality, mindfulness, and
                grounding, I could absolutely see a partnership with{" "}
                <strong>Calm</strong> built around a special breathing and
                movement series. <strong>Calm in Motion</strong> could combine
                breathing exercises, stretching, movement, and mindfulness for
                performers or anyone trying to decompress.
              </p>

              <p>
                I also really like the opportunity to make the campaign
                intentionally inclusive. With Britt&apos;s connection to the
                deaf community through her husband, I would love to see the
                experience incorporate strong visual cues, sign language,
                captions, or even vibrations through the phone. Instead of
                accessibility being something added afterward, make it part of
                how the experience is designed from the beginning.
              </p>
            </div>
          </article>

          {/* JAN */}

          <article className="proBlock">
            <div className="proTop">
              <p className="proNumber">06</p>

              <div className="proIdentity">
                <p className="proLabel">THE CONTENT MACHINE</p>
                <h2>Jan Ravnik</h2>
              </div>
            </div>

            <div className="partnershipPitch">
              <div className="partnershipColumn">
                <p className="partnershipLabel">THE PARTNER</p>
                <p className="partnershipBrand">GoPro</p>
              </div>

              <div className="partnershipColumn">
                <p className="partnershipLabel">THE CONTENT SERIES</p>
                <p className="partnershipTagline">
                  &quot;Jan&apos;s DTM Cam&quot;
                </p>
              </div>
            </div>

            <div className="proCopy">
              <p>
                Wait, I lowkey think Jan is underrated. Yes, he had a rough
                first season, but he was also coming directly from Taylor
                Swift&apos;s tour, where he was doing commercial dance, into a
                completely different style of partnering and choreography.
                Since then, he has proven himself over and over through some of
                the choreography and campaigns he has posted on social media.
              </p>

              <p>
                I don&apos;t think he is at massive GAP campaign level yet, but
                I could see something in that creative dance space with{" "}
                <strong>GoPro</strong>. First, have him choreograph and film an
                entire dance campaign using GoPro cameras. It takes a company
                people associate with mountains, surfing, skiing, and outdoor
                adventure and puts the product somewhere completely different:
                the ballroom.
              </p>

              <p>
                Then, build on the TikTok takeovers he has already done and give
                us <strong>Jan&apos;s DTM Cam</strong>, aka Dead to Me Cam.
                Strap a GoPro onto him backstage and let him run around showing
                rehearsals, camera blocking, costume fittings, the other pros,
                and all the chaos viewers never get to see before a live show.
                It markets the camera without the content ever having to feel
                like an ad.
              </p>
            </div>
          </article>

          {/* ADELE */}

          <article className="proBlock">
            <div className="proTop">
              <p className="proNumber">07</p>

              <div className="proIdentity">
                <p className="proLabel">THE NEW FACE</p>
                <h2>Adele Zaikman</h2>
              </div>
            </div>

            <div className="partnershipPitch">
              <div className="partnershipColumn">
                <p className="partnershipLabel">THE PARTNER</p>
                <p className="partnershipBrand">Duolingo</p>
              </div>

              <div className="partnershipColumn">
                <p className="partnershipLabel">THE CAMPAIGN</p>
                <p className="partnershipTagline">
                  &quot;Ballroom Is a Universal Language&quot;
                </p>
              </div>
            </div>

            <div className="proCopy">
              <p>
                The newest pro. Damn, can that girl dance. She is one of the
                most technically trained additions to the show in years. She is
                also SO new to the mainstream audience. She went from around
                60K to 110K followers basically overnight after the
                announcement. While she is known in the ballroom circuit, most
                DWTS viewers are still getting introduced to her.
              </p>

              <p>
                I am so excited to watch her because she has that look in her
                eyes when she dances that reminds me of Peta and Karina. She
                brings that strict European energy, and honestly, I want some of
                that intensity back from the dancers and pros.
              </p>

              <p>
                For her first campaign, walk with me here:{" "}
                <strong>Duolingo</strong>. She speaks three languages, and
                Duolingo is so aggressively on the nose with everything
                happening in pop culture that it feels perfect. I would create
                a short-form series with Adele and her partner where she
                teaches him ballroom terminology and phrases in different
                languages. Bring Duo into rehearsal. Let the owl judge his
                pronunciation. Make him finish a lesson before rehearsal ends.{" "}
                <strong>Ballroom Is a Universal Language.</strong>
              </p>

              <p>
                I also think there is a huge future beauty opportunity for her
                because of that intensity in her eyes. Give her a sharp, quick
                dance performance for a luxury but still accessible brand like
                Lancôme centered around mascara. And yes, I know everyone is
                already making Rolls-Royce jokes, and maybe a few years from now
                she gets some ridiculous luxury car collaboration. But she is
                so new to mainstream audiences and social media that I would
                start with smaller, more digestible campaigns. I also want her
                teaching at one of the major dance convention circuits
                eventually.
              </p>
            </div>
          </article>

          {/* PASHA */}

          <article className="proBlock">
            <div className="proTop">
              <p className="proNumber">08</p>

              <div className="proIdentity">
                <p className="proLabel">THE UNDERDOG</p>
                <h2>Pasha Pashkov</h2>
              </div>
            </div>

            <div className="partnershipPitch">
              <div className="partnershipColumn">
                <p className="partnershipLabel">THE PARTNER</p>
                <p className="partnershipBrand">Saint James Iced Tea</p>
              </div>

              <div className="partnershipColumn">
                <p className="partnershipLabel">THE CAMPAIGN</p>
                <p className="partnershipTagline">
                  &quot;Always Cool in the Ballroom&quot;
                </p>
              </div>
            </div>

            <div className="proCopy">
              <p>
                Wait, underdog for sure. I have never seen someone dance for
                their life quite like Pasha did during his freestyle with
                Ariana Madix a few seasons ago while supplementing for
                Ariana&apos;s ankle injury during the finale. He is so calm but
                somehow still has a major presence.
              </p>

              <p>
                A lot of the fan base naturally ties him to Daniella because
                they are married, so I specifically wanted to find something
                that could help build Pasha&apos;s identity outside of Dani.
              </p>

              <p>
                My main partnership is <strong>Saint James Iced Tea</strong>,
                with the campaign line{" "}
                <strong>Always Cool in the Ballroom</strong>. The ad follows
                Pasha through a day in his impossibly composed life. He is
                gliding through a routine without breaking a sweat, patiently
                walking a stressed celebrity through choreography, wrangling
                his daughter Nikita at home, sharing an easy moment with
                Daniella in the kitchen, then traveling between tour stops.
                Everyone around him can be losing their minds, and Pasha has
                the exact same steady energy in every frame. End with him
                sipping a Saint James over ice. It fits him without requiring
                him to become some completely different personality for the
                campaign.
              </p>
            </div>

            <div className="bonusPartnership">
              <p className="bonusLabel">BONUS PARTNERSHIP</p>
              <h3>
                U.S. Figure Skating: &quot;Trading the Ballroom for the
                Ice&quot;
              </h3>
              <p>
                Considering his partner this season, I also really want a U.S.
                Figure Skating video where Pasha &quot;trades the ballroom for
                the ice&quot; and attempts some of his partner&apos;s tricks or
                routine while teaching her some ballroom in return. It would
                bring out a fun side of him and let viewers see more of his
                personality.
              </p>
            </div>
          </article>

          {/* RYLEE */}

          <article className="proBlock">
            <div className="proTop">
              <p className="proNumber">09</p>

              <div className="proIdentity">
                <p className="proLabel">THE AUNT</p>
                <h2>Rylee Arnold</h2>
              </div>
            </div>

            <div className="partnershipPitch">
              <div className="partnershipColumn">
                <p className="partnershipLabel">THE PARTNER</p>
                <p className="partnershipBrand">Outshine</p>
              </div>

              <div className="partnershipColumn">
                <p className="partnershipLabel">THE CAMPAIGN</p>
                <p className="partnershipTagline">
                  &quot;No Rules, Just Popsicles&quot;
                </p>
              </div>
            </div>

            <div className="proCopy">
              <p>
                I mean, this girl has already done SO many campaigns and
                product lines that she might be the hardest person on this
                list. She is truly everyone&apos;s sweetheart and has been
                around for a long time, even back when her sisters were making
                Arnold Sisters videos on YouTube. She has also done so much for
                the diabetes community and has already touched so many of the
                obvious beauty, fashion, and lifestyle categories that almost
                everything I initially thought of had already been done.
              </p>

              <p>
                But then I remembered a role we constantly see through her
                sisters&apos; content: <strong>Rylee is the aunt.</strong> She
                has seven nieces and nephews, they all love her, and I want{" "}
                <strong>Outshine</strong> to build an entire campaign around
                Rylee being the designated &quot;popsicles over vegetables&quot;
                aunt.
              </p>

              <p>
                The campaign starts with Rylee handing a kid a popsicle for
                dinner because they refused everything else, then turns into a
                highlight reel of aunt chaos across all three sisters&apos;
                families. Bribing a cranky nephew with a popsicle, sneaking one
                to someone during a boring family dinner, and Rylee grabbing
                one for herself. Her sisters are trying to enforce rules while
                Aunt Rylee is doing absolutely none of that.
              </p>

              <p>
                <strong>
                  Rylee Arnold&apos;s Auntie Philosophy: No Rules, Just
                  Popsicles.
                </strong>
              </p>

              <p>She&apos;s not even a mom. She&apos;s just built different.</p>
            </div>
          </article>

          {/* BRANDON */}

          <article className="proBlock">
            <div className="proTop">
              <p className="proNumber">10</p>

              <div className="proIdentity">
                <p className="proLabel">THE STORY</p>
                <h2>Brandon Armstrong</h2>
              </div>
            </div>

            <div className="partnershipPitch">
              <div className="partnershipColumn">
                <p className="partnershipLabel">THE PARTNER</p>
                <p className="partnershipBrand">Bevel</p>
              </div>

              <div className="partnershipColumn">
                <p className="partnershipLabel">THE CAMPAIGN</p>
                <p className="partnershipTagline">
                  &quot;Learning My Hair&quot;
                </p>
              </div>
            </div>

            <div className="proCopy">
              <p>
                Maybe my current favorite male pro. I truly love all of his
                wife&apos;s content, and I have loved seeing more and more of
                Brandon&apos;s personality come out over the last few years.
                Also, they HAVE to do a Ciara song this season. Better yet, get
                Ciara in the ballroom.
              </p>

              <p>
                Brandon was one of the hardest people to narrow down because I
                had so many ideas. He and his wife have been making tons of
                travel content, so I could see a luggage partnership in their
                future. I would love to send them on a brand trip to Japan. I
                also genuinely want them on the next Tarte trip because dancers
                on a ridiculous luxury creator trip would be incredible
                content.
              </p>

              <p>
                I even thought about a multi-video sponsorship with Clorox or a
                paper towel brand around the TikToks Brandon and Brylee make
                throughout the season recreating that week&apos;s popular dance
                moments. Sponsor the cleanup after they destroy their living
                room learning the choreography.
              </p>

              <p>
                But for something specifically about <strong>Brandon</strong>,
                my pick is <strong>Bevel</strong>. We started seeing more of
                this side of him with Chandler when he began embracing his
                natural hair. He has been open about being adopted and not
                always knowing how to properly care for his hair growing up,
                and that gives the partnership an actual story.
              </p>

              <p>
                I would create a short Bevel campaign around Brandon learning
                more about how to take care of his natural hair, figuring out
                which routines and products work for him, and talking about how
                his relationship with his hair has changed as he has gotten
                older. It doesn&apos;t need to be some dramatic makeover. The
                interesting part is watching him learn and embrace something
                that is already part of him.
              </p>

              <p>
                It also gives Brandon an identity completely separate from his
                celebrity partner, his wife, or the other pros.
              </p>
            </div>
          </article>
        </section>

        <section className="playbookTakeaway">
          <p className="takeawayLabel">THE PARTNERSHIP PLAYBOOK</p>

          <h2>The brand has to belong in the story.</h2>

          <div className="takeawayCopy">
            <p>
              Ten pros down, six to go. And the biggest thing I realized while
              doing this is that sponsorship matchmaking cannot just be
              &quot;this person has a lot of followers, so give them a brand
              deal.&quot; The partnership needs a reason to exist.
            </p>

            <p>
              Sharna gets a comeback. Mark gets something alternative. Hailey
              gets show-ready content. Alan gets dogs and charity. Britt gets
              mindfulness and accessibility. Jan gets a camera strapped to him.
              Adele gets to introduce herself through language and personality.
              Pasha gets to be impossibly calm. Rylee gets to be the chaotic
              aunt. Brandon gets to tell a story that is actually his.
            </p>

            <p className="takeawayStatement">
              The best partnerships don&apos;t create a new personality for the
              talent. They find a creative way for a brand to enter the story
              that is already there.
            </p>
          </div>

          <div className="nextPart">
            <span>THE DWTS PLAYBOOK</span>
            <span>Part 2 next week.</span>
          </div>
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