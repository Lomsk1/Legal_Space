import { cookies } from "next/headers";

function AttorneyHeroSection() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";

  return (
    <main className="w-full min-h-screen bg-attorney-hero bg-cover bg-fixed bg-center relative flex justify-center items-center">
      {/* Filter */}
      <div className="absolute w-full h-full top-0 bg-black opacity-80"></div>

      {/* Text and Image */}
      <div className="flex flex-col-reverse w-[90%] gap-10 relative max-w-[310px] md:flex-row md:max-w-[730px] lg:max-w-[1100px]">
        {/* Text */}
        <aside className="w-full md:flex md:justify-center md:items-center ">
          <h1 className="text-center text-3xl md:text-5xl tracking-widest font-semibold ">
            {lang === "eng" ? "Our Attorneys" : "ჩვენი ადვოკატები"}
          </h1>
        </aside>
      </div>
    </main>
  );
}

export default AttorneyHeroSection;
