"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const linkData1 = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Practice Areas",
    path: "/practice-areas",
  },
  {
    title: "Attorney",
    path: "#",
  },
];
const linkData2 = [
  {
    title: "About",
    path: "#",
  },
  {
    title: "Blog",
    path: "#",
  },
];

const linkClasses = {
  general:
    "md:after:absolute md:after:contents[''] md:after:w-6 md:after:h-[2px] md:after:opacity-0 md:after:-bottom-2 md:after:left-1/2 md:after:-translate-x-1/2 md:after:duration-300 md:after:bg-gray-600",
  hover:
    "hover:text-main-green-dark md:hover:after:-bottom-5 md:hover:after:w-4 md:hover:after:h-4 md:hover:after:bg-white md:hover:after:rounded-full md:hover:after:duration-300 md:hover:after:opacity-100",
  active: "md:after:bg-white md:after:opacity-100",
};

export function ActiveNavigation() {
  const pathname = usePathname();

  return (
    <ul className="flex md:flex-row flex-col justify-evenly w-full items-center lg:px-5 md:px-3 gap-5 md:gap-0">
      {linkData1 &&
        linkData1.map((links, i) => (
          <li key={i} className="relative">
            <Link
              className={`${
                pathname === links.path ? linkClasses.active : "text-white"
              } ${linkClasses.hover} ${
                linkClasses.general
              } tracking-wider font-semibold duration-300`}
              href={links.path}
            >
              {links.title}
            </Link>
          </li>
        ))}

      <Link
        href={"/"}
        className="cursor-default text-3xl font-light lg:block hidden"
      >
        Legal Space
      </Link>

      <Link
        href={"/contact"}
        className={`${
          pathname === "/contact" ? linkClasses.active : "text-white"
        } ${linkClasses.hover} ${
          linkClasses.general
        } tracking-wider font-semibold duration-300 md:hidden`}
      >
        Contact
      </Link>

      {linkData2 &&
        linkData2.map((links, i) => (
          <li key={i} className="relative">
            <Link
              className={`${
                pathname === links.path ? linkClasses.active : "text-white"
              } ${linkClasses.hover} ${
                linkClasses.general
              } tracking-wider font-semibold duration-300`}
              href={links.path}
            >
              {links.title}
            </Link>
          </li>
        ))}
      <li className="relative">
        <Link
          className={`${linkClasses.hover} ${linkClasses.general}tracking-wider font-semibold duration-300 text-white`}
          href={"#"}
        >
          Trainings
        </Link>
      </li>
    </ul>
  );
}
