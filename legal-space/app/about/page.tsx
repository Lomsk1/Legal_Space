import Image from "next/image";
import aboutImage from "../../public/images/about/team.jpg";
const About = () => {
	return (
		<main className="max-w-[95%] md:max-w-[80%] lg:max-w-[70%] flex flex-col justify-center items-center mx-auto gap-y-10  mt-10 text-main-green-light">
			<section className="flex flex-col gap-y-14">
				<div className="text-center">
					<h1 className="text-6xl   leading-relaxed ">
						We're{" "}
						<span className="text-main-green-medium font-bold">
							Legal Space
						</span>
						. A full service legal office
					</h1>
					<Image src={aboutImage} alt="image" className="h-[80dvh] object-cover object-top" objectFit="cover" />
				</div>
				<article className="flex sm:flex-row flex-col gap-y-5 text-center sm:text-left gap-x-10">
					<p className="flex-1 text-4xl">
						<span className="text-main-green-medium font-bold ">
							Legal Space
						</span>{" "}
						is a full-service law firm, based in Georgia.
					</p>
					<p className="flex-[2] text-lg leading-8">
						"Legal Space" - This is the legal area that protects
						your violated rights. You can get legal advice and legal
						services from us in Georgian, English, Turkish and
						Azerbaijani languages. Our team offers both preparation
						of legal documents and representation in all three
						instances of public institutions and courts.
					</p>
				</article>
			</section>

			<div>
				<h2 className="text-5xl underline">
					Meet our{" "}
					<span className="text-main-green-medium">Team</span>
				</h2>

				<div>
					
				</div>
			</div>
		</main>
	);
};

export default About;
