import { getServicesData } from "@/API/services/get";
import PracticeAreaHeroSection from "@/components/practiceAreas/sections/hero";
import PracticeAreasPracticeSection from "@/components/practiceAreas/sections/practiceAreas";
import PracticeAreaServiceSection from "@/components/practiceAreas/sections/services";

export default async function Page() {
  const serviceData = await getServicesData();
  return (
    <>
      <PracticeAreaHeroSection />
      <PracticeAreaServiceSection serviceData={serviceData} />
      <PracticeAreasPracticeSection />
    </>
  );
}
