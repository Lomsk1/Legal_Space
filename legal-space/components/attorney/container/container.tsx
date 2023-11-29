import Image from "next/image";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

interface PropTypes {
  name: string;
  title: string;
  image?: {
    public_id: string;
    url: string;
  };
  defaultAvatar: string;
  description: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
}

function AttorneyContainer({
  name,
  title,
  image,
  description,
  defaultAvatar,
  instagram,
  facebook,
  linkedin,
}: PropTypes) {
  return (
    <div className="flex flex-col gap-3 border border-transparent rounded-md duration-500 hover:duration-500 hover:border-main-green-dark p-2">
      {/* Image */}
      <header className="aspect-square w-full">
        <Image
          src={image ? image.url : defaultAvatar}
          alt="img"
          className="object-cover object-top aspect-square rounded-t-md"
          width={500}
          height={500}
          loading="lazy"
          quality={100}
          placeholder="blur"
          blurDataURL={defaultAvatar}
        />
      </header>

      {/* Title */}
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="uppercase text-xs">{title}</p>
        <h4 className="capitalize text-xl">{name}</h4>
        <aside className="flex gap-3 items-center mt-2 text-main-green-light">
          {facebook && (
            <Link
              href={facebook}
              target="_blank"
              className="duration-300 hover:duration-300 hover:text-white"
            >
              <IoLogoFacebook />
            </Link>
          )}
          {instagram && (
            <Link
              href={instagram}
              target="_blank"
              className="duration-300 hover:duration-300 hover:text-white"
            >
              <RiInstagramFill />
            </Link>
          )}
          {linkedin && (
            <Link
              href={linkedin}
              target="_blank"
              className="duration-300 hover:duration-300 hover:text-white"
            >
              <FaLinkedin />
            </Link>
          )}
        </aside>
      </div>

      {/* Line */}
      <div className="h-[2px] w-20 mx-auto bg-main-green-dark my-5" />

      {/* Description */}
      <footer className="text-center">{description}</footer>
    </div>
  );
}

export default AttorneyContainer;
