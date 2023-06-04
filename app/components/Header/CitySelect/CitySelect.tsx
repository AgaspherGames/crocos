import GeoIcon from "@/app/icons/GeoIcon";
import React, { useState } from "react";
import Select from "../../Select/Select";
import Modal from "../../Modal/Modal";
import Tabs from "../../Tabs/Tabs";
import { ICity } from "@/app/types/interfaces";
interface CitySelectProps {
  cities: ICity[];
}

const CitySelect: React.FC<CitySelectProps> = ({ cities }) => {
  const [citySelectOpened, setCitySelectOpened] = useState<boolean>(false);

  const [city, setCity] = useState<{
    id: number;
    title: string;
  }>({
    id: 167,
    title: "Астана",
  });
  console.log(cities);
  // const [cities, setCities] = useState<ICity[]>([
  //   {
  //     value: "1",
  //     text: "Астана",
  //   },
  //   {
  //     value: "2",
  //     text: "Алматы",
  //   },
  //   {
  //     value: "3",
  //     text: "Акмолинская область",
  //   },
  //   {
  //     value: "4",
  //     text: "Актюбинская область",
  //   },
  //   {
  //     value: "5",
  //     text: "Восточно-Казахстанская область",
  //   },
  // ]);
  return (
    <div
      onClick={() => {
        setCitySelectOpened((prev) => !prev);
      }}
      className="geo-label city-select"
    >
      <GeoIcon height={30} width={20} className="light-blue" />
      <p className="city">{city.title}</p>

      {/* <Select options={cities} value={city} setValue={setCity} /> */}
      <Modal opened={citySelectOpened} setOpened={setCitySelectOpened}>
        <div className="city-select-modal">
          <p className="modal-title">Выберите область</p>
          {/* <Tabs tabs={[{ name: "Астана", tab: <div>Астана</div> }, { name: "Алматы", tab: <div>Алматы</div> }]}></Tabs> */}
          {cities.length && (
            <Tabs
              className="city-select-tabs"
              tabs={cities?.map((city) => ({
                name: city.title,
                tab: (
                  <div>
                    <p className="modal-title">Выберите город</p>
                    <div className="city-list">
                      {city.handbook_regions.map((el) => (
                        <div
                          onClick={() => {
                            setCity(el);
                          }}
                        >
                          {el.title}
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              }))}
            ></Tabs>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default CitySelect;
