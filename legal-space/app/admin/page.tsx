import { getUserFunction } from "@/API/auth/get";
import LoginForm from "@/components/admin/login/form";
import { redirect } from "next/navigation";

export default async function Page() {
  const getUser = await getUserFunction();
  if (getUser?.status === "success") redirect("/admin/content/blog");
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <LoginForm />
    </section>
  );
}
