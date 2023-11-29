export async function deleteBlog({ id }: { id: string }): Promise<void> {
  const res = await fetch(`/api/blog`, {
    method: "DELETE",
    body: JSON.stringify({ id: id }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  location.reload();
  return res.json();
}
