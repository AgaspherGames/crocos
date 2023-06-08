import BackgroundLine from "@/app/components/BackgroundLine/BackgroundLine";
import TitleBanner from "@/app/components/TitleBanner/TitleBanner";
import React, { useState, useRef, useEffect } from "react";
import { ICompanyService } from "@/app/types/ICompanyService";
import { IFilter, IService } from "@/app/types/interfaces";
import { AvgRating } from "@/app/utils/features";
import CompanyCard from "./CompanyCard/CompanyCard";
import CompanyAccordion from "./CompanyAccordion/CompanyAccordion";
import CompanyServices from "./CompanyServices/CompanyServices";
import CompanyVacancies from "./CompanyVacancies/CompanyVacancies";
import CompanyReviews from "./CompanyReviews/CompanyReviews";

interface CompanyPageProps {
  data: ICompanyService;
  services: IFilter[];
}

const CompanyPage: React.FC<CompanyPageProps> = ({ data, services }) => {
  const [rating, setRating] = useState(AvgRating(data.reviews));
  useEffect(() => {
    setRating(AvgRating(data.reviews));
  }, [data]);

  return (
    <div className="company-page">
      <BackgroundLine />
      <TitleBanner
        text="Каталог охранных услуг"
        imgUrl="/assets/banners/katalog.png"
        type="full"
      />

      <CompanyCard data={data} rating={rating} />

      <CompanyAccordion description={data.description} />

      <CompanyServices data={data} services={services} />

      <CompanyVacancies data={data} />

      <CompanyReviews data={data} rating={rating} />
    </div>
  );
};

export default CompanyPage;
