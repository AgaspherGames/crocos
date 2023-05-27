import React from "react";
import SecuritySection from "../../components/SecuritySection/SecuritySection";
import Slider from "@/app/components/Slider/Slider";
import Services from "@/app/components/Services/Services";
import BackgroundLine from "@/app/components/BackgroundLine/BackgroundLine";
import Vacancies from "@/app/components/Vacancies/Vacancies";
interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div>
      <BackgroundLine/>
      <Slider />
      <Services />
      <SecuritySection />
      <Vacancies/>
    </div>
  );
};

export default Main;
