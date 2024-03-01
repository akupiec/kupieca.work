export function SideNav({ links }: { links: { url: string; title: string }[] }) {
  return (
    <nav class="sticky-nav">
      <script src="/shared/project/sideNav/sideNav.fn.js" type="text/javascript" />
      <ul>
        {links?.map((link) => (
          <li>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
