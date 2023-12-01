import { BlogType } from "@/@types/blog/blog";
import { serverURLClient } from "@/config/env.config";

export async function loginFunc({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const res = await fetch(`${serverURLClient}api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });

  return res.json();
}
