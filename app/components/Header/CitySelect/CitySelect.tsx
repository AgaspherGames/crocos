import GeoIcon from "@/app/icons/GeoIcon";
import React, { useState } from "react";
import Select from "../../Select/Select";
interface CitySelectProps {}

interface ICity {
  value: string;
  text: string;
}

const CitySelect: React.FC<CitySelectProps> = ({}) => {
  const [citySelectOpened, setCitySelectOpened] = useState<boolean>(false);

  const [city, setCity] = useState<ICity>({
    value: "1",
    text: "Астана",
  });
  const [cities, setCities] = useState<ICity[]>([
    {
      value: "1",
      text: "Астана",
    },
    {
      value: "2",
      text: "Алматы",
    },
    {
      value: "3",
      text: "Акмолинская область",
    },
    {
      value: "4",
      text: "Актюбинская область",
    },
    {
      value: "5",
      text: "Восточно-Казахстанская область",
    },
  ]);
  return (
    <div
      onClick={() => {
        setCitySelectOpened((prev) => !prev);
      }}
      className="geo-label"
    >
      <GeoIcon height={30} width={20} className="light-blue" />
      {/* <p className="city">{city.name}</p> */}
      {/* <div
        onClick={(e) => e.stopPropagation()}
        className={`city-select ${citySelectOpened ? "open" : "close"}`}
      >
        {cities.map((el) => (
          <div
          key={el.id}
            onClick={(e) => setCity(el)}
            className={el.id == city.id ? "active" : ""}
          >
            {el.name}
          </div>
        ))}
      </div> */}
      <Select options={cities} value={city} setValue={setCity} />
    </div>
  );
};

export default CitySelect;
