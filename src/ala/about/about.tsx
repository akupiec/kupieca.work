import { AlaHeader } from "../../shared/header/alaHeader";
import { Footer } from "../../shared/footer/footer";

export const AlaAbout = (
  <>
    <AlaHeader />
    <div class="introduction">
      <div>
        <h2>Get to know me 👋</h2>
        <p>
          I'm diving headfirst into the world of design with a{" "}
          <span className="underline-green"> burning passion </span> for making things awesome and sustainable. Right
          now, I'm in the final stretch of my{" "}
          <a href="https://iszd.uken.krakow.pl/kandydat/o-kierunku/" className="links">
            master's degree
          </a>
          , not just learning the ropes but creating designs that really click with users and help the planet.
        </p>

        <p>
          I had this amazing moment at the
          <a href="https://kms.org.pl/akademicki-maraton-innowacji/" className="links">
            {" "}
            KMS hackathon{" "}
          </a>{" "}
          where my team won by coming up with a great idea, designing it, and nailing the presentation. Now, being
          invited to an <span className="underline-green">accelerator program </span> is like the high point in my
          story!
        </p>

        <p>
          So picture this: I'm your go-to for understanding users, designing cool stuff, and making it easy to use.
          Beyond design, <span className="underline-green"> I help to code </span> this website, blending tech and
          business for fresh problem-solving.
        </p>

        <p>
          While all this is happening, I'm honing my skills through
          <a href="https://www.dareit.io/mentoring" className="links">
            {" "}
            DareIT mentorship{" "}
          </a>
          program, where I was one of the 120 mentees picked from almost 1,000 applicants!
        </p>

        <p>
          But it's not just about me; I love sharing what I know and hope to be a mentor and a
          <span className="underline-green"> leader of change </span> in the future.
        </p>

        <p>
          Let's team up on this exciting journey where creativity meets sustainability, and together, let's make a
          positive impact!
        </p>
      </div>
      <img src="/assets/AboutMe Photo.webp" alt="Girl with dog" />
    </div>

    <div class="hobbies">
      <h2>Aside from work and activism I also love...</h2>

      <div>
        <h2>🦁 Dog training</h2>
        <p>
          My Akita Inu keeps me on my toes! We tackle agility, nosework, and utility tracking. Through this, she's not
          just my pet but a patient teacher, constantly reminding me of the importance of awareness and humility.
        </p>
      </div>
      <div>
        <h2>🎨 Creative Pursuits</h2>
        <p>
          I love book design, oil painting, sculpting, ceramics, linocut, and analog photography. These diverse mediums
          let me express my inner artist and hone my eyes for different aesthetics.
        </p>
      </div>
      <div>
        <h2>🏂 Snowboarding</h2>
        <p>
          I love testing my courage. Last season, I finally dared to try jumping, and this season, I'm all in for the
          butter style. Each year, I seek personal growth and thrilling experiences on the slopes.
        </p>
      </div>
      <div>
        <h2>📚 Reading</h2>
        <p>
          I lose myself in webtoons, mangas, and light novels, especially in action, slice of life, and fantasy genres.
          Trying to imagine what lies beyond reality helps me craft creative solutions to modern problems!
        </p>
      </div>
    </div>

    <div class="links">
      <p>
        <a
          href="https://flannel-oak-92a.notion.site/31fc33a62b3b4498b18d521ed8b0dd31?v=f69416363b454e1484ca800e30d35163"
          target="_blank">
          🎁 Check out some things I prepared for you!
        </a>
      </p>
      <p>
        <a href="https://drive.google.com/file/d/1vToec35rKokTknOxQ0EFVRG6l3m_vzdt/view?usp=sharing" target="_blank">
          💼 My really serious PDF
        </a>
      </p>
    </div>
    <Footer />
  </>
);
