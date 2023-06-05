import BackgroundLine from "@/app/components/BackgroundLine/BackgroundLine";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import ConsultationButton from "@/app/components/ConsultationButton/ConsultationButton";
import Footer from "@/app/components/Footer/Footer";
import CitySelect from "@/app/components/Header/CitySelect/CitySelect";
import Pagination from "@/app/components/Pagination/Pagination";
import ResultItem from "@/app/components/SearchPage/ResultItem/ResultItem";
import Select from "@/app/components/Select/Select";
import Tabs from "@/app/components/Tabs/Tabs";
import TitleBanner from "@/app/components/TitleBanner/TitleBanner";
import useDebounce from "@/app/hooks/hooks";
import { useCities, useCompanies, useFilters } from "@/app/hooks/useHandbooks";
import GeoIcon from "@/app/icons/GeoIcon";
import LoupeIcon from "@/app/icons/LoupeIcon";
import { ICity, ICityItem, ICompany, IFilter } from "@/app/types/interfaces";
import api from "@/app/utils/api";
import React, { useEffect, useState } from "react";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  // const [cities, setCities] = useState<ICity[]>([
  //   {
  //     handbook_regions: [
  //       {
  //         id: 167,
  //         title: "Астана",
  //       },
  //     ],
  //     id: 1,
  //     title: "Астана",
  //   },
  // ]);
  const cities = useCities();

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

  const [city, setCity] = useState<ICityItem>({ ...cities[0], type: "region" });
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce<string>(search, 1000);
  const [sortBy, setSortBy] = useState(sortsBy[0]);
  const [timeLimit, setTimeLimit] = useState(timeLimits[0]);

  const filters = useFilters();
  const [activeFilters, setActiveFilters] = useState<number[]>([]);
  const [filterTabs, setFilterTabs] = useState<any>([]);

  const [page, setPage] = useState<number>(1);
  const { companies, pageCount } = useCompanies(
    page,
    activeFilters,
    city,
    debouncedSearch
  );
  console.log(pageCount);

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
    setFilterTabs(
      filters?.map((filter) => {
        const ids = filter.handbook_security_service_types.map((el) => el.id);

        return {
          name: filter.title,
          tab: (
            <div>
              <h4>Сфера деятельности</h4>
              {filter.handbook_security_service_types.length > 1 && (
                <>
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
                </>
              )}

              {filter.handbook_security_service_types.map((el) => (
                <React.Fragment key={el.id}>
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
                </React.Fragment>
              ))}
            </div>
          ),
        };
      })
    );
  }, [filters, activeFilters]);

  return (
    <div className="search">
      <BackgroundLine />
      <TitleBanner
        text="Каталог охранных услуг"
        imgUrl="/assets/banners/katalog.png"
        type="full"
      />
      <Breadcrumbs />
      <div className="search-line">
        <CitySelect city={city} setCity={setCity} cities={cities} />
        <div className="search-input">
          <LoupeIcon />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="results-section">
        <div className="filters">
          <Tabs tabs={filterTabs || []} />
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
            <Pagination page={page} pagesCount={pageCount} setPage={setPage} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
