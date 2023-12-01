import { BlogContentType, BlogsContentType } from "@/@types/blog/content";
import { serverURL } from "@/config/env.config";
import { cookies } from "next/headers";

export async function getBlogsContentData(): Promise<BlogsContentType> {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  const res = await fetch(`${serverURL}api/v1/blog/content?lang=${lang}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getOneBlogContentData({
  id,
}: {
  id: string;
}): Promise<BlogContentType> {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  const res = await fetch(
    `${serverURL}api/v1/blog/content/${id}?lang=${lang}`,
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
