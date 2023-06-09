import ConsultationButton from "@/app/components/ConsultationButton/ConsultationButton";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import { IService } from "@/app/components/MainPage/Services/Service";
import NavBar from "@/app/components/NavBar/NavBar";
import { useFilters } from "@/app/hooks/handbookHooks";
import CompanyPage from "@/app/pages/Company/CompanyPage";
import { HandbookService } from "@/app/services/HandbookService";
import { ICReview, ICompanyService } from "@/app/types/ICompanyService";
import { IFilter } from "@/app/types/interfaces";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface CompanyProps {
  data: ICompanyService;
  services: IFilter[];
}

interface IQuery {
  id: number;
}

export const getServerSideProps: GetServerSideProps<{
  data: CompanyProps;
}> = async ({ query, res }) => {
  if (!query.id) {
    return {
      notFound: true,
    };
  }
  const id = +query.id;

  try {
    const response = await HandbookService.fetchCompanyService(id);
    const services: IService[] = (await HandbookService.fetchFilters()).data
      .data;
      //.map((company:ICompany)=>({...company, reviews: company.reviews.filter(e=>e) }))
    return { props: { data: {...response.data.data, reviews: response.data.data.reviews.filter((e:ICReview)=>e)}, services } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const Company: React.FC<CompanyProps> = ({ data, services }) => {
  console.log(data);

  return (
    <div>
      <Header />
      <NavBar />
      <CompanyPage data={data} services={services} />
      {/* <ConsultationButton/> */}
      <Footer />
    </div>
  );
};

export default Company;
