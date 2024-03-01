(function () {
  const ScrollOffset = 64;
  let ticking = false;

  document.addEventListener("DOMContentLoaded", () => {
    const navLinkEls = document.querySelectorAll("nav.sticky-nav a");
    const linkedSectionsEls = Array.from(navLinkEls)
      .map((el) => el.getAttribute("href") as string)
      .map((idLink) => document.querySelector(idLink))
      .filter((el) => !!el) as HTMLElement[];

    function activateLink(link: HTMLElement) {
      Array.from(navLinkEls)
        .filter((el) => link != el)
        .map((el) => {
          el.classList.remove("active");
        });
      link.classList.add("active");
    }

    function scrollTick(scrollPos: number) {
      const section = linkedSectionsEls.find((el) => el.offsetTop >= scrollPos);
      if (section) {
        const link = document.querySelector(`nav.sticky-nav a[href="#${section.getAttribute("id")}"]`) as HTMLElement;
        activateLink(link);
        return;
      }
    }

    if (location.hash) {
      const section = document.querySelector(location.hash) as HTMLElement;
      if (!section) return;
      document.querySelector(`nav.sticky-nav a[href="${location.hash}"]`)?.classList.add("active");

      setTimeout(() => {
        window.scrollTo({ top: section.offsetTop - ScrollOffset, behavior: "smooth" });
      }, 250);
    }

    navLinkEls.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetEl = e.target as HTMLElement;
        const idLink = targetEl.getAttribute("href") as string;
        const y = (document.querySelector(idLink) as HTMLElement).offsetTop;
        window.scrollTo({ top: y - ScrollOffset, behavior: "smooth" });
        window.history.pushState({}, "", window.location.href.replace(/#\w+$/, "") + idLink);
      });
    });

    document.addEventListener("scroll", (event) => {
      const lastKnownScrollPosition = window.scrollY;
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          scrollTick(lastKnownScrollPosition);
          ticking = false;
        });
      }
    });
  });
})();
