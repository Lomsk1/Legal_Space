import BlogContentSection from "@/components/blog/blogs";
import BlogHeroSection from "@/components/blog/hero";

export default async function Page() {
  return (
    <>
      <BlogHeroSection />
      <BlogContentSection />
    </>
  );
}
