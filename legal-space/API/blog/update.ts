import { BlogType } from "@/@types/blog/blog";

export async function updateBlog({
  formData,
  id,
}: {
  formData: FormData;
  id: string;
}): Promise<BlogType> {
  const res = await fetch(`/api/blog?id=${id}`, {
    method: "PATCH",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  location.reload();
  return res.json();
}
