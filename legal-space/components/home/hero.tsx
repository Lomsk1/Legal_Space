import Image from "next/image";
import qetiImg from "@/public/images/qeti.png";
import { cookies } from "next/headers";

function HomeHeroSection() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";

  return (
    <main className="w-full min-h-screen bg-home-hero bg-cover bg-fixed bg-center relative flex justify-center items-center md:items-end">
      {/* Filter */}
      <div className="absolute w-full h-full top-0 bg-black opacity-80"></div>

      {/* Text and Image */}
      <div className="flex flex-col-reverse w-[90%] gap-10 relative max-w-[310px] md:flex-row md:max-w-[730px] lg:max-w-[1100px]">
        {/* Text */}
        <aside className="w-full md:flex md:justify-center md:items-center ">
          <h1 className="text-center text-3xl md:text-5xl tracking-widest font-semibold ">
            {lang === "eng"
              ? " We Fight for Your Rights"
              : "ჩვენ ვიბრძვით თქვენი უფლებებისთვის"}
          </h1>
        </aside>
        {/* Image */}
        <aside className="w-full aspect-[2/3] max-w-[310px]  lg:max-w-[500px]">
          <Image src={qetiImg} alt="qeti" priority />
        </aside>
      </div>
    </main>
  );
}

export default HomeHeroSection;
