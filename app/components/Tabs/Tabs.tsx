import { title } from "process";
import React, { useState } from "react";
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: ITab[];
  middle?: React.ReactNode;
}

interface ITab {
  name: string | React.ReactNode;
  tab: React.ReactNode;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, className, middle }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className={`tabs ${className??''}`}>
      <div className="tab-titles">
        {tabs.map((tab, ind) => (
          <div
            onClick={() => {
              setActiveTab(ind);
            }}
            className={`tab-title ${ind == activeTab ? "active" : ""}`}
            key={ind}
          >
            {tab.name}
          </div>
        ))}
      </div>
      {middle}
      <div className="tab-panels">
        {tabs.map((tab, ind) => (
          <div
            className={` tab-panel ${ind == activeTab ? "active" : ""}`}
            key={ind}
          >
            {tab.tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
