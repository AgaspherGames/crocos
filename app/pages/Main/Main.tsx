import React from "react";
import SecuritySection from "../../components/SecuritySection/SecuritySection";
import Slider from "@/app/components/Slider/Slider";
import Services from "@/app/components/Services/Services";
import BackgroundLine from "@/app/components/BackgroundLine/BackgroundLine";
import Vacancies from "@/app/components/Vacancies/Vacancies";
import TitleBanner from "@/app/components/TitleBanner/TitleBanner";
import MarketSection from "@/app/components/MarketSection/MarketSection";
import LearningSection from "@/app/components/LearningSection/LearningSection";
import IndustrySection from "@/app/components/IndustrySection/IndustrySection";
import Accordion from "@/app/components/Accordion/Accordion";
interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div>
      <BackgroundLine/>
      <Slider />
      <Services />
      <SecuritySection />
      <Vacancies/>
      <TitleBanner text="Лидеры отрасли" subText="по рейтингам и отзывам" imgUrl="/assets/banners/leaders.png" type="right" />
      {/* <TitleBanner text="Каталог охранных услуг" imgUrl="/assets/banners/katalog.png" type="full" />
      <TitleBanner text="Каталог охранных услуг" imgUrl="/assets/banners/market.png" type="left" /> */}
      <MarketSection/>
      <LearningSection/>
      <IndustrySection/>
      <Accordion/>
    </div>
  );
};

export default Main;
