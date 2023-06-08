import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import { IService } from "@/app/components/MainPage/Services/Service";
import NavBar from "@/app/components/NavBar/NavBar";
import { useFilters } from "@/app/hooks/handbookHooks";
import CompanyPage from "@/app/pages/Company/CompanyPage";
import { HandbookService } from "@/app/services/HandbookService";
import { ICompanyService } from "@/app/types/ICompanyService";
import { IFilter } from "@/app/types/interfaces";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface CompanyProps {
  data: ICompanyService;
  services: IFilter[];
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [
//       {
//         params: {
//           id: '1',
//         },
//       },
//     ],
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps<{
//   data: CompanyProps;
// }> = async () => {
//   const res = await HandbookService.fetchCompanyService(1);
//   return { props: { data: res.data.data } };
// };

export const getServerSideProps: GetServerSideProps<{
  data: CompanyProps;
}> = async () => {
  const res = await HandbookService.fetchCompanyService(1);
  const services: IService[] = (await HandbookService.fetchFilters()).data.data;
  return { props: { data: res.data.data, services } };
};

const Company: React.FC<CompanyProps> = ({ data, services }) => {
  console.log(data);

  return (
    <div>
      <Header />
      <NavBar />
      <CompanyPage data={data} services={services} />
      <Footer />
    </div>
  );
};

export default Company;
