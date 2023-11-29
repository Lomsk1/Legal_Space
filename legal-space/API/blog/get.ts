import { BlogsType } from "@/@types/blog/blog";
import { serverURL } from "@/config/env.config";

export async function getBlogsData(): Promise<BlogsType> {
  const res = await fetch(`${serverURL}api/v1/blog`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
