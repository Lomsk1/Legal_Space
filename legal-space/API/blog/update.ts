import { BlogType } from "@/@types/blog/blog";
import { serverURLClient } from "@/config/env.config";

export async function updateBlog({
  formData,
  id,
}: {
  formData: FormData;
  id: string;
}): Promise<BlogType> {
  const res = await fetch(`${serverURLClient}api/v1/blog/${id}`, {
    method: "PATCH",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  location.reload();
  return res.json();
}
