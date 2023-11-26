import Link from "next/link";
import { cookies } from "next/headers";

interface PropTypes {
  href: string;
  styles?: string;
}

const ViewMoreLink: React.FC<PropTypes> = ({ href, styles }) => {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <Link
      href={href}
      className={`mx-auto my-16 w-fit h-fit bg-main-green-medium text-main-green-light duration-300 hover:duration-300 hover:text-white hover:bg-transparent hover:border-main-green-medium border border-transparent rounded-md px-6 py-3 ${styles}`}
    >
      {lang === "eng" ? "View More" : "მეტი"}
    </Link>
  );
};

export default ViewMoreLink;
