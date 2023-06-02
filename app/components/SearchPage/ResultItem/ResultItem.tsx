import React from "react";
import TopBadge from "../../Badges/TopBadge";
import Rating from "../../Rating/Rating";
import GeoIcon from "@/app/icons/GeoIcon";
import Image from "next/image";
import StarIcon from "@/app/icons/StarIcon";
import FlatButton from "../../FlatButton/FlatButton";
import ArrowCircleIcon from "@/app/icons/ArrowCircleIcon";
import { ICompany } from "@/app/types/interfaces";
interface ResultItemProps {
  company: ICompany;
}

const ResultItem: React.FC<ResultItemProps> = ({ company }) => {
  return (
    <div className="result-item">
      <div className="card-top">
        {!!company.top_five && <TopBadge type="top">Топ 5</TopBadge>}
        {!!company.rating && <Rating rating={company.rating} />}
        <div className="with-icon orange">
          <GeoIcon />
          <p>{company.address}</p>
        </div>
      </div>
      <div className="content">
        <div className="card-title">
          <div className="price">
            <Image
              className="logo"
              alt="security"
              src={company.logo}
              width={60}
              height={60}
            />
            <div className="price-text">
              <div className="security-bold">
                {company.title}
                <div className="stars">
                  <StarIcon
                    className={`${company.rating >= 1 ? "gold" : ""}`}
                  />
                  <StarIcon
                    className={`${company.rating >= 2 ? "gold" : ""}`}
                  />
                  <StarIcon
                    className={`${company.rating >= 3 ? "gold" : ""}`}
                  />
                  <StarIcon
                    className={`${company.rating >= 4 ? "gold" : ""}`}
                  />
                  <StarIcon
                    className={`${company.rating >= 5 ? "gold" : ""}`}
                  />
                </div>
                <p className="reviews-count">
                  {company.reviews.length} отзывов
                </p>
              </div>
              {company.minimal_price ? (
                <p className="price-label">от {company.minimal_price} тнг.</p>
              ) : (
                <p className="price-label">Договорная цена</p>
              )}
            </div>
          </div>
        </div>
        <div className="text">
          <p>{company.short_description}</p>
        </div>
        <div className="card-bottom">
          <div className="cost">
            <p className="bold">Абонентская плата от</p>
            <p className="cost-value">По договоренности</p>
          </div>
          <FlatButton outline>
            Контакты <ArrowCircleIcon />{" "}
          </FlatButton>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
