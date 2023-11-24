import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Socials() {
  return (
    <>
      <Link href={"https://www.facebook.com/qetiberidze11"} target="_blank">
        <FaFacebook className="text-xl hover:text-main-green-light duration-300" />
      </Link>
      <Link
        href={"https://www.instagram.com/qetiiberidze/"}
        target="_blank"
        className="w-fit h-fit"
      >
        <FaInstagramSquare className="text-xl hover:text-main-green-light duration-300" />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/qeti-beridze-140b201a4/"}
        target="_blank"
      >
        <FaLinkedin className="text-xl hover:text-main-green-light duration-300 h-fit" />
      </Link>
    </>
  );
}

export default Socials;
