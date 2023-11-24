"use client";

import useBurgerStore from "@/store/client/layout/burger";
import { TfiMenuAlt } from "react-icons/tfi";

function BurgerButton() {
  /* Store */
  const { setNavIsOpen } = useBurgerStore((state) => state);
  return (
    <button
      className="md:hidden cursor-pointer block px-2 py-1 rounded-md duration-300 hover:duration-300 hover:text-main-green-dark text-white text-3xl font-bold shadow-2xl transition active:scale-90"
      onClick={() => setNavIsOpen(true)}
    >
      <span className=" shadow-white">
        <TfiMenuAlt />
      </span>
    </button>
  );
}

export default BurgerButton;
