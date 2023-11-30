import Link from "next/link";
import FooterInfoContainer from "./container";
import { cookies } from "next/headers";
import Form from "./components/Form";

function Footer() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <footer className="bg-main-green-dark items-center flex flex-col pt-10 pb-5">
      {/* Info */}
      <div>
        <Form lang={lang} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 gap-6 2xl:max-w-[1300px] 2xl:mx-auto">
        {/* About */}
        <FooterInfoContainer
          title={`${lang === "eng" ? "About" : "შესახებ"}`}
          description={[
            `${
              lang === "eng"
                ? "This is the legal area  that protects your violated rights. You can get legal advice and legal services from us in Georgian, English, Turkish and Azerbaijani languages."
                : "ეს არის სამართლებრივი სივრცე, რომელიც იცავს თქვენს დარღვეულ უფლებებს. ჩვენთან სამართლებრივი კონსულტაცია და იურიდიული მომსახურება შეგიძლიათ მიიღოთ როგორც ქართულ, ასევე ინგლისურ, თურქულ და აზერბაიჯანულ ენებზე."
            }`,
          ]}
        />

        {/* Working Hours */}
        <FooterInfoContainer
          title={`${lang === "eng" ? "Working Hours" : "სამუშაო საათები"}`}
          description={[
            `${
              lang === "eng"
                ? "Monday - Friday: 09:00 - 06:00"
                : "ორშაბათი - პარასკევი : 09:00 - 06:00"
            }`,
            `${
              lang === "eng"
                ? "Saturday - Sunday: Closed"
                : "შაბათი - კვირა: დაკეტილია"
            }`,
          ]}
        />

        {/* Address */}
        <FooterInfoContainer
          title={`${lang === "eng" ? "Address" : "მისამართი"}`}
          description={[
            `${
              lang === "eng"
                ? "Tbilisi, Navtlugi street N-10, block N-3, flat N-13"
                : "თბილისი, ნავთლუღს ქ. N-10, კორპუსი N-3, ბინა N-13"
            }`,
          ]}
        />

        {/* Contact */}
        <FooterInfoContainer
          title={`${lang === "eng" ? "Contact" : "საკონტაქტო"}`}
          description={["legalspacelaw@gmail.com", "+995 555 393 341"]}
        />
      </div>

      {/* Line */}
      <div className="w-full bg-white my-10 h-[1px]" />

      {/* Copyright  */}
      <div>
        <p className="text-center">
          Copyright 2023{" "}
          <span>
            <Link
              href={"https://www.zappydev.pro"}
              target="_blank"
              className="font-bold underline"
            >
              Zappy
            </Link>
          </span>
          , All Right Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
