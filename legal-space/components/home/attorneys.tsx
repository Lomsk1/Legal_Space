import SectionTitle from "../title";
import { cookies } from "next/headers";

function HomeAttorney() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <section>
      <SectionTitle
        title={`${lang === "eng" ? "Meet Our Attorneys" : "შეხვდით ჩვენს ადვოკატებს"}`}
      />

      <aside className="grid grid-cols-1 bg-red-900">

      </aside>
    </section>
  );
}

export default HomeAttorney;
