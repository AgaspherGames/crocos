import React from "react";
import FlatButton from "@/app/components/FlatButton/FlatButton";
import Image from "next/image";
import GeoIcon from "@/app/icons/GeoIcon";
export interface VacancyCardProps {
  badgeText?: string;
  city: string;
  text: string;
  salary: string;
  experience: string;
  companyTitle?: string;
  companyImage?: string;
}

const VacancyCard: React.FC<VacancyCardProps> = ({
  badgeText,
  city,
  text,
  salary,
  experience,
  companyTitle = "Security",
  companyImage = "/assets/services/securityIcon.png",
}) => {
  return (
    <div className="card">
      <div className="card-top">
        {badgeText && (
          <FlatButton color="green" outline>
            {badgeText}
          </FlatButton>
        )}

        <FlatButton color="orange">
          <GeoIcon />
          {city}
        </FlatButton>
      </div>
      <div className="security">
        <Image
          width={27}
          height={27}
          alt="Security"
          src={companyImage}
          className="logo"
        />
        <p className="security-bold">{companyTitle}</p>
      </div>
      <div className="info">
        <p>{text}</p>
        <p className="price">{salary}</p>
        <br />
        <p>Требуемый опыт работы: {experience}</p>
      </div>
      <FlatButton>Подробнее</FlatButton>
    </div>
  );
};

export default VacancyCard;
