import Image from "next/image";
import teamImage from "@/public/images/team.jpg";

function HomeAboutSection() {
  return (
    <section className="w-full pt-16 pb-28 bg-main-green-dark">
      <div className="p-5 w-[90%] max-w-[480px] mx-auto bg-main-green-medium flex flex-col gap-10 md:flex-row-reverse md:max-w-[1280px] rounded-lg">
        {/* About */}
        <aside className="md:w-1/2">
          <h2 className="text-3xl">About Legal Space</h2>

          {/* Line */}
          <div className="h-1 w-16 mt-2 bg-main-green-dark" />

          {/* Description */}
          <p className="mt-7 tracking-wider font-light">
            ,,Legal Space” - This is the legal area that protects your violated
            rights. You can get legal advice and legal services from us in
            Georgian, English, Turkish and Azerbaijani languages. Our team
            offers both preparation of legal documents and representation in all
            three instances of public institutions and courts.
          </p>

          <p className="mt-16 text-xl italic">
            We are speaking on <span>5</span> languages:{" "}
            <span className="not-italic underline">English</span>,{" "}
            <span className="not-italic underline">ქართულ</span>,{" "}
            <span className="not-italic underline">Armenian</span>,{" "}
            <span className="not-italic underline">Turkish</span>,{" "}
            <span className="not-italic underline">Azerbaijan</span>,
          </p>
        </aside>
        {/* <span>English</span>,{" "}
            <span>ქართული</span>, <span>Armenian</span>, <span>Azerbaijan</span>
            , <span>Turkish</span> */}
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
