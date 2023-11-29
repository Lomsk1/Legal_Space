import { BlogType } from "@/@types/blog/blog";

export async function createBlog({
  formData,
}: {
  formData: FormData;
}): Promise<BlogType> {
  const res = await fetch(`/api/blog`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
