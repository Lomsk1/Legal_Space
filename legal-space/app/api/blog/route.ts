import { serverURL } from "@/config/env.config";
import { type NextRequest } from "next/server";

export async function POST(request: Request) {
  let formData = await request.formData();

  const req = await fetch(`${serverURL}api/v1/blog`, {
    method: "POST",
    body: formData,
  });

  const res = await req.json();

  return Response.json(res);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const req = await fetch(`${serverURL}api/v1/blog/${id}`, {
    method: "DELETE",
  });

  const res = await req.json();

  return Response.json(res);
}

export async function PATCH(request: NextRequest) {
  let formData = await request.formData();
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const req = await fetch(`${serverURL}api/v1/blog/${id}`, {
    method: "PATCH",
    body: formData,
  });

  const res = await req.json();

  return Response.json(res);
}
