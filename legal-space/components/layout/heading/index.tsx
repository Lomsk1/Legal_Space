import LangButton from "@/components/lang/button";
import Socials from "@/components/social";
import { cookies } from "next/headers";

function HeadingComponent() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <section className="flex w-full justify-between items-center px-6 bg-main-green-medium py-1 border-b border-white">
      {/* Social */}
      <aside className="flex gap-5 py-1">
        <Socials />
      </aside>

      {/* Language */}
      <aside className="w-28 flex justify-center">
        <LangButton lang={lang} />
      </aside>
    </section>
  );
}

export default HeadingComponent;
