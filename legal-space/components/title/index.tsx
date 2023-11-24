import { GoLaw } from "react-icons/go";

interface PropTypes {
  title: string;
  styleMain?: string;
  styleTitle?: string;
  styleIcon?: string;
  styleLines?: string;
}

const SectionTitle: React.FC<PropTypes> = ({
  title,
  styleIcon,
  styleLines,
  styleMain,
  styleTitle,
}) => {
  return (
    <header className="w-full flex flex-col justify-center items-center py-5 gap-5">
      <h2 className="font-bold text-2xl text-main-green-light md:text-3xl">
        {title}
      </h2>

      {/* Icon */}
      <div className="flex items-center gap-2">
        <div className="h-[2px] w-10 bg-white rounded-r-full" />
        <GoLaw className="text-2xl md:text-3xl text-main-green-light" />
        <div className="h-[2px] w-10 bg-white rounded-l-full" />
      </div>
    </header>
  );
};

export default SectionTitle;
