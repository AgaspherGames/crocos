import React from "react";
import TitleButtons from "../TitleButtons/TitleButtons";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import FlatButton from "../OutlineButton/FlatButton";
interface AccordionProps {}

const AccordionSection: React.FC<AccordionProps> = () => {
  return (
    <div className="accordion-section">
      <TitleButtons
        title="FAQ"
        buttons={<FlatButton outline>Смотреть все</FlatButton>}
      />
      <Accordion >
        <AccordionItem header="What is Lorem Ipsum?">
          <h3>
            Aliquam
            </h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionItem>

        <AccordionItem header="Where does it come from?">
            <h3>
            Aliquam
            </h3>
          Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
          erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae,
          accumsan auctor mi.
        </AccordionItem>

        <AccordionItem header="Why do we use it?">
            <h3>
            Aliquam
            </h3>
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionSection;
