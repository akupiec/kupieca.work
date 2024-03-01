export const Footer = ({ topId }: { topId?: string }) => {
  const backToTop = topId && (
    <a href={topId} className="back">
      <img src="/assets/link-arrow.svg" alt="Go back to top" role="presentation" />
      Back to the top
    </a>
  );

  return (
    <footer>
      <h1>Interested in collaboration?</h1>
      <div class="wrapper">
        <div class="person">
          <h2>
            Shoot me at
            <a class="mail" href="mailto:ala@akupiec.work">
              ala@akupiec.work
            </a>
          </h2>
          <p>or let's connect on my other platforms.</p>

          <a
            class="social linkedin"
            aria-label="Open linkedin profile"
            href="https://www.linkedin.com/in/alicja-kupiec/">
            <img src="/assets/social/linkedin.svg" alt="linkedin" role="presentation" />
          </a>
          <a class="social figma" aria-label="Open figma profile" href="https://www.figma.com/@alicjakupiec">
            <img src="/assets/social/figma.svg" alt="figma" role="presentation" />
          </a>
          <a class="social behance" aria-label="Open behance profile" href="https://www.behance.net/alicjakupiec">
            <img src="/assets/social/behance.svg" alt="behance" role="presentation" />
          </a>
        </div>
        <div class="credits">
          {backToTop}
          <div class="rights">© 2023 akupiec. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};
