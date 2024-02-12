import { AlaHeader } from "../../shared/header/alaHeader";
import { Footer } from "../../shared/footer/footer";

export const UXWritingFlashcards = (
  <>
    <AlaHeader />
    <div class="banner">
      <img src="/assets/UXWritingFlashcards/banner.webp" alt="UX Writing Kit Mockup" id={"banner"} />
    </div>
    <nav className="sticky-nav">
      <ul>
        <li>
          <a href="#section1">Overview</a>
        </li>
        <li>
          <a href="#section2">Problem</a>
        </li>
        <li>
          <a href="#section3">Solution</a>
        </li>
        <li>
          <a href="#section4">Process</a>
        </li>
        <li>
          <a href="#section7">Final Design</a>
        </li>
        <li>
          <a href="#section8">Reflections</a>
        </li>
      </ul>
    </nav>

    <div class="content">
      <section id="section1">
        <h1>UX Writing Flashcards</h1>
        <div class="paragraph app">
          <div>
            <h5>Tools</h5>
            <ul class="tools-list">
              <li>Adobe Photoshop</li>
              <li>Adobe InDesign </li>
              <li>Procreate</li>
            </ul>
          </div>

          <div>
            <h5>About Project</h5>
            <p>
              This project centers around the concept of creating a{" "}
              <span class="bold">series of flash cards to explain UX writing</span>, emphasizing principles centered on{" "}
              <span class="bold">reader usefulness</span>. The graphic theme takes inspiration from ink traces left by a
              brush, and orange lines visually represent the ideas on the cards. The project was completed in{" "}
              <span class="bold">under a week.</span>
            </p>
          </div>
        </div>
        <hr id="section2" />
      </section>
      <div className="paragraph">
        <h5>Problem</h5>
        <h2>Limiting yourself to one specialization carries the risk of making poor design decisions.</h2>
        <p>
          The choice of UX writing arose from the need to address the challenge of educating design students and Junior
          UX designers effectively about the concept. The project aims to{" "}
          <span class="bold">make learning enjoyable and engaging</span> through a visually appealing and informative
          approach.
        </p>
        <hr id="section3" />
      </div>
      <div className="paragraph">
        <h5>Solution</h5>
        <h2>Fun, bold and modern educational materials that are engaging and easy to understand. </h2>

        <div class="phone">
          <div class="info-to-mobile">
            <h2>Visually Engaging Design</h2>
            <p>
              Using ink traces and bold orange lines, the design captures attention and enhances the learning
              experience, making it both <span class="bold">visually stimulating and memorable.</span>{" "}
            </p>
          </div>
          <div className="mobile-view ">
            <img src="/assets/UXWritingFlashcards/mockup.webp" />
          </div>
        </div>

        <div class="phone">
          <div className="info-to-mobile2">
            <h2>Reader-Centric Approach</h2>
            <p>
              The project emphasizes UX writing principles centered on reader usefulness, ensuring that the information
              is presented in a <span class="bold">clear and user-friendly manner.</span>
            </p>
          </div>
          <div className="mobile-view">
            <img src="/assets/UXWritingFlashcards/3cards.webp" />
          </div>
        </div>

        <div class="phone">
          <div class="info-to-mobile">
            <h2>Fun and Bold Learning</h2>
            <p>
              The project's main strength lies in its approach to making the learning process enjoyable for junior UX
              designers, employing <span class="bold"> a fun and bold design </span>that facilitates concept
              comprehension.{" "}
            </p>
          </div>
          <div class="mobile-view ">
            <img src="/assets/UXWritingFlashcards/wholepack.webp" />
          </div>
        </div>
        <hr id="section4" />
      </div>

      <div>
        <h5>Process</h5>

        <div class="paragraph process">
          <div className="process-box">
            <h2>Research</h2>
            <p>
              {" "}
              I extensively delved into UX writing concepts, systematically{" "}
              <span class="bold">categorizing them into 9 rules</span>.{" "}
            </p>
          </div>
          <img className="process-arrow" src="/assets/ArrowProcess.svg" />
          <div className="process-box">
            <h2>Moodboard</h2>
            <p>
              The subsequent step entailed crafting a precise mood board and{" "}
              <span class="bold">identifying prevailing trends </span>that were popular during that period.
            </p>
          </div>
          <img className="process-arrow" src="/assets/ArrowProcess.svg" />
          <div className="process-box">
            <h2>Ideation&Design</h2>
            <p>
              The final stage focused on <span class="bold">translating each concept </span> into engaging flash card
              visuals, ensuring they were both lively and easily understandable, striking a balance between clarity and
              creativity.
            </p>
          </div>
        </div>
      </div>
      <hr id="section7" />

      <div>
        <h5>Final Design </h5>
        <h2>"Visually appealing series of flash cards with intelligent intermingling of concept and illustration."</h2>
        <p>
          The culmination of the project is a visually engaging series of flash cards, each representing a UX writing
          concept. Inspired by ink traces and featuring bold orange lines, the design not only conveys information
          effectively but also adds an element of enjoyment to the learning process for junior UX designers.{" "}
        </p>
        <img src="/assets/UXWritingFlashcards/UXkit_final.webp" />
      </div>
      <hr id="section8" />

      <div className="paragraph">
        <h5>Reflections</h5>
        <h2>What I learned</h2>

        <p>
          In the journey of creating a project focused on UX writing and design education, three key reflections
          emerged, shaping my understanding and approach to effective communication, integration of design elements, and
          the pivotal role of empathy in educating aspiring designers.
        </p>

        <div className="noteboxes">
          <h2>Effective communication of complex concepts</h2>
          <p>
            I learned to communicate complex UX writing concepts effectively to fellow designers, employing visually
            appealing flash cards and reader-centered principles for accessibility.
          </p>
        </div>
        <div className="noteboxes">
          <h2>Lasting Impact</h2>
          <p>
            Even after some time since completing this project, the concepts depicted on the flash cards remain vivid in
            my memory. While I may not recall them verbatim, I can intuitively implement these principles when engaged
            in the design process.
          </p>
        </div>
        <div className="noteboxes">
          <h2>Empathy in design education</h2>
          <p>
            Focusing on UX writing addressed the challenge of educating junior UX designers empathetically, prioritizing
            an enjoyable and bold design approach that considers the emotional and motivational aspects of learners.
          </p>
        </div>
      </div>
    </div>
    <div class="ending">
      <a href="/ala">
        <h2> 👉 Check out my other projects 👈</h2>
      </a>
    </div>
    <Footer />
  </>
);
