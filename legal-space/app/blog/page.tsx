import { getBlogsContentData } from "@/API/blogContent/get";
import BlogContentSection from "@/components/blog/blogs";
import BlogHeroSection from "@/components/blog/hero";

export default async function Page() {
  const blogsData = await getBlogsContentData();
  return (
    <>
      {/* <BlogHeroSection />
      {blogsData.status === "success" ? (
        <BlogContentSection
          status={blogsData.status}
          data={blogsData.data}
          result={blogsData.result}
        />
      ) : (
        <div>No Data Found</div>
      )} */}
      <h1>This Page is Under the Construction</h1>
    </>
  );
}
