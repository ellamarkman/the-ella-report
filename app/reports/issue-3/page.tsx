import Link from "next/link";
import IssueInteractions from "./IssueInteractions";
import "./issue.css";

export default function IssueThreePage() {
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
            <span>ISSUE #03</span>
            <span>PERSONAL ESSAY</span>
          </div>

          <h1>The Art of Post-Grad</h1>

          <p className="issueDek">
            Graduation is supposed to be the finish line, but no one really
            talks about what comes next. Two months into post-grad life, I am
            learning how to slow down, start over, and be okay without having
            everything figured out.
          </p>

          <div className="issueByline">
            <span>By Ella Markman</span>
            <span>Published July 27, 2026</span>
            <span>6 min read</span>
          </div>
        </header>

        <div className="issueBody">
          <p className="issueOpening">
            I am 21 years old, and I have absolutely no idea what I want to do
            with my life!
          </p>

          <p>
            I officially graduated two months ago, and honestly, I&apos;ve been
            feeling this weird void. Surprisingly, it isn&apos;t because of the
            job search. It&apos;s more the feeling of becoming an adult. Going
            from being in school for 21 years to suddenly having to figure out
            how to fill your days is such a strange transition. I always said
            that while college is supposed to be about getting an education,
            it&apos;s really the time when you become the truest version of
            yourself and start figuring out who you are as an adult.
          </p>

          <p>
            For most of May, I treated life like a vacation before going all in
            on the job search. I celebrated my brother&apos;s graduation, spent
            time at home, and tried to enjoy having nothing on my calendar for
            once. My parents also moved to California a week after I graduated
            high school, which meant I suddenly didn&apos;t know anyone here.
            Most of that is probably on me because I wouldn&apos;t say I&apos;ve
            made a huge effort to meet people yet, but it has forced me to spend
            a lot more time with myself and figure out what actually gets me out
            of bed every morning.
          </p>

          <p>
            Last month, I started working part-time at a coffee shop, and
            honestly, it&apos;s been the best of both worlds. First, I get three
            free drinks every shift. Second, I get to interact with people my
            age again. Also, whoever designed coffee shop checkout screens, I
            just want to have a quick chat.
          </p>

          <p>
            One of the biggest things I&apos;ve learned so far has been how to
            introduce myself and make conversation again. Up until two months
            ago, it was easy. I&apos;d just ask, &quot;Where do you go to
            school?&quot; or &quot;What&apos;s your major?&quot; But once
            you&apos;re out of that college bubble, most people either
            didn&apos;t go to college or aren&apos;t currently in school.
          </p>

          <p>
            So what did I do? Honestly, I stayed pretty quiet during my first
            few shifts and just listened to what everyone else talked about. As
            we all know, I&apos;m chronically online, so by my third shift, I
            was able to jump right into conversations. Naturally, those
            conversations ended up being about the World Cup and Love Island,
            which leads perfectly into the other issues this week.
          </p>

          <p>
            Okay, I&apos;m going to get real for about two seconds. I promise,
            just two.
          </p>

          <p>
            <strong>Post-grad is weird.</strong>
          </p>

          <p>
            Even though I feel like I did everything people tell you to do in
            college, I still don&apos;t have a full-time job. I got involved.
            Heavily involved. I mean, I was basically working a 40-hour work
            week for Program Board while still being a full-time student. I had
            internships. I made amazing lifelong friends. Hi Jane &lt;3. But I
            didn&apos;t accomplish the one thing everyone always says college
            is supposed to do: get you a job.
          </p>

          <p>
            Now, I&apos;ve had interviews. I&apos;ve had some really great
            conversations with people. Nothing has landed yet, and honestly,
            I&apos;m okay with that. I could spend every day beating myself up
            over it, but instead, I&apos;m choosing to look at this as a
            much-needed break.
          </p>

          <p>
            Outside of a few random moments like COVID, moving the week after
            graduating high school, or getting a concussion, I&apos;ve had a
            consistently busy schedule since I was probably 15 years old.
            Whether it was school, sports, work, camp, or internships, I always
            had something to wake up for and something to look forward to.
          </p>

          <p>
            <strong>Now I have time.</strong>
          </p>

          <p>
            After two months, I&apos;ve finally settled into a routine. I wake
            up, network, apply to a few jobs, work my morning coffee shift a few
            days a week, go to the gym, make dinner, and repeat.
          </p>

          <p>
            I&apos;m also taking this time to figure out what I actually enjoy.
            What hobbies do I want? Where do I want to live? What industries do
            I actually want to work in? Coming out of college, most of my
            experience was in sports and music, but if I&apos;m being honest, I
            still don&apos;t completely know what I want to do, and I think
            that&apos;s okay.
          </p>

          <p>
            I want my twenties to be about trial and error. I want to say yes to
            opportunities and see where they lead. Who knows? Maybe I&apos;ll
            end up on the set of a music video. Maybe I&apos;ll keep building
            this website. Maybe somehow I&apos;ll end up working the 2028 Summer
            Olympics.
          </p>

          <p>
            The point is, I don&apos;t think everything has to be figured out
            yet. Yeah, it&apos;s frustrating not having a full-time job. But I
            also know there&apos;s a pretty good chance that six months from
            now, I&apos;ll be writing an issue called{" "}
            <em>The Art of Your First Post-Grad Job</em>.
          </p>

          <p>
            Maybe post-grad isn&apos;t about finding your career as fast as
            possible. Maybe it&apos;s about finding yourself outside of the
            structure you&apos;ve had your entire life.
          </p>

          <p>
            If you&apos;re feeling the same way, let me know. Whether you
            already have a job or you&apos;re still figuring things out, I think
            we spend so much time preparing to graduate that we forget what
            actually happens afterward. Post-grad is just as much of a life
            transition as starting college was in the first place.
          </p>
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