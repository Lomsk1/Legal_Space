import { serverURL } from "@/config/env.config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface UserType {
  status: "success" | "fail";
  data: {
    _id: string;
    fullName: string;
    email: string;
    role: string;
  };
}

export const getUserFunction = async (): Promise<UserType | null> => {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value;
  if (!token) {
    return null;
  }

  const res = await fetch(`${serverURL}api/v1/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await res.json();

  return result;
};
