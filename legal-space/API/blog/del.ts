import { serverURLClient } from "@/config/env.config";

export async function deleteBlog({ id }: { id: string }): Promise<void> {
  const res = await fetch(`${serverURLClient}api/v1/blog/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ id: id }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  location.reload();
  return res.json();
}
