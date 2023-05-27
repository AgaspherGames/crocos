import React from "react";
import Title from "../Title/Title";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabContent from "./TabContent";
import VacancyCard from "./VacancyCard/VacancyCard";
interface VacanciesProps {}

const Vacancies: React.FC<VacanciesProps> = () => {
  return (
    <div className="vacansies">
      <Title text="Вакансии" />
      <Tabs defaultFocus={true}>
        <TabList >
          <Tab>Ищу работу</Tab>
          <Tab>Требуются</Tab>
          <Tab>Сотрудники разных сфер</Tab>
        </TabList>
        <TabPanel>
            <TabContent>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
            </TabContent>
        </TabPanel>
        <TabPanel>
           <TabContent>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
            </TabContent>
        </TabPanel>
        <TabPanel>
           <TabContent>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
            </TabContent>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Vacancies;
