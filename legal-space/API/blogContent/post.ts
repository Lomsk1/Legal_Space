import { BlogContentType } from "@/@types/blog/content";
import { serverURLClient } from "@/config/env.config";

export async function createBlogContent({
  title,
  description,
  lang,
  blogText,
  blog_id,
}: {
  title: string;
  description: string;
  lang: string;
  blog_id: string;
  blogText: string;
}): Promise<BlogContentType> {
  const res = await fetch(`${serverURLClient}api/v1/blog/content`, {
    method: "POST",
    body: JSON.stringify({
      blog_id: blog_id,
      blogText: blogText,
      lang: lang,
      title: title,
      description: description,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
