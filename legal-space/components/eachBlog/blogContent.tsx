import parse from "html-react-parser";

function BlogContentMainSection({ blogText }: { blogText: string }) {
  return (
    <section className="py-12 px-5 bg-main-green-medium">
      {parse(blogText)}
    </section>
  );
}

export default BlogContentMainSection;
