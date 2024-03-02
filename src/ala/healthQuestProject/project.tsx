import { AlaHeader } from "../../shared/header/alaHeader";
import { Footer } from "../../shared/footer/footer";
import { Banner } from "../../shared/project/banner/baner";
import { Process, ProcessElement } from "../../shared/project/process/process";
import { SideNav } from "../../shared/project/sideNav/sideNav";
import { Ending } from "../../shared/project/ending/ending";

export const HealthQuestProject = (
  <>
    <AlaHeader />
    <Banner src="/assets/HealthQuest obrazki/Banner copy.webp" />
    <SideNav
      links={[
        { url: "#section1", title: "Overview" },
        { url: "#section2", title: "Problem" },
        { url: "#section3", title: "Solution" },
        { url: "#section4", title: "Process" },
        { url: "#section5", title: "Research" },
        { url: "#section6", title: "Ideation" },
        { url: "#section7", title: "Style Guide" },
        { url: "#section8", title: "Final Design & Evaluation" },
        { url: "#section9", title: "Prototype" },
        { url: "#section10", title: "Reflections" },
      ]}></SideNav>

    <div class="content">
      <section id="section1">
        <h1>Health Quest Mobile App</h1>
        <div class="app">
          <div>
            <h5>Tools</h5>
            <ul class="tools-list">
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Firefly</li>
            </ul>
          </div>

          <div>
            <h5>About Project</h5>
            <p>
              Mobile App designed for DareIT UX Challenge. The task was to design an app within three days for tracking
              and achieving health goals with user-friendly navigation and motivational features.
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section id="section2">
        <h5>Problem</h5>
        <h2>Teenagers struggle to overcome mental health challenges and body image issues</h2>
        <p>
          One in seven adolescents experiences a mental disorder leading to depression, self-esteem issues, and
          unhealthy behaviors. Because of that I chose 15-18 years old teenagers as my target group. The goal is to
          design a tool that mitigate these issues while crafting sense of community between affected teens.
        </p>
      </section>
      <hr />
      <section id="section3">
        <h5>Solution</h5>
        <h2>Transforming daily routines into gamified quests and character progression is the key</h2>

        <div class="phone">
          <div class="mobile-view left">
            <img src="/assets/HealthQuest obrazki/iPhone 13 mini1.webp" />
          </div>
          <div class="info-to-mobile">
            <h2>AI-based quest recommendations aligned with user preferences</h2>
            <p>👉 Home screen with user’s chibi avatar encouraging a personal connection </p>
            <p>👉Daily quests with icons and descriptions, earning coins and experience points</p>
          </div>
        </div>

        <div class="phone">
          <div class="mobile-view">
            <img src="/assets/HealthQuest obrazki/iPhone 13 mini - 5 copy.webp" />
          </div>
          <div class="info-to-mobile">
            <h2>Accountability partners and character customization</h2>
            <p>
              👉 Avatar customization with various options for clothing and accessories in order to improve bond with
              the character
            </p>
            <p>👉 Positive reinforcement through encouraging messages and virtual rewards for milestones</p>
          </div>
        </div>

        <div class="phone">
          <div class="mobile-view left ">
            <img src="/assets/HealthQuest obrazki/iPhone 13 mini - 8 copy.webp" />
          </div>
          <div class="info-to-mobile">
            <h2>Goal progression tracker and shared quests</h2>
            <p>👉 Daily, weekly and monthly goal tracker, adjustable within goal options </p>
            <p>👉 Social challenges to bond with friends with rewarded participation</p>
          </div>
        </div>
      </section>
      <hr />
      <section id="section4">
        <h5>Process</h5>
        <Process>
          <ProcessElement title="Define">
            <ul>
              <li>understanding presented challenge</li>
              <li>defining project goals</li>
              <li>choosing tools</li>
              <li>forming a schedule</li>
            </ul>
          </ProcessElement>
          <ProcessElement title="Research">
            <ul>
              <li>white paper research</li>
              <li>veryfing gathered information</li>
              <li>competetive analysis</li>
            </ul>
          </ProcessElement>
          <ProcessElement title="Ideation">
            <ul>
              <li>design ideas</li>
              <li>sketches</li>
              <li>Lo-Fi Wireframes</li>
              <li>Hi-Fi Wireframes</li>
            </ul>
          </ProcessElement>
          <ProcessElement title="Design">
            <ul>
              <li>generating different avatars & spicing them up in Photoshop</li>
              <li>definig style guide</li>
              <li>prototype design</li>
            </ul>
          </ProcessElement>
        </Process>
      </section>
      <hr />
      <section id="section5">
        <h5>White Paper Research</h5>
        <h2>WHO defines health as “a state of complete physical, mental and social well-being”</h2>
        <p>
          👉 Globally, one in seven 10-19-year-olds experiences a mental disorder and about 20% of teens will experience
          depression before they reach adulthood.
        </p>
        <p>👉 Among high school students, 44% of girls and 15% of guys are attempting to lose weight.</p>
        <p>
          👉 75% of girls with low self-esteem reported engaging in negative activities like cutting, bullying, smoking,
          drinking, or disordered eating.
        </p>
      </section>
      <hr />
      <section id="section6">
        <h5>Ideation</h5>
        <video controls class="full-video">
          <source src="/assets/HealthQuest obrazki/Main Comp 1-1.m4v" type="video/mp4" />
        </video>
      </section>
      <hr />
      <section id="section7" class="paragrah style-guide">
        <h5>Style Guide</h5>
        <img src="/assets/HealthQuest obrazki/StyleGuide.webp" />
      </section>
      <hr />
      <section id="section8" class="videoside">
        <div class="video-text">
          <h5>Final Design & Evaluation</h5>
          <h2>“Easy to use and understand. I would use it regular because it’s so cute and happy-looking”</h2>
          <p>👉 With little to no time I immediately tested the prototype with two potential users </p>
          <p>
            👉 I sent the link to the prototype and asked to either give written feedback or film the process of doing
            certain tasks in app
          </p>
        </div>
        <video controls>
          <source src="/assets/HealthQuest obrazki/Phone In Hand Mockuphelathquest-1.m4v" type="video/mp4" />
        </video>
      </section>
      <hr />
      <section id="section9" class="figma">
        <h5>Figma Prototype</h5>
        <iframe
          style="border: 1px solid rgba(0, 0, 0, 0.1);"
          width="1360px;"
          height="765px;"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F050vN6BNVDrg8TEUTSvoEs%2FDareITUXChallenge%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D57-3661%26viewport%3D736%252C654%252C0.19%26t%3DOLvKQeBqlSdg7sy9-1%26scaling%3Dscale-down%26starting-point-node-id%3D57%253A3661%26mode%3Ddesign"
          allowFullScreen></iframe>
      </section>
      <hr />
      <section id="section10">
        <h5>Reflections</h5>
        <h2>What I learned </h2>

        <p>
          This was my first ever UX/UI Challenge. Never before I had such a tight time frame as I spent on the whole
          process no more than 10 hours (divided between three days)! As much as I learned I also would do things
          differently now. Here are my main reflections:
        </p>

        <div class="noteboxes">
          <h2>Embracing AI for efficiency</h2>
          <p>
            In the face of time constraints, manual rendering is often impractical. To swiftly convey concept embracing
            AI tools like Adobe Firefly and employing well-crafted prompts can significantly accelerate the design
            process.
          </p>
        </div>
        <div class="noteboxes">
          <h2>Progress over Perfection</h2>
          <p>
            Shifting from pixel-perfect precision, this challenge emphasized progress. Despite potential refinements,
            the project effectively conveyed the idea within the given timeframe, highlighting the lesson that
            perfection isn't always the goal when managing time constraints.
          </p>
        </div>
        <div class="noteboxes">
          <h2>Strategic Time Management</h2>
          <p>
            Navigating tight deadlines emphasized streamlined scheduling for timely completion and extra refinement.
            Despite a hint of regret for limited initial research time, the experience provides insights for future
            projects, highlighting the balance between constraints and thorough investigation.
          </p>
        </div>
      </section>
    </div>
    <Ending />
    <Footer topId="#section1" />
  </>
);
