import Button from "@/app/components/Button/Button";
import ArrowCircleIcon from "@/app/icons/ArrowCircleIcon";
import BagHappyIcon from "@/app/icons/BagHappyIcon";
import { IFilter, IService } from "@/app/types/interfaces";
import React from "react";
interface CompanyServiceProps {
  service: IService;
}

const CompanyService: React.FC<CompanyServiceProps> = ({ service }) => {
  return (
    <div className="company-service">
      <div className="category">
        <BagHappyIcon />
        <p>{service.handbook_security_service_type.title}</p>
      </div>
      <div className="price-div">
        <p className="price">
          {service.price_from
            ? `от ${service.price_from} тг/ в месяц`
            : "Договорная"}
        </p>
        <p className="info">{service.handbook_security_service_type.hint}</p>
      </div>
      <Button withIcon>
        Заказать услугу <ArrowCircleIcon />{" "}
      </Button>
    </div>
  );
};

export default CompanyService;
