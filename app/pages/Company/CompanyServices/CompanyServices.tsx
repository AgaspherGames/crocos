import Title from "@/app/components/Title/Title";
import BagHappyIcon from "@/app/icons/BagHappyIcon";
import React from "react";
import CompanyService from "../CompanyService/CompanyService";
import { IFilter, IService } from "@/app/types/interfaces";
import { ICompanyService } from "@/app/types/ICompanyService";
import Tabs from "@/app/components/Tabs/Tabs";
interface CompanyServicesProps {
  data: ICompanyService;
  services: IFilter[];
}

const CompanyServices: React.FC<CompanyServicesProps> = ({
  data,
  services,
}) => {
  interface Service {
    title: string;
    services: IService[];
  }

  function getCategory(serviceTitle: string): IFilter | undefined {
    return services.find((item) =>
      item.handbook_security_service_types.some(
        (handbookService) => handbookService.title == serviceTitle
      )
    );
  }
  const servicesWithInfo: Service[] = [];
  data.security_service_types.map((el) => {
    const category: IFilter | undefined = getCategory(
      el.handbook_security_service_type.title
    );
    if (!category) return;

    const index = servicesWithInfo.findIndex(
      (serviceObj: any) => serviceObj.title == category.title
    );
    if (~index) {
      servicesWithInfo[index] = {
        title: category.title,
        services: [...servicesWithInfo[index].services, el],
      };
    } else {
      servicesWithInfo.push({
        title: category.title,
        services: [el],
      });
    }
  });
  // console.log(servicesWithInfo);

  return (
    <div className="services-container">
      <Title text="Наши услуги" />
      <Tabs
        className="services-tabs"
        tabs={servicesWithInfo.map((el) => ({
          name: (
            <div className="tab-name-wrap">
              <BagHappyIcon /> {el.title}
            </div>
          ),
          tab: (
            <div>
              {el.services.map((service, ind) => (
                <>
                  <CompanyService service={service} />
                  {ind != el.services.length - 1 && <hr />}
                </>
              ))}
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default CompanyServices;
