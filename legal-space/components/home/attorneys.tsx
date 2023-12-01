import { AttorneysTypes } from "@/@types/attorney/attorney";
import SectionTitle from "../title";
import { cookies } from "next/headers";
import AttorneyContainer from "../attorney/container/container";
import defaultAvatar from "@/public/images/avatar_default.jpg";
import ViewMoreLink from "../viewMore";

function HomeAttorney({ attorneysData }: { attorneysData: AttorneysTypes }) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <section className="flex flex-col">
      <SectionTitle
        title={`${
          lang === "eng" ? "Meet Our Attorneys" : "გაიცანით ჩვენი ადვოკატები"
        }`}
      />

      <aside className="grid grid-cols-1 gap-4 bg-main-green-medium p-5 rounded-md w-[90%] mx-auto max-w-[500px] md:grid-cols-2 md:max-w-[1320px] lg:grid-cols-3 gap-y-14">
        {attorneysData?.status === "success" &&
          attorneysData.data.map((att) => (
            <AttorneyContainer
              key={att._id}
              name={att.name}
              image={att.attorney_id.image}
              defaultAvatar={defaultAvatar.src}
              title={att.title}
              description={att.description}
              linkedin={att.attorney_id.linkedin}
              facebook={att.attorney_id.facebook}
              instagram={att.attorney_id.instagram}
            />
          ))}
      </aside>

      <ViewMoreLink href="/attorney" />
    </section>
  );
}

export default HomeAttorney;
