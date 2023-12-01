import LoaderComponent from "@/components/loader";

export default function Loading() {
  return (
    <section className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-black z-[500]">
      <LoaderComponent />
    </section>
  );
}
