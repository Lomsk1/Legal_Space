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
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      blog_id: blog_id,
      blogText: blogText,
      lang: lang,
      title: title,
      description: description,
    }),
  });

  return res.json();
}
