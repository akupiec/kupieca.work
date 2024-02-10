import { AlaHeader } from "../shared/header/alaHeader";

export const Ala = (
  <div>
    <AlaHeader />
    <h1>
      Hi, my name is <span className="highlight">Ala</span> and I’m UX/UI Designer.
    </h1>
    <h2 class="title-info">
      Passionate about <span className="underline-green">sustainability</span>. Currently focused on improving skillset
      and finishing <span className="underline-green">master’s degree</span> in design.
    </h2>

    <div className="project-section">
      <div className="project-card">
        <img src="/assets/MainPageImages/KinoPodBaranami.png" alt="KinoPodBaranami" />
        <h2 className="project-title">Cinema Website Revamp</h2>
        <a className="project-tags"> UX/UI</a>
        <a className="project-tags"> Responsive Web Design</a>
        <p className="project-info">
          Revamping the cinema website for better navigation, a minimalist landing page, and a dedicated 'My Page' for
          loyal customers.
        </p>
      </div>

      <div className="project-card">
        <img src="/assets/MainPageImages/HealthQuest.png" alt="HealthQuest" />
        <h2 className="project-title">Health Quest App</h2>
        <a className="project-tags"> UX/UI </a>
        <a className="project-tags"> Mobile App</a>
        <p className="project-info">
          DareIT UX Challenge App for tracking and achieving health goals with user-friendly navigation and motivational
          features.
        </p>
      </div>
    </div>
  </div>
);
