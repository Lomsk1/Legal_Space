import { BlogContentType, BlogsContentType } from "@/@types/blog/content";
import { serverURL } from "@/config/env.config";

export async function getBlogsContentData(): Promise<BlogsContentType> {
  const res = await fetch(`${serverURL}api/v1/blog/content`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getOneBlogContentData({id}:{id:string}): Promise<BlogContentType> {
  const res = await fetch(`${serverURL}api/v1/blog/content/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
