import React from "react";
import TitleButtons from "../TitleButtons/TitleButtons";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import FlatButton from "../FlatButton/FlatButton";
import ArrowIcon from "@/app/icons/ArrowIcon";
interface AccordionProps {}

const AccordionSection: React.FC<AccordionProps> = () => {
  return (
    <div className="accordion-section">
      <TitleButtons
        title="FAQ"
        buttons={<FlatButton outline>Смотреть все</FlatButton>}
      />
      <Accordion transition transitionTimeout={250} allowMultiple>
        <AccordionItem
          header={
            <div className="accordion-header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              viverra sed ultricies elit praesent scelerisque. Id enim, est a,
              aenean cras rhoncus?
              <div className="arrow">
                <ArrowIcon />
              </div>
            </div>
          }
        >
          <h3>Aliquam</h3>
          Dui ipsum in id nam risus quis facilisis placerat. Lobortis elit
          rhoncus, lectus elit, tristique est, tempus. Pharetra faucibus mauris
          id nulla sed. Sapien diam lorem ac risus senectus arcu, mi. Rhoncus,
          nunc proin iaculis amet egestas sit. Velit bibendum pretium vel non
          ligula neque faucibus phasellus. Placerat lectus iaculis tellus
          imperdiet in ut aliquam volutpat dui. Arcu nulla maecenas feugiat et.
          Dis massa quam ut nam eget. At viverra aliquam ligula scelerisque at
          quis felis eget sed. Tincidunt morbi vestibulum imperdiet mauris
          ornare urna, orci amet morbi. Elementum, id massa justo orci. Nunc
          arcu, libero, feugiat amet, egestas. Consectetur nisl quam integer
          adipiscing posuere dictum iaculis placerat. Sagittis, tristique lectus
          sociis commodo et sapien fames mauris.
        </AccordionItem>

        <AccordionItem
          header={
            <div className="accordion-header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              viverra sed ultricies elit praesent scelerisque. Id enim, est a,
              aenean cras rhoncus?
              <div className="arrow">
                <ArrowIcon />
              </div>
            </div>
          }
        >
          <h3>Aliquam</h3>
          Dui ipsum in id nam risus quis facilisis placerat. Lobortis elit
          rhoncus, lectus elit, tristique est, tempus. Pharetra faucibus mauris
          id nulla sed. Sapien diam lorem ac risus senectus arcu, mi. Rhoncus,
          nunc proin iaculis amet egestas sit. Velit bibendum pretium vel non
          ligula neque faucibus phasellus. Placerat lectus iaculis tellus
          imperdiet in ut aliquam volutpat dui. Arcu nulla maecenas feugiat et.
          Dis massa quam ut nam eget. At viverra aliquam ligula scelerisque at
          quis felis eget sed. Tincidunt morbi vestibulum imperdiet mauris
          ornare urna, orci amet morbi. Elementum, id massa justo orci. Nunc
          arcu, libero, feugiat amet, egestas. Consectetur nisl quam integer
          adipiscing posuere dictum iaculis placerat. Sagittis, tristique lectus
          sociis commodo et sapien fames mauris.
        </AccordionItem>

        <AccordionItem
          header={
            <div className="accordion-header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              viverra sed ultricies elit praesent scelerisque. Id enim, est a,
              aenean cras rhoncus?
              <div className="arrow">
                <ArrowIcon />
              </div>
            </div>
          }
        >
          <h3>Aliquam</h3>
          Dui ipsum in id nam risus quis facilisis placerat. Lobortis elit
          rhoncus, lectus elit, tristique est, tempus. Pharetra faucibus mauris
          id nulla sed. Sapien diam lorem ac risus senectus arcu, mi. Rhoncus,
          nunc proin iaculis amet egestas sit. Velit bibendum pretium vel non
          ligula neque faucibus phasellus. Placerat lectus iaculis tellus
          imperdiet in ut aliquam volutpat dui. Arcu nulla maecenas feugiat et.
          Dis massa quam ut nam eget. At viverra aliquam ligula scelerisque at
          quis felis eget sed. Tincidunt morbi vestibulum imperdiet mauris
          ornare urna, orci amet morbi. Elementum, id massa justo orci. Nunc
          arcu, libero, feugiat amet, egestas. Consectetur nisl quam integer
          adipiscing posuere dictum iaculis placerat. Sagittis, tristique lectus
          sociis commodo et sapien fames mauris.
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionSection;
