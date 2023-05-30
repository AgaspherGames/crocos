import React from "react";
import FlatButton from "../../FlatButton/FlatButton";
import Image from "next/image";
import GeoIcon from "@/app/icons/GeoIcon";
export interface VacancyCardProps {
  badgeText: string;
  city: string;
  text: string;
  salary: string;
  experience: string;
}

const VacancyCard: React.FC<VacancyCardProps> = ({
  badgeText,
  city,
  text,
  salary,
  experience,
}) => {
  return (
    <div className="card">
      <div className="card-top">
        <FlatButton color="green" outline>
          {badgeText}
        </FlatButton>
        <FlatButton color="orange">
          <GeoIcon/>
          {city}
        </FlatButton>
      </div>
      <div className="security">
        <Image
          width={27}
          height={27}
          alt="Security"
          src="/assets/services/securityIcon.png"
        />
        <p className="security-bold">Security</p>
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
