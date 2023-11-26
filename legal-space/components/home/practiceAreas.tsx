import PracticeAreasContainer from "../practiceAreas/container";
import SectionTitle from "../title";
import { cookies } from "next/headers";
import ViewMoreLink from "../viewMore";

function HomePracticeAreas() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <section className="py-12 bg-main-green-dark flex flex-col">
      <SectionTitle
        title={`${lang === "eng" ? "Practice Areas" : "სამუშაო სფეროები"}`}
      />

      {/* Services Containers */}
      <div className="gap-2 w-[80%] mx-auto flex-col grid grid-cols-1 p-2 max-w-[420px] sm:grid-cols-2 sm:max-w-none lg:grid-cols-3 lg:max-w-[1300px] rounded-md md:p-5">
        <PracticeAreasContainer />
      </div>

      {/* More */}
      <ViewMoreLink href="/practice-areas" />
    </section>
  );
}

export default HomePracticeAreas;
