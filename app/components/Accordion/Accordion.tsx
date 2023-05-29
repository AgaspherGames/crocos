import React from "react";
import TitleButtons from "../TitleButtons/TitleButtons";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import FlatButton from "../OutlineButton/FlatButton";
import ArrowIcon from "@/app/icons/ArrowIcon";
interface AccordionProps {}

const AccordionSection: React.FC<AccordionProps> = () => {
  return (
    <div className="accordion-section">
      <TitleButtons
        title="FAQ"
        buttons={<FlatButton outline>Смотреть все</FlatButton>}
      />
      <Accordion>
        <AccordionItem
          header={
            <div className="accordion-header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              viverra sed ultricies elit praesent scelerisque. Id enim, est a,
              aenean cras rhoncus?
              <ArrowIcon />
            </div>
          }
        >
          <h3>Aliquam</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionItem>

        <AccordionItem
          header={
            <div className="accordion-header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              viverra sed ultricies elit praesent scelerisque. Id enim, est a,
              aenean cras rhoncus?
              <ArrowIcon />
            </div>
          }
        >
          <h3>Aliquam</h3>
          Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
          erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae,
          accumsan auctor mi.
        </AccordionItem>

        <AccordionItem
          header={
            <div className="accordion-header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              viverra sed ultricies elit praesent scelerisque. Id enim, est a,
              aenean cras rhoncus?
              <ArrowIcon />
            </div>
          }
        >
          <h3>Aliquam</h3>
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionSection;
