"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import { createBlogContent } from "@/API/blogContent/post";

type FormValues = {
  title: string;
  description: string;
  lang: string;
  blogText: string;
};

function AdminBlogContentForm() {
  const [value, setValue] = useState<string>("");

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await createBlogContent({
      title: data.title,
      description: data.description,
      lang: data.lang,
      blog_id: "656645d043c7610e4494a1fb",
      blogText: value,
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-[600px] mx-auto"
    >
      <input
        type="text"
        placeholder="Title"
        {...register("title")}
        className="text-red-900"
      />
      <textarea
        {...register("description")}
        className="text-red-900"
        placeholder="Description"
      />
      <select className="text-red-900" {...register("lang")}>
        <option value="geo">Geo</option>
        <option value="eng">Eng</option>
      </select>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        className="mt-32"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AdminBlogContentForm;

const modules = {
  toolbar: [
    //[{ 'font': [] }],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
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
  "image",
  "align",
  "color",
  "background",
];
