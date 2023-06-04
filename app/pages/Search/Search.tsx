import BackgroundLine from "@/app/components/BackgroundLine/BackgroundLine";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import ConsultationButton from "@/app/components/ConsultationButton/ConsultationButton";
import Footer from "@/app/components/Footer/Footer";
import CitySelect from "@/app/components/Header/CitySelect/CitySelect";
import ResultItem from "@/app/components/SearchPage/ResultItem/ResultItem";
import Select from "@/app/components/Select/Select";
import Tabs from "@/app/components/Tabs/Tabs";
import TitleBanner from "@/app/components/TitleBanner/TitleBanner";
import GeoIcon from "@/app/icons/GeoIcon";
import LoupeIcon from "@/app/icons/LoupeIcon";
import { ICity, ICompany, IFilter } from "@/app/types/interfaces";
import api from "@/app/utils/api";
import React, { useEffect, useState } from "react";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const [cities, setCities] = useState<ICity[]>([
    {
      handbook_regions: [
        {
          id: 167,
          title: "Астана",
        },
      ],
      id: 1,
      title: "Астана",
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
  const [filters, setFilters] = useState<IFilter[]>();
  const [activeFilters, setActiveFilters] = useState<number[]>([]);
  const [filerTabs, setFilerTabs] = useState<any>([]);

  function addFilter(id: number) {
    setActiveFilters((prev) => [...prev, id]);
  }
  function addFilters(ids: number[]) {
    setActiveFilters((prev) => [...prev, ...ids]);
  }
  function removeFilters(ids: number[]) {
    setActiveFilters((prev) => prev.filter((el) => !ids.includes(el)));
  }
  function removeFilter(id: number) {
    setActiveFilters((prev) => prev.filter((el) => el != id));
  }
  function onChange(id: number) {
    if (activeFilters.includes(id)) {
      removeFilter(id);
    } else {
      addFilter(id);
    }
  }

  function isAllChecked(ids: number[]): boolean {
    return ids.every((element) => activeFilters.includes(element));
  }

  useEffect(() => {
    (async function () {
      const resp = await api.fetchFilters();
      setFilters(resp.data);

      const companiesResp = await api.fetchCompanies();
      setCompanies(
        companiesResp.data.map((item: ICompany) => ({
          ...item,
          reviews: item.reviews.filter((el) => el),
          rating:
            item.reviews.reduce((a, c) => (a += c.rating || 0), 0) /
            item.reviews.length,
        }))
      );

      const citiesResp = await api.fetchCities();
      setCities(citiesResp.data);
      // console.log(
      //   citiesResp.data.map((el: any) => ({
      //     name: el.title,
      //     tab: <div>
      //       {
      //         el.handbook_regions.map((region: any)=>(<div>
      //           {region.title}
      //         </div>))
      //       }
      //       </div>,
      //   }))
      // );
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const companiesResp = await api.fetchCompanies(activeFilters);
      setCompanies(
        companiesResp.data.map((item: ICompany) => ({
          ...item,
          reviews: item.reviews.filter((el) => el),
          rating:
            item.reviews.reduce((a, c) => (a += c.rating || 0), 0) /
            item.reviews.length,
        }))
      );
    })();
  }, [activeFilters]);

  useEffect(() => {
    setFilerTabs(
      filters?.map((filter) => {
        const ids = filter.handbook_security_service_types.map((el) => el.id);

        return {
          name: filter.title,
          tab: (
            <div>
              <h4>Сфера деятельности</h4>
              <input
                checked={isAllChecked(ids)}
                onChange={() => {
                  isAllChecked(ids) ? removeFilters(ids) : addFilters(ids);
                }}
                type="checkbox"
              />
              <label htmlFor="">Все</label>
              <br />
              <br />
              {filter.handbook_security_service_types.map((el) => (
                <>
                  <input
                    onChange={() => {
                      onChange(el.id);
                    }}
                    checked={activeFilters.includes(el.id)}
                    type="checkbox"
                  />
                  <label htmlFor="">{el.title}</label>
                  <br />
                  <br />
                </>
              ))}
            </div>
          ),
        };
      })
    );
  }, [filters, activeFilters]);

  return (
    <div className="search">
      {/* <BackgroundLine/> */}
      <TitleBanner
        text="Каталог охранных услуг"
        imgUrl="/assets/banners/katalog.png"
        type="full"
      />
      <Breadcrumbs />
      <div className="search-line">
        {/* <Select
          icon={<GeoIcon />}
          outline
          color="orange"
          arrow
          value={city}
          setValue={setCity}
          options={cities}
        /> */}
        <CitySelect cities={cities} />
        <div className="search-input">
          <LoupeIcon />
          <input type="text" placeholder="Поиск..." />
        </div>
      </div>
      <div className="results-section">
        <div className="filters">
          <Tabs tabs={filerTabs || []} />
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
      <Footer />
    </div>
  );
};

export default Search;
