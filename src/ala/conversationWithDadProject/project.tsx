import { AlaHeader } from "../../shared/header/alaHeader";
import { Footer } from "../../shared/footer/footer";
import { Banner } from "../../shared/project/banner/baner";
import { Process, ProcessElement } from "../../shared/project/process/process";
import { SideNav } from "../../shared/project/sideNav/sideNav";
import { Ending } from "../../shared/project/ending/ending";

export const ConversationWithDad = (
  <>
    <AlaHeader />
    <Banner src="/assets/conversationsWithDadObrazki/banner.webp" />
    <SideNav
      links={[
        { url: "#section1", title: "Overview" },
        { url: "#section2", title: "Problem" },
        { url: "#section3", title: "Solution" },
        { url: "#section4", title: "Process" },
        { url: "#section5", title: "Research" },
        { url: "#section6", title: "Ideation" },
        { url: "#section7", title: "Final Design" },
        { url: "#section8", title: "Reflections" },
      ]}></SideNav>

    <div class="content">
      <section id="section1">
        <h1>Conversation With Dad Zine</h1>
        <div class="app">
          <div>
            <h5>Tools</h5>
            <ul class="tools-list">
              <li>Adobe InDesign</li>
              <li>Adobe Photoshop</li>
              <li> Calligrapher Ink</li>
              <li> Charcoal</li>
            </ul>
          </div>

          <div>
            <h5>About Project</h5>
            <p>
              <strong>Deeply personal side project </strong>inspired by the challenges faced by my father after brain
              tumor surgery. Using artistic elements and the ancient Glagolitic characters I tried to
              <strong>explore the impact of secondary illiteracy and aphasia.</strong>
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section id="section2">
        <h5>Problem</h5>
        <h2>
          Aphasia, a condition more widespread than various common disorders, lacks public awareness, with 84.5% of
          people unfamiliar with the term.
        </h2>
        <p>
          The project addresses the pressing issue of <strong>societal awareness </strong>about secondary illiteracy and
          aphasia, particularly the challenges individuals face in regaining reading abilities after brain surgery or
          strokes,
          <strong> highlighting the flaws in the prevailing system</strong> that often place the responsibility for
          communication the affected person.
        </p>
      </section>
      <hr />
      <section id="section3">
        <h5>Solution</h5>
        <h2>Increasing societal emphaty by spreading awareness about the issue by quick and cheap print - zine.</h2>
        <p>
          By addressing the lack of familiarity with aphasia, the project aims to spark conversations and promote a more
          compassionate approach towards those grappling with reading difficulties.
        </p>
        <div class="desktop">
          <div class="info">
            <h2>Substantive articles that give basic understanding intermingled by emotional hand-lettering</h2>
            <p>
              Merging informative articles with emotional hand-lettering, this section offers a
              <strong> basic understanding of the subject</strong>. The content, presented in an emotionally charged
              manner through hand-lettering, aims to
              <strong>evoke engagement and spark interest</strong>. This approach intertwines essential information with
              a personalized touch to enhance the reader's connection to the material.
            </p>
          </div>
          <div class="view left">
            <img src="/assets/conversationsWithDadObrazki/1.webp" />
          </div>
        </div>

        <div class="desktop">
          <div>
            <h2>Metaphor that brings people closer</h2>
            <p>
              The symbol of the lost connection here is <strong> the Glagolitic alphabet </strong>- the once vibrant
              Proto-Slavic language of our region. In this small project I tried to find
              <strong> analogies between the current alphabet and the lost one </strong>. Similar writing rhythm, mirror
              images of characters. It is also interesting that some letters had their own separate meanings, e.g. D =
              Dobro (good), P = Pokój (peace), S = Słowo (word).
            </p>
          </div>
          <div class="view">
            <img src="/assets/conversationsWithDadObrazki/2.webp" />
          </div>
        </div>

        <div class="desktop">
          <div class="info">
            <h2>Encoded personal experiences</h2>
            <p>
              In the zine, I extended the metaphor by encoding personal experiences. Messages written in Glagolica,
              including an interview with my father, create a<strong> unique layer of understanding </strong>. As the
              interview progressed, I transitioned to "speaking" in his language. The subsequent pages detail my
              personal experiences and a letter seeking understanding, providing readers with an opportunity to decode
              the content, emphasizing
              <strong>our ability to adapt and connect </strong> with those affected by aphasia.
            </p>
          </div>
          <div class="view left">
            <img src="/assets/conversationsWithDadObrazki/3.webp" />
          </div>
        </div>
      </section>
      <hr />
      <section id="section4">
        <h5>Process</h5>
        <Process>
          <ProcessElement title="Awareness">
            <p>
              Before my dad's surgery, I had never considered aphasia or secondary illiteracy. As I searched for
              effective communication tools, <strong>the lack of empathy from society </strong> toward those affected
              left me frustrated.
            </p>
          </ProcessElement>
          <ProcessElement title="Research">
            <p>
              I delved into the topic through
              <strong> extensive reading, consulting organizations, and conducting interviews</strong>
              with affected individuals and their families. Simultaneously, upon discovering Glagolica as a perfect
              metaphor, I started exploring this ancient language.
            </p>
          </ProcessElement>
          <ProcessElement title="Ideation & Design">
            <p>
              After creating thousands of sketches, developing fonts, and collecting content, I started assembling and
              <strong> fine-tuning the project</strong>, aiming to achieve the perfect aesthetics and message.
            </p>
          </ProcessElement>
        </Process>
      </section>
      <hr />
      <section id="section5">
        <h5>White Paper Research</h5>
        <h2>
          The National Aphasia Association reports that only 8.8% of people have heard of aphasia and can identify it as
          a language disorder.
        </h2>
        <p>👉 34.7% of people that are “aphasia aware” either have aphasia or know someone that does.</p>
        <p>👉 Aphasia can be so severe as to make communication with the patient almost impossible.</p>
        <p>
          👉 Most people have never heard of aphasia. Because people with aphasia have difficulty communicating, the
          condition is often mistaken for many other situations. Feelings of social isolation with resulting emotional
          effects are common to individuals with aphasia.
        </p>
        <div class="desktop">
          <div class="info">
            <h5>Interview with Dad</h5>
            <h2>The embodiment of aphasia</h2>
            <p>
              A pivotal aspect of my project involves delving into the intricacies of aphasia from the perspective of
              the affected person, aiming to cultivate empathy. I engaged in
              <strong>a two-hour conversation with my dad</strong>, exploring his feelings, communication struggles, and
              encouraging the expression of frustrations and moments of embarrassment. Following the interview, I
              meticulously <strong>condensed the content into succinct sections</strong>, allowing readers to resonate
              with the profound experiences shared.
            </p>
          </div>
          <div class="viev left">
            <img src="/assets/conversationsWithDadObrazki/dad.webp" />
          </div>
        </div>
        <div class="desktop">
          <div>
            <h5>Web & Old tomes Research</h5>
            <h2>Lost language - Głagolica</h2>
            <p>
              👉 The oldest known Slavic script. Despite its historical significance, Glagolitic is no longer in common
              use, and surviving examples of texts in this script are relatively rare.
            </p>
            <p>
              👉 The script contains 41 characters representing a specific sound, much like the Latin or Cyrillic
              scripts.
            </p>
            <p>
              👉 Some symbols have compound meaning like letter D symbolises Dobro (meaning good). The legend in my
              region speaks that the hexes shouldn’t have any of the “good” letters in them for the worst outcome ;)
            </p>
          </div>
          <div class="view">
            <img src="/assets/conversationsWithDadObrazki/glagolica.webp" />
          </div>
        </div>
      </section>
      <hr />
      <section id="section6">
        <h5>Ideation</h5>
        <h2>Exploring techniques and hand lettering for better understanding of lost languages</h2>
        <p>....</p>
      </section>
      <hr />
      <section id="section7">
        <h5>Final Design</h5>
        <h2>Perfect combination of aesthetics and encoded messages</h2>
        <video controls class="full-video">
          <source src="/assets/conversationsWithDadObrazki/finalDesignMovie.m4v" type="video/mp4" />
        </video>

        <div class="patterns">
          <img src="\assets\conversations with dad obrazki\gallery1.webp" />
          <img src="/assets/conversationsWithDadObrazki/gallery3.webp" />
          <img src="/assets/conversationsWithDadObrazki/gallery2.webp" />
          <img src="\assets\conversations with dad obrazki\gallery4.webp" />
          <img src="/assets/conversationsWithDadObrazki/gallery6.webp" />
          <img src="/assets/conversationsWithDadObrazki/gallery5.webp" />
        </div>
      </section>
      <hr />
      <section id="section8">
        <h5>Reflections</h5>
        <h2>As the time goes... </h2>

        <p>
          I endeavored to address a deeply personal and often overlooked issue, striving to convey that We are not alone
          and that <strong> the world extends beyond our individual experiences</strong>. My intention was to evoke
          curiosity, followed by frustration, ultimately fostering increased sensitivity towards the challenges of
          secondary illiteracy and aphasia. From this side project, three key takeaways emerge:
        </p>

        <div class="noteboxes">
          <h2>Lost doesn't mean forgotten</h2>
          <p>
            Exploring Glagolica deepened my <strong> understanding of language creation </strong>, highlighting how we,
            as creative beings, shape our communication systems. Despite the challenges in discovering and learning
            about Glagolica I found out that there are many parallels between modern Polish and ancient script,
            <strong>its remnants persist in our daily lives</strong>—a reflection reminiscent of the experiences of
            those affected by aphasia.
          </p>
        </div>
        <div class="noteboxes">
          <h2>Making effort to communicate</h2>
          <p>
            This project has been a journey, teaching both me and those close to me the art of adaptation in the face of
            change. It underscores the importance for individuals with stronger communication skills to make the effort
            in understanding those with limited language options.
          </p>
        </div>
        <div class="noteboxes">
          <h2>Tangible Remainder of Empathy</h2>
          <p>
            When communication becomes challenging and frustrating for my family and me,
            <strong> we find solace in revisiting this small project</strong>. It serves as a poignant reminder of the
            immense difficulty faced by someone who can no longer speak in the language they once knew and should know
            now. Reflecting on this helps us regain composure and strength to move forward.
            <strong> While this project may not save the world, it has undoubtedly saved mine</strong>.
          </p>
        </div>
      </section>
    </div>
    <Ending />
    <Footer topId="#section1" />
  </>
);
