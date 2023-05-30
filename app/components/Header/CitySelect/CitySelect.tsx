import GeoIcon from "@/app/icons/GeoIcon";
import React, { useState } from "react";
interface CitySelectProps {
}

interface ICity {
  id: number;
  name: string;
}

const CitySelect: React.FC<CitySelectProps> = ({  }) => {
  const [citySelectOpened, setCitySelectOpened] = useState<boolean>(false);

  const [city, setCity] = useState<ICity>({
    id: 1,
    name: "Астана",
  });
  const [cities, setCities] = useState<ICity[]>([
    {
      id: 1,
      name: "Астана",
    },
    {
      id: 2,
      name: "Алматы",
    },
    {
      id: 3,
      name: "Акмолинская область",
    },
    {
      id: 4,
      name: "Актюбинская область",
    },
    {
      id: 5,
      name: "Восточно-Казахстанская область",
    },
  ]);
  return (
    <div
      onClick={() => {
        setCitySelectOpened((prev) => !prev);
      }}
      className="geo-label"
    >
      <GeoIcon height={30} width={20} color="#00a2e4" />
      <p className="city">{city.name}</p>
      <div
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
      </div>
    </div>
  );
};

export default CitySelect;
