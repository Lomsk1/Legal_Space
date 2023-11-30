// import { serverURL } from "@/config/env.config";

// export async function POST(request: Request) {
//   const { blog_id, title, description, lang, blogText } = await request.json();
//   const req = await fetch(`${serverURL}api/v1/blog/content`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       blog_id: blog_id,
//       title: title,
//       description: description,
//       lang: lang,
//       blogText: blogText,
//     }),
//   });

//   const res = await req.json();
//   return Response.json(res);
// }
