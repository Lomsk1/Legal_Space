import { ReactNode } from "react";

interface PropTypes {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceContainer: React.FC<PropTypes> = ({
  icon,
  title,
  description,
}) => {
  return (
    <aside className="flex flex-col w-full p-2 gap-2 max-w-[330px] aspect-square justify-center items-center">
      {/* Icon */}
      <div className="bg-yellow-700 text-7xl w-fit h-fit p-3 mx-auto lg:text-8xl">
        {icon}
      </div>

      <h4 className="text-2xl font-bold text-center">{title}</h4>

      <p className="text-xs text-center lg:text-sm">{description}</p>
    </aside>
  );
};

export default ServiceContainer;
