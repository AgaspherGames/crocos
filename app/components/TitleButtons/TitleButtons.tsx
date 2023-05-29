import React from "react";
import Title from "../Title/Title";
import { title } from "process";
interface TitleButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
  buttons: React.ReactNode;
  title: string;
  nowrap?: boolean    
}

const TitleButtons: React.FC<TitleButtonsProps> = ({ children, buttons, title, nowrap=false }) => {
  return (
    <div className={`title-buttons ${nowrap?'no-wrap':''}`}>
      <Title text={title} />
      <div className="buttons">
        {buttons}
      </div>
    </div>
  );
};

export default TitleButtons;
