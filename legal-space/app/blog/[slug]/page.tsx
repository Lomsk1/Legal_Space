import { getOneBlogContentData } from "@/API/blogContent/get";
import EachBlogHeroSection from "@/components/eachBlog/hero";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const blogData = await getOneBlogContentData({ id: id });
  return (
    <>
      {blogData.status === "success" ? (
        <EachBlogHeroSection title={blogData.data.title} />
      ) : (
        <div>No Data Found</div>
      )}
      <h1>This Page is Under the Construction</h1>
    </>
  );
}
