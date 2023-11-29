import SectionTitle from "@/components/title";
import { cookies } from "next/headers";
import BlogContainer from "./container/container";
import { BlogsContentType } from "@/@types/blog/content";

function BlogContentSection({ data, status, result }: BlogsContentType) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <section className="py-12 flex flex-col">
      <SectionTitle
        title={`${lang === "eng" ? "Latest News" : "უახლესი სიახლეები"}`}
      />

      {/* Services Containers */}
      <div className="gap-2 w-[80%] mx-auto flex-col grid grid-cols-1 p-2 max-w-[420px] sm:max-w-none lg:max-w-[1300px] rounded-md md:p-5 bg-main-green-dark">
        {result > 0 ? (
          data.map((blog) => (
            <BlogContainer
              key={blog._id}
              id={blog._id}
              title={blog.title}
              image={blog.blog_id.image}
              description={blog.description}
            />
          ))
        ) : (
          <div>0 Data</div>
        )}
      </div>
    </section>
  );
}

export default BlogContentSection;
