import React from "react";
import FlatButton from "../../FlatButton/FlatButton";
import GeoIcon from "@/app/icons/GeoIcon";
import MarketCard from "./MarketCard/MarketCard";
import TitleButtons from "../../TitleButtons/TitleButtons";
interface MarketSectionProps {}

const MarketSection: React.FC<MarketSectionProps> = () => {
  return (
    <div id="market" className="market-section">
      <TitleButtons
        buttons={
          <>
            <FlatButton outline>Смотреть все </FlatButton>
            <FlatButton outline color="orange">
              Показать на карте <GeoIcon className="fill" />
            </FlatButton>
          </>
        }
        title="Маркет"
      />
      <div className="cards">
        <MarketCard
          imgUrl="/assets/market/card-1.png"
          text="Форменная одежда и обувь"
          double
        />
        <MarketCard
          imgUrl="/assets/market/card-2.png"
          text="Оружейные магазины"
        />
        <MarketCard imgUrl="/assets/market/card-3.png" text="Средства связи" />
        <MarketCard imgUrl="/assets/market/card-4.png" text="СИЗ" />
        <MarketCard imgUrl="/assets/market/card-5.png" text="СКУД " />
        <MarketCard
          imgUrl="/assets/market/card-6.png"
          text="Системы видеонаблюдений"
          double
        />
      </div>
    </div>
  );
};

export default MarketSection;
