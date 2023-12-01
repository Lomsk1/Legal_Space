import Image from "next/image";
import teamImage from "@/public/images/team.jpg";
import { cookies } from "next/headers";

function HomeAboutSection() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "geo";
  return (
    <section className="w-full pt-16 pb-28 bg-main-green-dark">
      <div className="p-5 w-[90%] max-w-[480px] mx-auto bg-main-green-medium flex flex-col gap-10 md:flex-row-reverse md:max-w-[1280px] rounded-lg">
        {/* About */}
        <aside className="md:w-1/2">
          <h2 className="text-3xl">
            {lang === "eng" ? "About Legal Space" : "ჩვენს შესახებ"}
          </h2>

          {/* Line */}
          <div className="h-1 w-16 mt-2 bg-main-green-dark" />

          {/* Description */}
          <p className="mt-7 tracking-wider font-light">
            {lang === "eng"
              ? `,,Legal Space” - This is the legal area that protects your violated
            rights. You can get legal advice and legal services from us in
            Georgian, English, Turkish and Azerbaijani languages. Our team
            offers both preparation of legal documents and representation in all
            three instances of public institutions and courts.`
              : ",,Legal Space “- ესაა სამართლებრივი სივრცე, რომელიც იცავს თქვენს დარღვეულ უფლებებს. ჩვენთან სამართლებრივი კონსულტაცია და იურიდიული მომსახურება შეგიძლიათ მიიღოთ როგორც ქართულ, ასევე ინგლისურ, თურქულ და აზერბაიჯანულ ენებზე. ჩვენი გუნდი გთავაზობთ როგორც იურდიული დოკუმენტაციის მომზადებას, ასევე წარმომადგენლობას საჯარო დაწესებულებებსა და სასამართლოს სამივე ინსტანციაში."}
          </p>

          <p className="mt-16 text-xl">
            {lang === "eng" ? "We are speaking on" : "ჩვენ ვსაუბრობთ"}{" "}
            <span className="font-bold">5</span>{" "}
            {lang === "eng" ? "languages" : "ენაზე"}:{" "}
            <span className=" font-bold">English</span>,{" "}
            <span className=" font-bold">ქართულ</span>,{" "}
            <span className=" font-bold">русский</span>,{" "}
            <span className=" font-bold">Turkish</span>,{" "}
            <span className=" font-bold">Azerbaijan</span>
          </p>
        </aside>

        {/* Image */}
        <aside className="aspect-[1/1] w-full  md:w-1/2">
          <Image
            src={teamImage}
            alt="team"
            className="w-full aspect-[1/1] object-cover object-top rounded-md"
          />
        </aside>
      </div>
    </section>
  );
}

export default HomeAboutSection;
