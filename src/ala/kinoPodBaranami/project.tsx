import { AlaHeader } from "../../shared/header/alaHeader";
import { Footer } from "../../shared/footer/footer";
import { Banner } from "../../shared/project/banner/baner";
import { SideNav } from "../../shared/project/sideNav/sideNav";
import { Ending } from "../../shared/project/ending/ending";

export const kinoPodBaranami = (
  <>
    <AlaHeader />
    <Banner src="/assets/CinemaRevamp/banner.webp" />
    <SideNav
      links={[
        { url: "#section1", title: "Overview" },
        { url: "#section2", title: "Feedback" },
        { url: "#section3", title: "Problem" },
        { url: "#section4", title: "Solution" },
        { url: "#section5", title: "Process" },
        { url: "#section6", title: "Research" },
        { url: "#section7", title: "User Interviews" },
        { url: "#section8", title: "Lo-Fi Wireframes" },
        { url: "#section9", title: "Style Guide" },
        { url: "#section10", title: "Final Design" },
        { url: "#section11", title: "Reflections" },
      ]}></SideNav>

    <div class="content">
      <section id="section1">
        <h1>Cinema Website Revamp</h1>
        <div class="app">
          <div>
            <h5>Tools</h5>
            <ul class="tools-list">
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>FlowMapp</li>
            </ul>
          </div>

          <div>
            <h5>About Project</h5>
            <p>
              In my User Interface Design course, I had the opportunity to revamp a cultural website that, in our
              opinion, suffered from poor design. My choice was the renowned Cracow cinema,
              <a href="https://www.kinoPodBaranami.pl/" target="_blank" class="links">
                Kino pod Baranami🡕
              </a>
              , known for its cluttered and impossible-to-use website.
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section id="section2" class="noteboxes">
        <h5>Professor's Feedback</h5>
        <a
          href="https://www.linkedin.com/in/antonina-jasi%C5%84ska-520a6a131/?originalSubdomain=pl"
          target="_blank"
          class="links">
          <h2>Antonina Jasińska🡕</h2>
        </a>
        <p>
          <i>
            Your presentation at the review was <span class="underline-green"> the best</span>, you managed to interest
            the entire group and <span class="underline-green">keep their attention </span>- this is a valuable skill. I
            really wanted to praise you for this project, both for the
            <span class="underline-green"> entire analytical process and the design approach itself</span>. Ultimately,
            more views were created than required, which is definitely a big plus. I am especially glad that you have
            refined the purchasing process so much and that despite everything you managed to maintain such consistent
            asceticism in formal solutions throughout the website. Thanks to this,
            <span class="underline-green"> the design is fresh, clean and very legible/functional.</span>
          </i>
        </p>
      </section>
      <hr />
      <section id="section3">
        <h5>Problem</h5>
        <h2>Potential customers struggle to find events and film viewings at art-house cinema</h2>
        <p>
          The website of "Kino pod Baranami" is <strong> notorious for its user-unfriendliness</strong>, yet the cinema
          itself boasts a rich tradition that resonates with people who yearn for the unique experience of screenings
          and discussions at this iconic venue. However, faced with escalating taxes and
          <strong>heightened competition in the screening industry</strong>, potential patrons often find themselves
          frustrated and disheartened, navigating a cumbersome website that
          <strong> leads them to abandon their purchases</strong> before reaching completion.
        </p>
      </section>
      <hr />
      <section id="section4">
        <h5>Solution</h5>
        <h2>Crafting clear, easy to read and popular design by taking inspiration from the e-commerce websites</h2>

        <div class="desktop">
          <div class="info">
            <h2>Enhanced navigation with a clear hierarchy</h2>
            <p>👉 Reorganizing previously chaotic and duplicated content into well-defined headers and footers</p>
            <p>
              👉 Concealing less critical information in the footer to streamline both the website and user experience
            </p>
          </div>
          <div class="view left">
            <img src="/assets/CinemaRevamp/Revamp5.webp" />
          </div>
        </div>

        <div class="desktop">
          <div class="info">
            <h2>Main Page makeover</h2>
            <p>
              👉 Adopting an e-commerce approach by featuring current hot films, events, and customer promotions in a
              prominent banner at the top of the page.
            </p>
            <p>
              👉 Simplifying the content presentation by eliminating the now playing, announcements, and events
              categorization. Instead, showcasing only the newest videos with relevant tags and detailed information
              about each video.
            </p>
          </div>
          <div class="view">
            <img src="/assets/CinemaRevamp/Revamp1.webp" />
          </div>
        </div>

        <div class="desktop">
          <div class="info">
            <h2>Exclusive benefits for loyal patrons</h2>
            <p>👉 Effortless management of discounts and club memberships </p>
            <p>👉 Personalized movie suggestions tailored just for patron</p>
            <p>
              👉 Access to comprehensive history of watched videos alongside with convenient option to leave reviews and
              share thoughts
            </p>
            <p>👉 Easy retrieval of purchased tickets for hassle-free cinema experiences</p>
          </div>
          <div class="view  left">
            <img src="/assets/CinemaRevamp/Revamp3.webp" />
          </div>
        </div>

        <div class="desktop">
          <div class="info">
            <h2>Seamless ticketing experience</h2>
            <p>👉 A dedicated ticket purchasing page seamlessly integrated with the overall website aesthetics</p>
            <p>👉 Effortless access to download tickets, showcasing them conveniently through QR codes</p>
            <p>
              👉 Introduction of a previously absent feature: the option to purchase group tickets for a more inclusive
              cinema experience
            </p>
          </div>
          <div class="view">
            <img src="/assets/CinemaRevamp/tickets.webp" />
          </div>
        </div>
      </section>
      <hr />
      <section id="section5">
        <h5>Process</h5>
        <p>
          The process involved <strong> extensive research</strong> about competition, patrons preferences, history of
          the Kino pod Baranami cinema, page analysis, testing with potential users and
          <strong> many, many iterations</strong>. The process was not linear - it involved lots of going back and forth
          towards the goal.
        </p>
        <div class="process">
          <div class="process-box">
            <h2>Research</h2>
          </div>
          <img class="process-arrow" src="/assets/ArrowProcess.svg" />
          <div class="process-box">
            <h2>Wireframing</h2>
          </div>
          <img class="process-arrow" src="/assets/ArrowProcess.svg" />
          <div class="process-box">
            <h2>Prototype</h2>
          </div>
          <img class="process-arrow" src="/assets/ArrowProcess.svg" />
          <div class="process-box">
            <h2>Testing</h2>
          </div>
          <img class="process-arrow" src="/assets/ArrowProcess.svg" />
          <div class="process-box">
            <h2>Final Design</h2>
          </div>
        </div>
      </section>
      <hr />
      <section id="section6">
        <h5>Research</h5>
        <h2>Website Analysis</h2>
        <p>👉 Difficult to understand, chaotic, three-level navigation with enormous amount of hidden sections</p>
        <p>
          👉 Overwhelming home page where it is difficult to find information about current films and events taking
          place in the cinema
        </p>
        <p>
          👉 Navigating the ticket purchase flow is unnecessarily complicated, requiring almost six steps before
          reaching the actual purchasing site.
        </p>
        <p>
          👉 The cinema is proud of the long history of its discussion club and cordially invites you to participate in
          activities, however, it does not offer a place for a club member or permanent patron on the website
        </p>
        <div class="patterns">
          <img src="/assets/CinemaRevamp/KPB1.webp" />
          <img src="/assets/CinemaRevamp/KPB2.webp" />
          <img src="/assets/CinemaRevamp/KPB3.webp" />
        </div>
      </section>

      <hr />
      <section id="section7">
        <h2>User Interviews & Testing</h2>
        <div class="desktop">
          <div class="info">
            <p>
              I conducted user interviews and tests with two experienced patrons and two new customers, using the
              attached script. The key takeaway is that <strong> even experienced users struggled with tasks</strong>,
              with some taking over 2 minutes before completing a purchase. For new users unfamiliar with navigating the
              website, <strong>almost none were able to finish the presented tasks.</strong>
            </p>
            <a
              href="https://docs.google.com/document/d/1p7fjNcEOCDW7IcnFu4JUVSBhFjA_yK5TFlBX-dUluG8/edit"
              target="_blank"
              class="links">
              <p>👉 The Interview Script and Results 👈</p>
            </a>
          </div>
          <div class="view">
            <img src="" alt="sorry for placeholder" />
          </div>
        </div>
      </section>
      <hr />
      <section id="section8">
        <h5>Lo-Fi Wireframing</h5>
        <img src="" alt="sorry for placeholder" />
      </section>
      <hr />
      <section id="section9" class="style-guide">
        <h5>Style Guide</h5>
        <img src="/assets/CinemaRevamp/StyleGuide.webp" />
        <img src="/assets/CinemaRevamp/StyleGuide2.webp" />
      </section>
      <hr />
      <section id="section10">
        <h5>Final Design & Evaluation</h5>
        <h2>
          “I love it! It would make my life so much better! You should talk to the Kino pod Baranami about this
          project!” -
          <a href="https://www.instagram.com/aleksandra__drab/" target="_blank" class="links">
            Aleksandra Drab🡕
          </a>
          <i> regular patron </i>
        </h2>
        <a href="https://www.figma.com/community/file/1247159387747902249/cinema-redesign">
          <h2> 👉 You can check my Figma File here 👈</h2>
        </a>
        <video controls class="full-video">
          <source src="/assets/CinemaRevamp/Free Macbook Pro On Table Mockup-1.m4v" type="video/mp4" />
        </video>
      </section>
      <hr />
      <section id="section11">
        <h5>Reflections</h5>
        <h2>My main three insights:</h2>

        <div class="noteboxes">
          <h2>Transformation through user-centric design</h2>
          <p>
            The redesign of Kino pod Baranami's website prioritized user-centric design, alleviating frustrations for
            both experienced patrons and newcomers. The resulting clear hierarchy and personalized features signify a
            transformative shift beyond aesthetics, catering to the diverse needs of the cinema's audience.
          </p>
        </div>
        <div class="noteboxes">
          <h2>Seamless integration of functionality and aesthetics</h2>
          <p>
            Success is found in the seamless integration of functionality and aesthetics, where the revamped main page
            not only enhances visual appeal but also streamlines the user journey. Consistency in design, from ticket
            purchasing to exclusive benefits, contributes to a visually pleasing and highly functional website.
          </p>
        </div>
        <div class="noteboxes">
          <h2>User Feedback as catalyst for change</h2>
          <p>
            User insights, gleaned from interviews and testing, spurred meaningful improvements, addressing patron
            frustrations and challenges for new users. The positive response from a regular patron validates the
            project's potential to create a more engaging and user-friendly online environment for Kino pod Baranami.
          </p>
        </div>
      </section>
    </div>
    <Ending />
    <Footer topId="#section1" />
  </>
);
