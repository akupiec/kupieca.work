function DarkModeSwitch() {
  const jsScript = `
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const themeElSelector = document.querySelector('#theme-selection');
  const lastTheme = localStorage.getItem('last-theme-dark');
  let isDark = lastTheme === null && prefersDarkScheme.matches || lastTheme === 'dark-theme';

  if (isDark) {
    themeElSelector.checked = false;
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    localStorage.setItem('last-theme-dark', 'dark-theme');
  } else {
    themeElSelector.checked = true;
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('last-theme-dark', 'light-theme');
  }
  
  themeElSelector.addEventListener('change', () => {
    if (!themeElSelector.checked) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      localStorage.setItem('last-theme-dark', 'dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('last-theme-dark', 'light-theme');
    }
  })
`;

  return (
    <>
      <input type="checkbox" class="toggle-switch" id="theme-selection" />
      <script dangerouslySetInnerHTML={{ __html: jsScript }}></script>
    </>
  );
}

export function NavBar({ children }: any) {
  return (
    <header>
      <nav>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-hamburger" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          {children}
          <li>
            <DarkModeSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function NavItem({ children }: any) {
  return <li>{children}</li>;
}
