import ServiceContainer from "../service/container";
import SectionTitle from "../title";

function HomeServices() {
  return (
    <section className="py-10">
      <SectionTitle title="Our Best Services" />

      {/* Services Containers */}
      <div className="flex gap-2 bg-green-500 w-[80%] mx-auto flex-col justify-center items-center md:flex-row">
        {/* <ServiceContainer />
        <ServiceContainer />
        <ServiceContainer /> */}
      </div>
    </section>
  );
}

export default HomeServices;
