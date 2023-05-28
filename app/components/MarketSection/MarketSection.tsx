import React from "react";
import Title from "../Title/Title";
import FlatButton from "../OutlineButton/FlatButton";
import GeoIcon from "@/app/icons/GeoIcon";
interface MarketSectionProps {}

const MarketSection: React.FC<MarketSectionProps> = () => {
  return (
    <div>
      <div className="head-title">
        <Title text="Маркет" />
        <FlatButton outline >Смотреть все <GeoIcon/> </FlatButton>
      </div>
    </div>
  );
};

export default MarketSection;
