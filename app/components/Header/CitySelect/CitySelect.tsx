import GeoIcon from "@/app/icons/GeoIcon";
import React, { useState } from "react";
import Select from "../../Select/Select";
import Modal from "../../Modal/Modal";
import Tabs from "../../Tabs/Tabs";
import { ICity, ICityItem } from "@/app/types/interfaces";
interface CitySelectProps {
  cities: ICity[];
  city: ICityItem;
  setCity: React.Dispatch<React.SetStateAction<ICityItem>>;
}

const CitySelect: React.FC<CitySelectProps> = ({ cities, city, setCity }) => {
  const [citySelectOpened, setCitySelectOpened] = useState<boolean>(false);
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
        
        setCitySelectOpened(true);
      }}
      className="geo-label city-select outline orange"
    >
      <GeoIcon height={30} width={20} className="orange" />
      <p className="city">{city.title || "Выберите район"}</p>

      {/* <Select options={cities} value={city} setValue={setCity} /> */}
      <Modal opened={citySelectOpened} setOpened={setCitySelectOpened}>
        <div className="city-select-modal">
          <p className="modal-title">Выберите область</p>
          {/* <Tabs tabs={[{ name: "Астана", tab: <div>Астана</div> }, { name: "Алматы", tab: <div>Алматы</div> }]}></Tabs> */}
          {cities.length && (
            <Tabs
              className="city-select-tabs"
              tabs={cities?.map((city_el) => ({
                name: city_el.title,
                tab: (
                  <div key={city_el.id}>
                    <p className="modal-title">Выберите город</p>
                    <div className="city-list">
                      {city_el.handbook_regions.length > 1 && (
                        <div
                          onClick={() => {
                            setCity({...city_el, type: "city"});
                          }}
                          className={`region-item ${city_el.id==city.id&&city.type=='city' ? "active" :''}`}
                        >
                          Все районы
                        </div>
                      )}
                      {city_el.handbook_regions.map((el) => (
                        <div
                        key={el.id}
                          onClick={() => {
                            
                            setCity({...el, type:'region'});
                          }}
                          className={`region-item ${el.id==city.id&&city.type=='region' ? "active" :''}`}
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
