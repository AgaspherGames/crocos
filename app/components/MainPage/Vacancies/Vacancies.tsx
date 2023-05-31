import React, { useState } from "react";
import Title from "../../Title/Title";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabContent from "./TabContent";
import VacancyCard, { VacancyCardProps } from "./VacancyCard/VacancyCard";
import FlatButton from "@/app/components/FlatButton/FlatButton";
import Tabs from "@/app/components/Tabs/Tabs";
interface VacanciesProps {}

interface ICards {
  looking: VacancyCardProps[];
  need: VacancyCardProps[];
  other: VacancyCardProps[];
}

const Vacancies: React.FC<VacanciesProps> = () => {
  const [cards, setCards] = useState<ICards>({
    looking: [
      {
        badgeText: "Ищу работу",
        city: "Астана",
        experience: "1-3 года",
        salary: "от 100 000 до 200 000 KZT",
        text: "Охранник на объект различных категорий",
      },
      {
        badgeText: "Ищу работу",
        city: "Астана",
        experience: "1-3 года",
        salary: "з/п не указана",
        text: "Охранник на объект различных категорий",
      },
      {
        badgeText: "Ищу работу",
        city: "Астана",
        experience: "1-3 года",
        salary: "от 100 000 до 200 000 KZT",
        text: "Охранник на объект различных категорий",
      },
    ],
    need: [
      {
        badgeText: "Требуются",
        city: "Астана",
        experience: "1-3 года",
        salary: "от 100 000 до 200 000 KZT",
        text: "Охранник на объект различных категорий",
      },
      {
        badgeText: "Требуются",
        city: "Астана",
        experience: "1-3 года",
        salary: "от 80 000 до 150 000 KZT",
        text: "Охранник на объект различных категорий",
      },
      {
        badgeText: "Требуются",
        city: "Астана",
        experience: "не указан",
        salary: "от 100 000 до 200 000 KZT",
        text: "Охранник на объект различных категорий",
      },
    ],
    other: [
      {
        badgeText: "Сотрудники разных сфер",
        city: "Астана",
        experience: "1-3 года",
        salary: "от 100 000 до 200 000 KZT",
        text: "Охранник на объект различных категорий",
      },
      {
        badgeText: "Сотрудники разных сфер",
        city: "Алматы",
        experience: "1-3 года",
        salary: "от 100 000 до 200 000 KZT",
        text: "Охранник на объект различных категорий",
      },
      {
        badgeText: "Сотрудники разных сфер",
        city: "Шымкент",
        experience: "не требуется",
        salary: "от 60 000 до 120 000 KZT",
        text: "Охранник на объект различных категорий",
      },
    ],
  });

  return (
    <div id="vacansies" className="vacansies">
      <div className="flex justify-between items-center">
        <Title text="Вакансии" />
        <FlatButton outline>Смотреть все</FlatButton>
      </div>
      <Tabs
        tabs={[
          {
            name: "Ищу работу",
            tab: (
              <TabContent>
                {cards.looking.map((el, ind) => (
                  <VacancyCard key={ind} {...el} />
                ))}
              </TabContent>
            ),
          },
          {
            name: "Требуются",
            tab: (
              <TabContent>
                {cards.need.map((el, ind) => (
                  <VacancyCard key={ind} {...el} />
                ))}
              </TabContent>
            ),
          },
          {
            name: "Сотрудники разных сфер",
            tab: (
              <TabContent>
                {cards.other.map((el, ind) => (
                  <VacancyCard key={ind} {...el} />
                ))}
              </TabContent>
            ),
          },
        ]}
      />
      {/* <Tabs defaultFocus={true}>
        <TabList>
          <Tab>Ищу работу</Tab>
          <Tab>Требуются</Tab>
          <Tab>Сотрудники разных сфер</Tab>
        </TabList>
        <TabPanel>
          <TabContent>
            {cards.looking.map((el, ind) => (
              <VacancyCard key={ind} {...el} />
            ))}
          </TabContent> 
        </TabPanel>
        <TabPanel>
          <TabContent>
          {cards.need.map((el, ind) => (
              <VacancyCard key={ind} {...el} />
            ))}
          </TabContent>
        </TabPanel>
        <TabPanel>
          <TabContent>
          {cards.other.map((el, ind) => (
              <VacancyCard key={ind} {...el} />
            ))}
          </TabContent>
        </TabPanel>
      </Tabs> */}
    </div>
  );
};

export default Vacancies;
