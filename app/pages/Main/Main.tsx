import React from "react";
import SecuritySection from "@/app/components/MainPage/SecuritySection/SecuritySection";
import Slider from "@/app/components/MainPage/Slider/Slider";
import Services from "@/app/components/MainPage/Services/Services";
import BackgroundLine from "@/app/components/BackgroundLine/BackgroundLine";
import Vacancies from "@/app/components/MainPage/Vacancies/Vacancies";
import TitleBanner from "@/app/components/TitleBanner/TitleBanner";
import MarketSection from "@/app/components/MainPage/MarketSection/MarketSection";
import LearningSection from "@/app/components/MainPage/LearningSection/LearningSection";
import IndustrySection from "@/app/components/MainPage/IndustrySection/IndustrySection";
import Accordion from "@/app/components/Accordion/Accordion";
import Footer from "@/app/components/Footer/Footer";
import ConsultationButton from "@/app/components/ConsultationButton/ConsultationButton";
interface MainProps {}


const Main: React.FC<MainProps> = () => {
  return (
    <div>
      <BackgroundLine/>
      <ConsultationButton/>
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
      <Footer/>

    </div>
  );
};

export default Main;
