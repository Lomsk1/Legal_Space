"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { createBlogContent } from "@/API/blogContent/post";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

type FormValues = {
  title: string;
  description: string;
  lang: string;
  blogText: string;
};

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function AdminBlogContentForm({ blogId }: { blogId: string }) {
  const [value, setValue] = useState<string>("");
  const [statusOk, setStatusOk] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const req = await createBlogContent({
      title: data.title,
      description: data.description,
      lang: data.lang,
      blog_id: blogId,
      blogText: value,
    });

    if (req.status === "success") {
      reset();
      setStatusOk("Content Successfully Added");
    }

    if (req.status !== "success") {
      setStatusOk(req.message!);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-[80%] mx-auto"
    >
      <input
        type="text"
        placeholder="Title"
        {...register("title")}
        className="w-full h-8 px-3 outline-none rounded-lg bg-transparent border"
      />
      <textarea
        {...register("description")}
        className="w-full h-8 px-3 outline-none rounded-lg bg-transparent border"
        placeholder="Description"
      />
      <select
        className="w-full h-8 px-3 outline-none rounded-lg bg-transparent border"
        {...register("lang")}
      >
        <option value="geo" className="text-red-600">
          Geo
        </option>
        <option value="eng" className="text-red-600">
          Eng
        </option>
      </select>
      {typeof window !== "undefined" && (
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
          className="mt-32 "
        />
      )}

      <button type="submit">Submit</button>

      {statusOk && statusOk}
    </form>
  );
}

export default AdminBlogContentForm;

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ align: [] }, { color: [] }, { background: [] }],
    ["clean"],
  ],
};

const formats = [
  //'font',
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "align",
  "color",
  "background",
];
