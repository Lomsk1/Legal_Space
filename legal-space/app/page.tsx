import { getAttorneysData } from "@/API/attorney/get";
import { getServicesData } from "@/API/services/get";
import HomeAboutSection from "@/components/home/about";
import HomeAttorney from "@/components/home/attorneys";
import HomeHeroSection from "@/components/home/hero";
import HomePracticeAreas from "@/components/home/practiceAreas";
import HomeServices from "@/components/home/services";

export default async function Home() {
  const servicesData = await getServicesData();
  const attorneyData = await getAttorneysData();

  return (
    <>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeServices serviceData={servicesData} />
      <HomePracticeAreas />
      <HomeAttorney attorneysData={attorneyData} />
    </>
  );
}
