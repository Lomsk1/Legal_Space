import { BlogContentType } from "@/@types/blog/content";
import { cookies } from "next/headers";
import Image from "next/image";
import defaultImage from "@/public/images/avatar_default.jpg";

function EachBlogHeroSection({
  title,
  image,
  description,
}: {
  title: string;
  image?: { url: string; public_id: string };
  description: string;
}) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <main className="w-full flex flex-col py-10">
      <h1 className="max-w-[1000px] my-20 text-center font-semibold text-3xl mx-auto">
        {title}
      </h1>

      {/* Image Container */}
      <div className="w-[90%] h-screen mx-auto">
        <Image
          src={image ? image.url : defaultImage}
          alt="bg"
          className="rounded-md object-cover object-center w-full h-full"
          width={1500}
          height={1500}
        />
      </div>

      {/* Description */}
      <div className="w-[90%] mx-auto my-14">
        <p>{description}</p>
      </div>
    </main>
  );
}

export default EachBlogHeroSection;
