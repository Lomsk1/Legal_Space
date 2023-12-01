/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import aboutImage from "@/public/images/books.jpg";
import { cookies } from "next/headers";

const HeroSection: React.FC = () => {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <section className="flex flex-col gap-y-14 md:px-10">
      <div className="text-center">
        <h1 className="text-6xl   leading-relaxed ">
          We're{" "}
          <span className="text-main-green-medium font-bold">Legal Space</span>.
          {lang === "eng"
            ? "A full service legal office"
            : "სრული იურიდიული მომსახურება"}
        </h1>
        <Image
          src={aboutImage}
          alt="image"
          className="h-[60dvh] md:h-[100dvh] object-cover object-center"
        />
      </div>
      <article className="flex sm:flex-row flex-col gap-y-5 text-center sm:text-left gap-x-10">
        <p className="flex-1 text-4xl">
          <span className="text-main-green-medium font-bold ">Legal Space</span>{" "}
          {lang === "eng"
            ? " is a full-service law firm, based in Georgia."
            : "სრული იურიდიული მომსახურება საქართველოს მასშტაბით."}
        </p>
        <p className="flex-[2] text-lg leading-8">
          {lang === "eng"
            ? '  "Legal Space" - This is the legal area that protects your violated           rights. You can get legal advice and legal services from us in Georgian, English, Turkish and Azerbaijani languages. Our team offers both preparation of legal documents and representation in all three instances of public institutions and courts.'
            : ",,Legal Space “- ესაა სამართლებრივი სივრცე, რომელიც იცავს თქვენს დარღვეულ უფლებებს. ჩვენთან სამართლებრივი კონსულტაცია და იურიდიული მომსახურება შეგიძლიათ მიიღოთ როგორც ქართულ, ასევე ინგლისურ, თურქულ და აზერბაიჯანულ ენებზე. ჩვენი გუნდი გთავაზობთ როგორც იურდიული დოკუმენტაციის მომზადებას, ასევე წარმომადგენლობას საჯარო დაწესებულებებსა და სასამართლოს სამივე ინსტანციაში. "}
        </p>
      </article>
    </section>
  );
};

export default HeroSection;
