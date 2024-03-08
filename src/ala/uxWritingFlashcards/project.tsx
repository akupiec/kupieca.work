import { AlaHeader } from "../../shared/header/alaHeader";
import { Footer } from "../../shared/footer/footer";
import { Banner } from "../../shared/project/banner/baner";
import { Process, ProcessElement } from "../../shared/project/process/process";
import { SideNav } from "../../shared/project/sideNav/sideNav";
import { Ending } from "../../shared/project/ending/ending";

export const uxWritingFlashcards = (
  <>
    <AlaHeader />
    <Banner src="/assets/uxWritingFlashcards/banner.webp" />
    <SideNav
      links={[
        { url: "#section1", title: "Overview" },
        { url: "#section2", title: "Problem" },
        { url: "#section3", title: "Solution" },
        { url: "#section4", title: "Process" },
        { url: "#section7", title: "Final Design" },
        { url: "#section8", title: "Reflections" },
      ]}></SideNav>

    <div class="content">
      <section id="section1">
        <h1>UX Writing Flashcards</h1>
        <div class="app">
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
              This project centers around the concept of creating a
              <strong>series of flash cards to explain UX writing</strong>, emphasizing principles centered on
              <strong>reader usefulness</strong>. The graphic theme takes inspiration from ink traces left by a brush,
              and orange lines visually represent the ideas on the cards. The project was completed in
              <strong>under a week.</strong>
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section id="section2">
        <h5>Problem</h5>
        <h2>Limiting yourself to one specialization carries the risk of making poor design decisions.</h2>
        <p>
          The choice of UX writing arose from the need to address the challenge of educating design students and Junior
          UX designers effectively about the concept. The project aims to
          <strong>make learning enjoyable and engaging</strong> through a visually appealing and informative approach.
        </p>
      </section>
      <hr />
      <section id="section3">
        <h5>Solution</h5>
        <h2>Fun, bold and modern educational materials that are engaging and easy to understand. </h2>

        <div class="desktop">
          <div class="info">
            <h2>Visually Engaging Design</h2>
            <p>
              Using ink traces and bold orange lines, the design captures attention and enhances the learning
              experience, making it both <strong>visually stimulating and memorable.</strong>
            </p>
          </div>
          <div class="view left">
            <img src="/assets/uxWritingFlashcards/mockup.webp" />
          </div>
        </div>

        <div class="desktop">
          <div class="info">
            <h2>Reader-Centric Approach</h2>
            <p>
              The project emphasizes UX writing principles centered on reader usefulness, ensuring that the information
              is presented in a <strong>clear and user-friendly manner.</strong>
            </p>
          </div>
          <div class="view">
            <img src="/assets/uxWritingFlashcards/3cards.webp" />
          </div>
        </div>

        <div class="desktop">
          <div class="info">
            <h2>Fun and Bold Learning</h2>
            <p>
              The project's main strength lies in its approach to making the learning process enjoyable for junior UX
              designers, employing <strong> a fun and bold design </strong>that facilitates concept comprehension.
            </p>
          </div>
          <div class="view left">
            <img src="/assets/uxWritingFlashcards/wholepack.webp" />
          </div>
        </div>
      </section>
      <hr />
      <section id="section4">
        <h5>Process</h5>
        <Process>
          <ProcessElement title="Research">
            <p>
              I extensively delved into UX writing concepts, systematically
              <strong>categorizing them into 9 rules</strong>.
            </p>
          </ProcessElement>
          <ProcessElement title="Moodboard">
            <p>
              The subsequent step entailed crafting a precise mood board and
              <strong>identifying prevailing trends </strong>that were popular during that period.
            </p>
          </ProcessElement>
          <ProcessElement title="Ideation&Design">
            <p>
              The final stage focused on <strong>translating each concept </strong> into engaging flash card visuals,
              ensuring they were both lively and easily understandable, striking a balance between clarity and
              creativity.
            </p>
          </ProcessElement>
        </Process>
      </section>
      <hr />
      <section id="section7">
        <h5>Final Design </h5>
        <h2>"Visually appealing series of flash cards with intelligent intermingling of concept and illustration."</h2>
        <p>
          The culmination of the project is a visually engaging series of flash cards, each representing a UX writing
          concept. Inspired by ink traces and featuring bold orange lines, the design not only conveys information
          effectively but also adds an element of enjoyment to the learning process for junior UX designers.
        </p>
        <img src="/assets/uxWritingFlashcards/uxkitFinal.webp" />
      </section>
      <hr />
      <section id="section8">
        <h5>Reflections</h5>
        <h2>What I learned</h2>

        <p>
          In the journey of creating a project focused on UX writing and design education, three key reflections
          emerged, shaping my understanding and approach to effective communication, integration of design elements, and
          the pivotal role of empathy in educating aspiring designers.
        </p>

        <div class="noteboxes">
          <h2>Effective communication of complex concepts</h2>
          <p>
            I learned to communicate complex UX writing concepts effectively to fellow designers, employing visually
            appealing flash cards and reader-centered principles for accessibility.
          </p>
        </div>
        <div class="noteboxes">
          <h2>Lasting Impact</h2>
          <p>
            Even after some time since completing this project, the concepts depicted on the flash cards remain vivid in
            my memory. While I may not recall them verbatim, I can intuitively implement these principles when engaged
            in the design process.
          </p>
        </div>
        <div class="noteboxes">
          <h2>Empathy in design education</h2>
          <p>
            Focusing on UX writing addressed the challenge of educating junior UX designers empathetically, prioritizing
            an enjoyable and bold design approach that considers the emotional and motivational aspects of learners.
          </p>
        </div>
      </section>
    </div>
    <Ending />
    <Footer topId="#section1" />
  </>
);
