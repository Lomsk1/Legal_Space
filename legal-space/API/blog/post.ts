import { BlogType } from "@/@types/blog/blog";
import { serverURLClient } from "@/config/env.config";

export async function createBlog({
  formData,
}: {
  formData: FormData;
}): Promise<BlogType> {
  const res = await fetch(`${serverURLClient}api/v1/blog`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
