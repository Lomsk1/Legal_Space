import { ServicesType } from "@/@types/services/service";
import SectionTitle from "../title";
import ServiceContainer from "../service/container";
import { cookies } from "next/headers";

function HomeServices({ serviceData }: { serviceData: ServicesType }) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <section className="py-12">
      <SectionTitle
        title={`${lang === "eng" ? "Our Best Services" : "ჩვენი სერვისები"}`}
      />

      {/* Services Containers */}
      <div className="flex gap-2 bg-main-green-medium rounded-md w-[80%] mx-auto flex-col justify-center items-center md:flex-row py-10">
        {serviceData.status === "success" && serviceData.result > 0 ? (
          serviceData.data.map((serv) => (
            <ServiceContainer
              key={serv.id}
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

export default HomeServices;
