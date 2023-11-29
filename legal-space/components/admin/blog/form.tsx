"use client";

import { createBlog } from "@/API/blog/post";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  title: string;
  image: File[];
};

function AdminBlogForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("image", data.image[0]);

    await createBlog({ formData: formData });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-[600px] mx-auto gap-5"
    >
      <input
        type="text"
        placeholder="Title"
        {...register("title")}
        required
        className="w-full h-8 px-3 outline-none rounded-lg bg-transparent border"
      />
      <input type="file" {...register("image")} required />
      <button type="submit" className="border h-fit w-fit py-2 px-5 mx-auto">
        Submit
      </button>
    </form>
  );
}

export default AdminBlogForm;
