import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import ConsultationButton from "@/app/components/ConsultationButton/ConsultationButton";
import ResultItem from "@/app/components/SearchPage/ResultItem/ResultItem";
import Select from "@/app/components/Select/Select";
import Tabs from "@/app/components/Tabs/Tabs";
import TitleBanner from "@/app/components/TitleBanner/TitleBanner";
import GeoIcon from "@/app/icons/GeoIcon";
import LoupeIcon from "@/app/icons/LoupeIcon";
import { ICompany } from "@/app/types/interfaces";
import api from "@/app/utils/api";
import React, { useEffect, useState } from "react";

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

  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [filters, setFilters] = useState<any>();
  const [filerTabs, setFilerTabs] = useState<any>([]);

  useEffect(() => {
    (async function () {
      const resp = await api.fetchFilters();
      setFilters(resp.data);
      console.log(resp.data[0].title);
      // setFilerTabs(
      //   resp.data.map()
      // )

      const companiesResp = await api.fetchCompanies()
      setCompanies(
        companiesResp.data.map((item: ICompany) => ({
          ...item,
          reviews: item.reviews.filter((el) => el),
          rating:
            item.reviews.reduce((a, c) => (a += c.rating || 0), 0) /
            item.reviews.length,
        }))
      )
    })();
  }, []);

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
          <Tabs
            tabs={[
              {
                name: "Охрана квартир, коттеджев, объектов",
                tab: (
                  <div>
                    <h4>Сфера деятельности</h4>
                    <input type="checkbox" />
                    <label htmlFor="">Все</label>
                    <br />
                    <input type="checkbox" />
                    <label htmlFor="">Деятельность 1</label>
                    <br />
                    <input type="checkbox" />
                    <label htmlFor="">Деятельность 2</label>
                    <br />
                  </div>
                ),
              },
              {
                name: "Пультовая охрана",
                tab: (
                  <div>
                    <h4>Сфера деятельности</h4>
                    <input type="checkbox" />
                    <label htmlFor="">asd</label>
                  </div>
                ),
              },
            ]}
          />
        </div>
        <div className="results-sorts">
          <div className="sorts">
            <Select
              arrow
              color="orange"
              value={sortBy}
              setValue={setSortBy}
              options={sortsBy}
            />
            <Select
              arrow
              value={timeLimit}
              setValue={setTimeLimit}
              options={timeLimits}
            />
          </div>
          <hr className="dashed" />
          <div className="results">
            {companies.map((company) => (
              <ResultItem key={company.id} company={company} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
