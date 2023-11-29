import Link from "next/link";
import "./style.css";
import Image from "next/image";
import defaultImage from "@/public/images/avatar_default.jpg";

interface PropTypes {
  image?: {
    url: string;
    public_id: string;
  };
  title: string;
  description: string;
  id: string;
}

function BlogContainer({ image, description, title, id }: PropTypes) {
  return (
    <div className="flex flex-col md:flex-row p-2 rounded-md duration-500 hover:duration-500 hover:bg-main-green-medium">
      {/* Image */}
      <aside className="aspect-square sm:aspect-[3/2] md:aspect-square w-full md:max-w-[350px] 2xl:max-w-[530px]">
        <Image
          src={image ? image.url : defaultImage}
          alt="bg"
          width={1000}
          height={1000}
          className="aspect-square rounded-md object-cover object-center"
        />
      </aside>

      {/* Info */}
      <aside className="w-full gap-12 flex flex-col p-2 md:p-6 tracking-wider">
        <h3 className="text-xl text-center md:text-left">{title}</h3>

        <p className="dotted_text text-center  md:text-left font-light tracking-wider">
          {description}
        </p>
        <Link
          href={`/blog/${id}`}
          className="mx-auto md:mx-0 duration-500 hover:duration-500 hover:border-white border border-transparent h-fit w-fit py-2 px-4 rounded-lg"
        >
          Read More
        </Link>
      </aside>
    </div>
  );
}

export default BlogContainer;
