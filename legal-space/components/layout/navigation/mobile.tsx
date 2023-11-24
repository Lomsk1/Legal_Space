"use client";

import useBurgerStore from "@/store/client/layout/burger";
import { ActiveNavigation } from "./active";
import Image from "next/image";
import logo from "@/public/images/logo-removebg.png";
import { RemoveScroll } from "react-remove-scroll";

function NavigationForMobile() {
  const { navIsOpen, setNavIsOpen } = useBurgerStore((state) => state);
  return (
    <nav
      className={`${
        navIsOpen ? "left-0 opacity-100" : "left-full opacity-0"
      } duration-500 bg-main-green-medium fixed w-full min-h-screen top-0 flex flex-col items-center gap-11 md:hidden z-50`}
    >
      {/* Close Button */}
      <button
        title="Close"
        className="group cursor-pointer outline-none hover:rotate-90 rotate-45 duration-300 absolute right-9 top-9"
        onClick={() => setNavIsOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            strokeWidth="1.5"
          ></path>
          <path d="M8 12H16" strokeWidth="1.5"></path>
          <path d="M12 16V8" strokeWidth="1.5"></path>
        </svg>
      </button>

      {/* Logo */}
      <RemoveScroll enabled={navIsOpen} className="w-fit h-fit mx-auto mt-8">
        <Image src={logo} alt="logo" className="w-[150px] h-[100px]" />
      </RemoveScroll>

      {/* Name */}
      <h2 className="mx-auto w-fit mt-7 text-4xl font-bold tracking-widest text-main-green-light">
        Legal Space
      </h2>

      <ActiveNavigation />
    </nav>
  );
}

export default NavigationForMobile;
