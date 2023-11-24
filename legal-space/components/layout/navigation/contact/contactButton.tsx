"use client";

import useContactSidebarStore from "@/store/client/layout/contact";
import { LuPhoneCall } from "react-icons/lu";

function NavigationContactButton() {
  /* Store */
  const { setContactIsOpen } = useContactSidebarStore((state) => state);
  return (
    <button
      className="p-1 duration-300 hover:scale-125"
      onClick={() => setContactIsOpen(true)}
    >
      <LuPhoneCall className={"text-2xl"} />
    </button>
  );
}

export default NavigationContactButton;
