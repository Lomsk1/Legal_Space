import { cookies } from "next/headers";
import { FaHome } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsPiggyBank } from "react-icons/bs";
import { IoMdPaper } from "react-icons/io";
import { MdFamilyRestroom } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";
import { GiIsland } from "react-icons/gi";
import { GiHandcuffs } from "react-icons/gi";

function PracticeAreasContainer() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <>
      {lang === "eng"
        ? practiceAreaJson?.eng.map((ar, i) => (
            <div
              key={i}
              className="flex items-center gap-3 xl:gap-5 bg-main-green-medium px-2 py-1 rounded-sm"
            >
              {ar.icon}
              <p className="xl:text-xl w-full">{ar.title}</p>
            </div>
          ))
        : practiceAreaJson?.geo.map((ar, i) => (
            <div
              key={i}
              className="flex items-center gap-3 xl:gap-5 bg-main-green-medium rounded-sm px-2 py-1"
            >
              {ar.icon}
              <p className="xl:text-xl w-full">{ar.title}</p>
            </div>
          ))}
    </>
  );
}

export default PracticeAreasContainer;

const practiceAreaJson = {
  geo: [
    {
      title: "სახელშეკრულებო სამართალი",
      icon: <FaHome className="text-xl min-w-[20px]" />,
    },
    {
      title: "სამეზობლო სამართალი",
      icon: <FaPerson className="text-xl min-w-[20px]" />,
    },
    {
      title: "ვალდებულებითი სამართალი",
      icon: <FaRegMoneyBillAlt className="text-xl min-w-[20px]" />,
    },
    {
      title: "საბანკო სამართალი",
      icon: <BsPiggyBank className="text-xl min-w-[20px]" />,
    },
    {
      title: "ინტელექტუალური საკუთრების სამართალი",
      icon: <IoMdPaper className="text-xl min-w-[20px]" />,
    },
    {
      title: "საოჯახო სამართალი",
      icon: <MdFamilyRestroom className="text-xl min-w-[20px]" />,
    },
    {
      title: "მემკვიდრეობითი სამართალი",
      icon: <MdFamilyRestroom className="text-xl min-w-[20px]" />,
    },
    {
      title: "ხელშეკრულების შედგენა",
      icon: <IoMdPaper className="text-xl min-w-[20px]" />,
    },
    {
      title: "შრომის სამართალი",
      icon: <FaPerson className="text-xl min-w-[20px]" />,
    },
    {
      title: "ადმინისტრაციული სამართალი",
      icon: <FaBuildingColumns className="text-xl min-w-[20px]" />,
    },
    {
      title: "უძრავი ქონება და პრივატიზაცია",
      icon: <FaBuildingColumns className="text-xl min-w-[20px]" />,
    },
    {
      title: "მიწის რეგისტრაცია",
      icon: <GiIsland className="text-xl min-w-[20px]" />,
    },
    {
      title: "სისხლის სამართალი",
      icon: <GiHandcuffs className="text-xl min-w-[20px]" />,
    },
    {
      title: "მედიაცია",
      icon: <FaPerson className="text-xl min-w-[20px]" />,
    },
  ],
  eng: [
    {
      title: "Contract Law",
      icon: <FaHome className="text-xl min-w-[20px]" />,
    },
    {
      title: "Neighborhood Law",
      icon: <FaPerson className="text-xl min-w-[20px]" />,
    },
    {
      title: "Obligation Law",
      icon: <FaRegMoneyBillAlt className="text-xl min-w-[20px]" />,
    },
    {
      title: "Banking Law",
      icon: <BsPiggyBank className="text-xl min-w-[20px]" />,
    },
    {
      title: "Intellectual Property Law",
      icon: <IoMdPaper className="text-xl min-w-[20px]" />,
    },
    {
      title: "Family Law",
      icon: <MdFamilyRestroom className="text-xl min-w-[20px]" />,
    },
    {
      title: "Inheritance Law",
      icon: <MdFamilyRestroom className="text-xl min-w-[20px]" />,
    },
    {
      title: "Contract Drafting",
      icon: <IoMdPaper className="text-xl min-w-[20px]" />,
    },
    {
      title: "Labor Law",
      icon: <FaPerson className="text-xl min-w-[20px]" />,
    },
    {
      title: "Administrative Law",
      icon: <FaBuildingColumns className="text-xl min-w-[20px]" />,
    },
    {
      title: "Real Estate and Privatization",
      icon: <FaBuildingColumns className="text-xl min-w-[20px]" />,
    },
    {
      title: "Land Registration",
      icon: <GiIsland className="text-xl min-w-[20px]" />,
    },
    {
      title: "Criminal Law",
      icon: <GiHandcuffs className="text-xl min-w-[20px]" />,
    },
    {
      title: "Mediation",
      icon: <FaPerson className="text-xl min-w-[20px]" />,
    },
  ],
};
