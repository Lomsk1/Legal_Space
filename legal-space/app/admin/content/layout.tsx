import { getUserFunction } from "@/API/auth/get";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getUser = await getUserFunction();
  if (getUser?.status !== "success") redirect("/");
  return <section>{children}</section>;
}
