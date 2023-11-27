import SectionTitle from "@/components/title";
import { cookies } from "next/headers";
import BlogContainer from "./container/container";

function BlogContentSection() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <section className="py-12 flex flex-col">
      <SectionTitle
        title={`${lang === "eng" ? "Latest News" : "უახლესი სიახლეები"}`}
      />

      {/* Services Containers */}
      <div className="gap-2 w-[80%] mx-auto flex-col grid grid-cols-1 p-2 max-w-[420px] sm:max-w-none lg:max-w-[1300px] rounded-md md:p-5 bg-main-green-dark">
        <BlogContainer />
        <BlogContainer />
        <BlogContainer />
      </div>
    </section>
  );
}

export default BlogContentSection;
