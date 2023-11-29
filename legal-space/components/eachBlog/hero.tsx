import { cookies } from "next/headers";
import Image from "next/image";

function EachBlogHeroSection({title}:{title: string}) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <main className="w-full flex flex-col py-10">
      <h1 className="max-w-[1000px] my-20 text-center font-semibold text-3xl mx-auto">
        {title}
      </h1>

      {/* Image Container */}
      <div className="w-[90%] h-screen mx-auto">
        {/* <Image
          src={
            "https://images.pexels.com/photos/2894944/pexels-photo-2894944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="bg"

          className="rounded-md object-cover object-center w-full h-full"
        /> */}
      </div>
    </main>
  );
}

export default EachBlogHeroSection;
