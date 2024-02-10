export function Cards() {
  return <div class="cards-area">
    <div>
      <img src="./assets/art-portfolio.png" alt="Artur profile image" />
      <div class="content">
        <h3>Artur Kupiec</h3>
        <small>Senior Software Developer</small>
        <a className="mail" href="mailto:artur@akupiec.work">
          art@akupiec.work
        </a>
        <a className="goto" href="./wip" aria-label="Open Artur portfolio">
          <img src="./assets/link-arrow.svg" alt="Go to" role="presentation" />
        </a>
      </div>
    </div>
    <div>
      <img src="./assets/ala-portfolio.png" alt="Ala profile image" />
      <div class="content">
        <h3>Ala Kupiec</h3>
        <small>UX/UI Designer</small>
        <a className="mail" href="mailto:ala@akupiec.work">
          ala@akupiec.work
        </a>
        <a className="goto" href="./wip" aria-label="Open Ala portfolio">
          <img src="./assets/link-arrow.svg" alt="Go to" role="presentation" />
        </a>
      </div>
    </div>
  </div>;
}