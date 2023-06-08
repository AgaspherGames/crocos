import ArrowIcon from "@/app/icons/ArrowIcon";
import React, { useState } from "react";
interface CompanyAccordionProps {
    description: string
}

const CompanyAccordion: React.FC<CompanyAccordionProps> = ({description}) => {

  const [accordionOpened, setAccordionOpened] = useState(false);

  return (
    <div
      data-open={accordionOpened.toString()}
      data-big={description.length > 600}
      className="company-accordion"
    >
      <div className="text">
        <p>{description}</p>
      </div>
      {description.length > 600 && (
        <div
          onClick={() => {
            setAccordionOpened((prev) => !prev);
          }}
          className="more-less"
        >
          {accordionOpened ? "Скрыть описание" : "Читать описание"}

          <ArrowIcon
            className="arrow-icon"
            rotate={accordionOpened ? 90 : 270}
          />
        </div>
      )}
    </div>
  );
};

export default CompanyAccordion;
