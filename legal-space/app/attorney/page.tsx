import { getAttorneysData } from "@/API/attorney/get";
import AttorneyHeroSection from "@/components/attorney/hero";
import AttorneyPartnersSection from "@/components/attorney/partners";

export default async function Page() {
  const attorneyData = await getAttorneysData();
  return (
    <>
      <AttorneyHeroSection />
      <AttorneyPartnersSection attorneysData={attorneyData} />
    </>
  );
}
