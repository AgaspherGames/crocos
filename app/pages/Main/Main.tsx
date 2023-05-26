import React from "react";
import SecuritySection from "../../components/SecuritySection/SecuritySection";
import Slider from "@/app/components/Slider/Slider";
import Services from "@/app/components/Services/Services";
interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div>
      <Slider />
      <Services />

      <SecuritySection />
    </div>
  );
};

export default Main;
