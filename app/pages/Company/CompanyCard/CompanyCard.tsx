import TopBadge from "@/app/components/Badges/TopBadge";
import Button from "@/app/components/Button/Button";
import FlatButton from "@/app/components/FlatButton/FlatButton";
import Rating from "@/app/components/Rating/Rating";
import Stars from "@/app/components/Stars/Stars";
import ArrowCircleIcon from "@/app/icons/ArrowCircleIcon";
import DownloadIcon from "@/app/icons/DownloadIcon";
import GeoIcon from "@/app/icons/GeoIcon";
import { ICompanyService } from "@/app/types/ICompanyService";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface CompanyCardProps {
  data: ICompanyService;
  rating: number;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ data, rating }) => {
  return (
    <div className="company-card">
      <Image
        className="logo"
        alt="company image"
        src={data.logo}
        width={180}
        height={180}
      />
      <div className="company-info">
        <div className="company-title">{data.title}</div>
        <div className="info-top">
          {!!data.top_five && <TopBadge type="top">Топ 5</TopBadge>}
          {
            !!rating&&<Rating rating={rating} />
          }
          
          <div className="address">
            <div className="with-icon">
              <GeoIcon />
              <div>
                <p>{data.address}</p>
              </div>
            </div>
            <Link href={"#"}>Еще адреса</Link>
          </div>
        </div>
        <div className="info-bottom">
          <Stars stars={rating} />
          <p className="reviews-count">{data.reviews.length} отзывов</p>
        </div>
      </div>
      <div className="buttons">
        <Button>
          Хочу здесь работать <ArrowCircleIcon className="white-icon" />
        </Button>
        <FlatButton outline>
          Скачать ценовое предложение <DownloadIcon />
        </FlatButton>
        <FlatButton outline>
          Скачать презентацию <DownloadIcon />
        </FlatButton>
      </div>
    </div>
  );
};

export default CompanyCard;
