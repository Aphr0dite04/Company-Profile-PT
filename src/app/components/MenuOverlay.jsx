import NavLink from "./NavLink";

export default function MenuOverlay({ links }) {
  return (
    <div className="lg:hidden px-4 pb-4 pt-2 bg-white shadow-md">
      <ul className="flex flex-col space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
