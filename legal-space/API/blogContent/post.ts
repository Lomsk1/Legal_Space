import { BlogContentType } from "@/@types/blog/content";

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
  const res = await fetch(`/api/blogContent`, {
    method: "POST",
    body: JSON.stringify({
      blog_id: blog_id,
      blogText: blogText,
      lang: lang,
      title: title,
      description: description,
    }),
  });

  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
