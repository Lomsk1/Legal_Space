import { AttorneysTypes } from "@/@types/attorney/attorney";
import { serverURL } from "@/config/env.config";
import { cookies } from "next/headers";

export async function getAttorneysData(): Promise<AttorneysTypes> {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";

  const res = await fetch(`${serverURL}api/v1/attorney?lang=${lang}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
