import Section from "./Section";
import { socials } from "../../constants";
import { Link } from "react-router-dom";

const links = [
  { name: "About", href: "/about" },
  { name: "Hire mid to senior level vetted talents", href: "/talent-agency" },
  {
    name: "Hire job ready entry level talents",
    href: "/talent-factory-for-corps",
  },
  {
    name: "For Government & NGOs",
    href: "/talent-factory-for-institutionnels",
  },
  { name: "Resources", href: "/resources" },
];

const Footer = () => {
  return (
    <Section crosses className="lg:!px-10 !px-0 !py-10 z-50">
      <nav
        className="border-b px-6 border-b-n-2/30 columns-2 sm:flex sm:justify-center sm:space-x-12"
        aria-label="Footer"
      >
        {links.map((item) => (
          <div key={item.name} className="pb-8">
            <Link to={item.href} className="body-2 text-n-2">
              {item.name}
            </Link>
          </div>
        ))}
      </nav>
      <div className="container pt-8 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <item.icon className="w-5 h-5 text-gray-100" />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
