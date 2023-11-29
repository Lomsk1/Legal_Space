"use client";

import { updateBlog } from "@/API/blog/update";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  title: string;
  image: File[];
};

function AdminBlogUpdateForm({ id }: { id: string }) {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData = new FormData();
    if (data.title) formData.append("title", data.title);
    if (data.image[0]) formData.append("image", data.image[0]);

    await updateBlog({ formData: formData, id: id });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-[600px] mx-auto gap-5"
    >
      <input
        type="text"
        placeholder="Update Title"
        {...register("title")}
        className="w-full h-8 px-3 outline-none rounded-lg bg-transparent border"
      />
      <input type="file" {...register("image")} />
      <button type="submit" className="border h-fit w-fit py-2 px-5 mx-auto">
        Submit
      </button>
    </form>
  );
}

export default AdminBlogUpdateForm;
