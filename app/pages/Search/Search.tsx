import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import ConsultationButton from "@/app/components/ConsultationButton/ConsultationButton";
import Select from "@/app/components/Select/Select";
import TitleBanner from "@/app/components/TitleBanner/TitleBanner";
import GeoIcon from "@/app/icons/GeoIcon";
import LoupeIcon from "@/app/icons/LoupeIcon";
import React, { useState } from "react";
interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const [cities] = useState([
    {
      text: "Астана",
      value: "1",
    },
    {
      text: "Алматы",
      value: "2",
    },
    {
      text: "Шымкент",
      value: "3",
    },
  ]);

  const [sortsBy] = useState([
    {
      text: "По соответствию",
      value: "1",
    },
    {
      text: "По дате",
      value: "2",
    },
    {
      text: "По регионам",
      value: "3",
    },
  ]);
  const [timeLimits] = useState([
    {
      text: "За всё время",
      value: "1",
    },
    {
      text: "За месяц",
      value: "2",
    },
    {
      text: "За неделю",
      value: "3",
    },
  ]);

  const [city, setCity] = useState(cities[0]);
  const [sortBy, setSortBy] = useState(sortsBy[0]);
  const [timeLimit, setTimeLimit] = useState(timeLimits[0]);

  return (
    <div className="search">
      <TitleBanner
        text="Каталог охранных услуг"
        imgUrl="/assets/banners/katalog.png"
        type="full"
      />
      <Breadcrumbs />
      <div className="search-line">
        <Select
          icon={<GeoIcon />}
          outline
          color="orange"
          arrow
          value={city}
          setValue={setCity}
          options={cities}
        />
        <div className="search-input">
          <LoupeIcon />
          <input type="text" placeholder="Поиск..." />
        </div>
      </div>
      <div className="results-section">
        <div className="filters">
          
        </div>
        <div className="results">
          <div className="sorts">
            <Select arrow color="orange" value={sortBy} setValue={setSortBy} options={sortsBy} />
            <Select arrow value={timeLimit} setValue={setTimeLimit} options={timeLimits} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
