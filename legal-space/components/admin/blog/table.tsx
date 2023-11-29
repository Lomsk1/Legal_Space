"use client";

import { BlogsType } from "@/@types/blog/blog";
import { deleteBlog } from "@/API/blog/del";
import Image from "next/image";
import AdminBlogUpdateForm from "./blog-update-form";
import { useState } from "react";
import AdminBlogContentForm from "./form-content";

function BlogTable({ blogData }: { blogData: BlogsType }) {
  const [updateBlog, setUpdateBlog] = useState<string | null>(null);
  const [addContent, setAddContent] = useState<string | null>(null);

  return (
    <>
      <table className="bg-red-900 border-collapse my-16 border">
        <thead>
          <tr className="">
            <th className="border">Title</th>
            <th className="border">Image</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
          {blogData.data.map((blog) => (
            <tr key={blog._id}>
              <td className="border text-center">{blog.title}</td>
              <td className="border p-1">
                <Image
                  src={blog.image.url}
                  alt="blog"
                  width={100}
                  height={100}
                  priority
                  className="w-[100px] h-[100px] mx-auto"
                />
              </td>

              <td className="border">
                <button
                  className="w-fit h-fit px-3 py-2 border"
                  onClick={() => {
                    setUpdateBlog(blog._id);
                    setAddContent(null);
                  }}
                >
                  Update
                </button>
                <button
                  className="w-fit h-fit px-3 py-2 border"
                  onClick={() => deleteBlog({ id: blog._id })}
                >
                  Del
                </button>
                <button
                  className="w-fit h-fit px-3 py-2 border"
                  onClick={() => {
                    setAddContent(blog._id);
                    setUpdateBlog(null);
                  }}
                >
                  Add Content
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {updateBlog && <AdminBlogUpdateForm id={updateBlog} />}
      {addContent && <AdminBlogContentForm />}
    </>
  );
}

export default BlogTable;
