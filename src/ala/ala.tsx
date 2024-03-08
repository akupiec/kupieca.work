import { AlaHeader } from "../shared/header/alaHeader";
import { Footer } from "../shared/footer/footer";

function ProjectCard({ children, title, tags, projectInfo }: any) {
  const tagsList = tags.map((t: string) => <span class="project-tags">{t}</span>);
  return (
    <div className="project-card">
      {children}
      <h2 className="project-title">{title}</h2>
      {tagsList}
      <p className="project-info">{projectInfo}</p>
    </div>
  );
}

export const Ala = (
  <>
    <AlaHeader />
    <h1 id="hi">
      Hi, my name is <span class="highlight">Ala</span> and <br />
      I’m UX/UI Designer :)
    </h1>
    <h2 class="title-info">
      Passionate about <span class="underline-green">sustainability</span>. Currently focused on improving skillset and
      finishing <span class="underline-green">master’s degree</span> in design.
    </h2>

    <div className="project-section">
      <ProjectCard
        title="Cinema Website Revamp"
        tags={["UX/UI", "Responsive Web Design"]}
        projectInfo="Revamping the cinema website for better navigation, a minimalist landing page, and a dedicated 'My Page' for loyal customers.">
        <a href="/ala/kinoPodBaranami">
          <img src="/assets/mainPageImages/kinoPodBaranami.webp" alt="kinoPodBaranami" />
        </a>
      </ProjectCard>

      <ProjectCard
        title="Health Quest App"
        tags={["UX/UI", "Mobile App"]}
        projectInfo="DareIT UX Challenge App for tracking and achieving health goals with user-friendly navigation and motivational features.">
        <a href="/ala/healthQuestProject">
          <img src="/assets/mainPageImages/healthQuest.webp" alt="HealthQuest" />
        </a>
      </ProjectCard>

      <ProjectCard
        title="UX Writing Flashcards (PL)"
        tags={["UX Writing", "Graphic Design"]}
        projectInfo="Series of flash cards explaining UX writing, introducing the concept based on principles oriented towards reader usefulness.">
        <a href="/ala/uxWritingFlashcards">
          <img src="/assets/mainPageImages/kartyUXWritting.webp" alt="UX Writing Flashcards" />
        </a>
      </ProjectCard>

      <ProjectCard
        title="Moral Design Club"
        tags={["Brand Design", "Graphic Design", "Logo Design"]}
        projectInfo="Brand Concept for space for creatives to design solutions for societal and environmental issues">
        <a href="/ala/moralDesignClub">
          <img src="/assets/mainPageImages/moralDesignClub.webp" alt="Moral Design Club Branding" />
        </a>
      </ProjectCard>

      <ProjectCard
        title="Conversations with Dad Zine"
        tags={["Editorial Design", "Graphic Design"]}
        projectInfo="Deeply personal side project exploring the impact of secondary illiteracy and aphasia">
        <a href="/ala/conversationWithDadProject">
          <img src="/assets/mainPageImages/tataZin.webp" alt="Conversations with Dad" />
        </a>
      </ProjectCard>

      <ProjectCard
        title="Web Aspect - Sustainable UX Design 🔒"
        tags={["UX/UI", "Responsive Web Design", "Brand Design", "Graphic Design"]}
        projectInfo="Coming soon!">
        <img src="/assets/mainPageImages/webAspectComingSoon.webp" alt="Web Aspect - Sustainable UX Design" />
      </ProjectCard>

      <ProjectCard
        title="WiseWay Hackathon Winner 🔒"
        tags={["UX/UI", "Responsive Web Design"]}
        projectInfo="Coming soon!">
        <img src="/assets/mainPageImages/wisewayComingSoon.webp" alt="Wise Way App Design" />
      </ProjectCard>
    </div>
    <Footer topId="#hi" />
  </>
);
