import { getBlogsData } from "@/API/blog/get";
import AdminBlogForm from "@/components/admin/blog/form";
import AdminBlogContentForm from "@/components/admin/blog/form-content";
import BlogTable from "@/components/admin/blog/table";

export default async function Page() {
  const blogsData = await getBlogsData();
  return (
    <>
      <main className="min-h-screen flex flex-col py-20">
        <AdminBlogForm />
        {blogsData?.status === "success" ? (
          <BlogTable blogData={blogsData} />
        ) : (
          <div>No Data Found</div>
        )}
        {/* <AdminBlogContentForm /> */}
      </main>
    </>
  );
}
