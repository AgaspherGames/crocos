import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import NavBar from "@/app/components/NavBar/NavBar";
import CompanyPage from "@/app/pages/Company/CompanyPage";
import { HandbookService } from "@/app/services/HandbookService";
import { ICompanyService } from "@/app/types/ICompanyService";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface CompanyProps  {
  data: ICompanyService
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: '1',
        },
      }, 
    ],
    fallback: false, // false or "blocking"
  };
};


export const getStaticProps: GetStaticProps<{
  data: CompanyProps;
}> = async () => {
  const res = await HandbookService.fetchCompanyService(1);
  return { props: { data: res.data.data } };
};



const Company: React.FC<CompanyProps> = ({data}) => {
  console.log(data);
  
  return (
    <div>
      <Header />
      <NavBar />
      <CompanyPage data={data} />
      <Footer/>
    </div>
  );
};

export default Company;
