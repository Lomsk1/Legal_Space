import { getOneBlogContentData } from "@/API/blogContent/get";
import BlogContentMainSection from "@/components/eachBlog/blogContent";
import EachBlogHeroSection from "@/components/eachBlog/hero";

export default async function Page({ params }: { params: { slug: string } }) {
  const blogData = await getOneBlogContentData({ id: params.slug });
  return (
    <>
      {blogData.status === "success" ? (
        <>
          <EachBlogHeroSection
            title={blogData.data.title}
            image={blogData.data.blog_id.image}
            description={blogData.data.description}
          />
          <BlogContentMainSection blogText={blogData.data.blogText} />
        </>
      ) : (
        <div>No Data Found</div>
      )}
    </>
  );
}
