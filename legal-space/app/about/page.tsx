import { getAttorneysData } from "@/API/attorney/get";
import HeroSection from "@/components/about/HeroSection";
import MeetOurTeam from "@/components/about/MeetOurTeam";
const About = async () => {
  const attorneyData = await getAttorneysData();
  return (
    <main className="flex flex-col justify-center items-center mx-auto gap-y-32  mt-10  text-main-green-light overflow-x-hidden">
      <HeroSection />
      {attorneyData.status === "success" ? (
        <MeetOurTeam members={attorneyData.data} />
      ) : (
        <div>No Data Found</div>
      )}
    </main>
  );
};

export default About;
