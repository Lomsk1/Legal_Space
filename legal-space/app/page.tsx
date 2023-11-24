import HomeAboutSection from "@/components/home/about";
import HomeHeroSection from "@/components/home/hero";
import HomeServices from "@/components/home/services";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeServices />
    </>
  );
}
