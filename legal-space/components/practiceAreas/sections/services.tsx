import { ServicesType } from "@/@types/services/service";
import ServiceContainer from "@/components/service/container";
import SectionTitle from "@/components/title";
import { cookies } from "next/headers";

function PracticeAreaServiceSection({
  serviceData,
}: {
  serviceData: ServicesType;
}) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <section className="bg-main-green-medium">
      <SectionTitle
        title={`${lang === "eng" ? "Our Best Services" : "ჩვენი სერვისები"}`}
      />

      <div className="flex gap-2 bg-main-green-medium rounded-md w-[80%] mx-auto flex-col justify-center items-center md:flex-row md:pt-14">
        {serviceData.status === "success" && serviceData.result > 0 ? (
          serviceData.data.map((serv) => (
            <ServiceContainer
              key={serv._id}
              title={serv.title}
              description={serv.description}
            />
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </section>
  );
}

export default PracticeAreaServiceSection;
