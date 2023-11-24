import LangButton from "@/components/lang/button";
import Socials from "@/components/social";

function HeadingComponent() {
  return (
    <section className="flex w-full justify-between items-center px-6 bg-main-green-medium py-1 border-b border-white">
      {/* Social */}
      <aside className="flex gap-5 py-1">
        <Socials />
      </aside>

      {/* Language */}
      <aside className="w-28 flex justify-center">
        <LangButton />
      </aside>
    </section>
  );
}

export default HeadingComponent;
