import { NavBar, NavItem } from "./navBar/navBar";

export function AlaHeader() {
  const jsScript = `
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("header nav a").forEach((a) => {
    if(window.location.href.replace(/\\/$/, '') == a.href) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
});
`;

  return (
    <NavBar>
      <script dangerouslySetInnerHTML={{ __html: jsScript }}></script>
      <NavItem>
        <a href="/ala">Work</a>
      </NavItem>
      <NavItem>
        <a href="/ala/about">About me</a>
      </NavItem>
      <NavItem>
        <a href="https://drive.google.com/file/d/1vIRpNa1K-dJAXhjDsnm0AkKAv2He4unb/view?usp=sharing" target="_blank">
          Resume
        </a>
      </NavItem>
    </NavBar>
  );
}
