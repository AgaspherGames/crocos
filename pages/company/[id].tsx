import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import NavBar from "@/app/components/NavBar/NavBar";
import CompanyPage from "@/app/pages/Company/CompanyPage";
import React from "react";
interface CompanyProps {}

const Company: React.FC<CompanyProps> = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <CompanyPage />
      <Footer/>
    </div>
  );
};

export default Company;
