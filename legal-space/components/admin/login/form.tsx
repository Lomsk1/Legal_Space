"use client";

import { loginFunc } from "@/API/auth/login";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

type FormValues = {
  email: string;
  password: string;
};
function LoginForm() {
  const [statusOk, setStatusOk] = useState<string | null>(null);
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const req = await loginFunc({ email: data.email, password: data.password });
    if (req.status === "fail") {
      setStatusOk(req.message);
    }
    if (req.status === "success") {
      Cookies.set("jwt", req.token, {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      });
      router.push("/admin/content/blog");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-[600px] mx-auto gap-5"
    >
      <input
        type="email"
        placeholder="Email"
        {...register("email")}
        required
        className="w-full h-8 px-3 outline-none rounded-lg bg-transparent border"
      />
      <input
        type="password"
        {...register("password")}
        required
        placeholder="Password"
        className="w-full h-8 px-3 outline-none rounded-lg bg-transparent border"
      />
      <button type="submit" className="border h-fit w-fit py-2 px-5 mx-auto">
        Submit
      </button>

      {statusOk}
    </form>
  );
}

export default LoginForm;
