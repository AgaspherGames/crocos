import { title } from "process";
import React, { useState } from "react";
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: ITab[];
}

interface ITab {
  name: string;
  tab: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="tabs">
      <div className="tab-titles">
        {tabs.map((tab, ind) => (
          <div onClick={() => {	setActiveTab(ind) }}  className={`tab-title ${ind==activeTab? 'active' :''}`} key={ind}>{tab.name}</div>
        ))}
      </div>
      <div className="tab-panels">
        {tabs.map((tab, ind) => (
          <div className={` tab-panel ${ind==activeTab? 'active' :''}`} key={ind}>{tab.tab}</div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
