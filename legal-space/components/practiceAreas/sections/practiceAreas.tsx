import SectionTitle from "@/components/title";
import { cookies } from "next/headers";
import PracticeAreasContainer from "../container/container";

function PracticeAreasPracticeSection() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <section className="py-12 flex flex-col">
      <SectionTitle
        title={`${lang === "eng" ? "Practice Areas" : "სამუშაო სფერო"}`}
      />

      {/* Services Containers */}
      <div className="gap-2 w-[80%] mx-auto flex-col grid grid-cols-1 p-2 max-w-[420px] sm:grid-cols-2 sm:max-w-none lg:grid-cols-3 lg:max-w-[1300px] rounded-md md:p-5 bg-main-green-dark">
        <PracticeAreasContainer />
      </div>
    </section>
  );
}

export default PracticeAreasPracticeSection;
