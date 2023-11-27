import { ActiveNavigation } from "./active";
import BurgerButton from "./burger";
import NavigationForMobile from "./mobile";
import NavigationContactButton from "./contact/contactButton";
import NavigationContactContainer from "./contact/container";
import Link from "next/link";
import { cookies } from "next/headers";

function LayoutNavigation() {
  /* Language */
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <>
      {/* Tablet, Laptop, PC */}
      <nav className="hidden md:flex justify-end items-end lg:gap-10 md:gap-5 md:px-6 bg-main-green-medium py-2 sticky top-0 z-[60]">
        <ActiveNavigation lang={lang} />

        {/* Contact */}
        <NavigationContactButton />
        <NavigationContactContainer lang={lang} />
      </nav>

      {/* Mobile */}
      <section className="md:hidden flex justify-between items-center px-6 bg-main-green-medium z-40 py-2">
        <aside className="w-40 h-10 flex items-center text-2xl">
          <Link href={"/"}>Legal Space</Link>
        </aside>
        <BurgerButton />
      </section>

      <NavigationForMobile />
    </>
  );
}

export default LayoutNavigation;
