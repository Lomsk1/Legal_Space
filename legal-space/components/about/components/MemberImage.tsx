import Image from "next/image";
Image;
type Props = {
  image: { url: any };
  name: string;
};
const MemberImage: React.FC<Props> = ({ image: { url }, name }) => {
  return (
    <div className="flex flex-col mx-auto justify-center  items-center gap-3 border border-transparent rounded-md  duration-500 hover:duration-500 hover:border-main-green-dark p-2">
      {/* Image */}
      <header className="aspect-square w-full  max-h-[500px]">
        <Image
          src={url}
          alt="img"
          className="object-cover object-top aspect-square rounded-t-md"
          width={500}
          height={500}
          loading="lazy"
          quality={100}
        />
      </header>

      {/* Title */}
      <div className="flex flex-col justify-center items-center gap-1">
        <h4 className="capitalize text-xl">{name}</h4>
      </div>

      {/* Line */}
      <div className="h-[2px] w-20 mx-auto bg-main-green-dark my-5" />
    </div>
  );
};

export default MemberImage;
