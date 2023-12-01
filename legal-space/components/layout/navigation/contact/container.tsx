"use client";

import Image from "next/image";
import logo from "@/public/images/logo-removebg.png";
import ContactBasicInfo from "@/components/contact/basicInformation";
import Socials from "@/components/social";
import ContactClose from "./close";
import useContactSidebarStore from "@/store/client/layout/contact";

function NavigationContactContainer({ lang }: { lang: string }) {
  /* Store */
  const { contactIsOpen } = useContactSidebarStore((state) => state);
  return (
    <aside
      className={`fixed top-0 ${
        contactIsOpen ? "right-0 opacity-100" : "-right-full opacity-0"
      } w-full h-screen bg-[#ffffffa1] flex justify-end duration-700`}
    >
      <div className="bg-main-green-dark h-full w-[80%] max-w-[580px] overflow-y-auto pl-20">
        {/* Close */}
        <ContactClose />

        {/* Logo */}
        <header className="w-fit h-fit mx-auto mt-8">
          <Image src={logo} alt="logo" className="w-[150px] h-[100px]" />
        </header>

        {/* Name */}
        <h2 className="mx-auto w-fit mt-7 text-4xl font-bold tracking-widest text-main-green-light">
          Legal Space
        </h2>

        {/* Location */}
        <ContactBasicInfo
          className="my-10"
          text={[
            `${
              lang === "eng"
                ? "Tbilisi, Navtlughi street N-10, block N-3, flat N-13"
                : "თბილისი, ნავთლუღის ქ. N-10, კორპუსი N-3, ბინდა N-13"
            }`,
            "+995 555 393 341",
            "+995 558 616 168",
          ]}
          title={`${
            lang === "eng" ? "MAIN OFFICE LOCATION" : "ოფისის მისამართი"
          }`}
        />

        {/* Information */}
        <ContactBasicInfo
          text={[
            `${lang === "eng" ? "Qeti Beridze" : "ქეთი ბერიძე"}`,
            "legalspacelaw@gmail.com",
            "+995 555 393 341",
            "+995 558 616 168"
          ]}
          title={`${lang === "eng" ? "LEGAL CONSULTANT" : "საკონტაქტო"}`}
        />

        {/* Social */}
        <div className="flex mt-5 gap-5">
          <p>{lang === "eng" ? "Socials" : "სოც. ქსელი"}: </p>
          <span className="flex gap-3">
            <Socials />
          </span>
        </div>
      </div>
    </aside>
  );
}

export default NavigationContactContainer;
