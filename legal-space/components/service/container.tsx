import { GiHandcuffs } from "react-icons/gi";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { FaBuildingColumns } from "react-icons/fa6";
import { cookies } from "next/headers";

interface PropTypes {
  title: string;
  description: string;
}

const ServiceContainer: React.FC<PropTypes> = ({
  title,
  description,
}) => {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <aside className="flex flex-col w-full p-2 gap-2 max-w-[330px] aspect-square items-center">
      {/* Icon */}
      <div className="text-7xl w-fit h-fit p-3 border border-white mx-auto lg:text-8xl">
        {lang === "geo" && (
          <>
            {title.startsWith("სის") && <GiHandcuffs />}
            {title.startsWith("ადმ") && <FaBuildingColumns />}
            {title.startsWith("სამ") && <LiaSuitcaseSolid />}
          </>
        )}
        {lang === "eng" && (
          <>
            {title.startsWith("Crim") && <GiHandcuffs />}
            {title.startsWith("Adm") && <FaBuildingColumns />}
            {title.startsWith("Civ") && <LiaSuitcaseSolid />}
          </>
        )}

        {/* {icon} */}
      </div>

      <h4 className="text-2xl font-bold text-center">{title}</h4>

      <p className="text-xs text-center lg:text-sm">{description}</p>
    </aside>
  );
};

export default ServiceContainer;
