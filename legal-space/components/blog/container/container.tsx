import Link from "next/link";
import "./style.css";
import Image from "next/image";

function BlogContainer() {
  return (
    <div className="flex flex-col md:flex-row p-2 rounded-md duration-500 hover:duration-500 hover:bg-main-green-medium">
      {/* Image */}
      <aside className="aspect-square sm:aspect-[3/2] md:aspect-square w-full md:max-w-[350px] 2xl:max-w-[530px]">
        <Image
          src={
            "https://images.pexels.com/photos/2894944/pexels-photo-2894944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="bg"
          width={1000}
          height={1000}
          className="aspect-square rounded-md object-cover object-center"
        />
      </aside>

      {/* Info */}
      <aside className="w-full gap-12 flex flex-col p-2 md:p-6 tracking-wider">
        <h3 className="text-xl text-center md:text-left">Title</h3>

        <p className="dotted_text text-center  md:text-left font-light tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos
          iusto voluptates. Dicta ab quaerat nam! In nesciunt, consequatur amet,
          iure sapiente, alias impedit delectus voluptate repellendus fugiat
          doloribus debitis fugit placeat beatae quia corporis a? Assumenda
          deleniti cupiditate, accusantium nostrum ipsam eveniet, doloremque
          voluptatem velit inventore temporibus aperiam veritatis!
        </p>
        <Link href={""} className="mx-auto md:mx-0 duration-500 hover:duration-500 hover:border-white border border-transparent h-fit w-fit py-2 px-4 rounded-lg">
          Read More
        </Link>
      </aside>
    </div>
  );
}

export default BlogContainer;
