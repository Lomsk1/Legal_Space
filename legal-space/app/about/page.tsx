import HeroSection from "@/components/about/HeroSection";
import MeetOurTeam from "@/components/about/MeetOurTeam";
const About = () => {
	return (
		<main className="max-w-[95%] md:max-w-[80%] lg:max-w-[70%] flex flex-col justify-center items-center mx-auto gap-y-32  mt-10  text-main-green-light">
			<HeroSection />
			<MeetOurTeam />
		</main>
	);
};

export default About;
