"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const linkClasses = {
  general:
    "md:after:absolute md:after:contents[''] md:after:w-6 md:after:h-[2px] md:after:opacity-0 md:after:-bottom-2 md:after:left-1/2 md:after:-translate-x-1/2 md:after:duration-300 md:after:bg-gray-600",
  hover:
    "hover:text-main-green-dark md:hover:after:-bottom-5 md:hover:after:w-4 md:hover:after:h-4 md:hover:after:bg-white md:hover:after:rounded-full md:hover:after:duration-300 md:hover:after:opacity-100",
  active: "md:after:bg-white md:after:opacity-100",
};

export function ActiveNavigation({ lang }: { lang: string }) {
  const pathname = usePathname();
  const linkData1 = [
    {
      title: lang === "eng" ? "Home" : "მთავარი",
      path: "/",
    },
    {
      title: lang === "eng" ? "Practice Areas" : "სერვისები",
      path: "/practice-areas",
    },
    {
      title: lang === "eng" ? "Attorney" : "ადვოკატები",
      path: "/attorney",
    },
  ];
  const linkData2 = [
    {
      title: lang === "eng" ? "About" : "ჩვენ შესახებ",
      path: "/about",
    },
    {
      title: lang === "eng" ? "Blog" : "ბლოგი",
      path: "/blog",
    },
  ];
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
              } tracking-wider  duration-300`}
              href={links.path}
            >
              {links.title}
            </Link>
          </li>
        ))}

      <Link
        href={"/"}
        className="cursor-default text-3xl font-semibold lg:block hidden "
      >
        Legal Space
      </Link>

      <Link
        href={"/contact"}
        className={`${
          pathname === "/contact" ? linkClasses.active : "text-white"
        } ${linkClasses.hover} ${
          linkClasses.general
        } tracking-wider  duration-300 md:hidden`}
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
              } tracking-wider  duration-300`}
              href={links.path}
            >
              {links.title}
            </Link>
          </li>
        ))}
      <li className="relative">
        <Link
          className={`${linkClasses.hover} ${linkClasses.general}tracking-wider  duration-300 text-white`}
          href={
            "https://www.facebook.com/profile.php?id=100085587826241&mibextid=LQQJ4d"
          }
          target="_blank"
        >
          {lang === "eng" ? "Trainings" : "ტრენინგები"}
        </Link>
      </li>
    </ul>
  );
}
