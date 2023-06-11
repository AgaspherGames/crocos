import TopBadge from "@/app/components/Badges/TopBadge";
import Button from "@/app/components/Button/Button";
import FlatButton from "@/app/components/FlatButton/FlatButton";
import Modal from "@/app/components/Modal/Modal";
import ModalTitle from "@/app/components/Modal/ModalTitle/ModalTitle";
import Rating from "@/app/components/Rating/Rating";
import Stars from "@/app/components/Stars/Stars";
import ArrowCircleIcon from "@/app/icons/ArrowCircleIcon";
import DownloadIcon from "@/app/icons/DownloadIcon";
import GeoIcon from "@/app/icons/GeoIcon";
import { ICompanyService } from "@/app/types/ICompanyService";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
interface CompanyCardProps {
  data: ICompanyService;
  rating: number;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ data, rating }) => {
  const [modalOpened, setModalOpened] = useState(false);
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
          <div className="rating-badge">
            {!!data.top_five && <TopBadge type="top">Топ 5</TopBadge>}
            {!!rating && <Rating rating={rating} />}
          </div>

          <div className="address">
            <div className="with-icon">
              <GeoIcon />
              <div>
                <p>{data.address}</p>
              </div>
            </div>
            {data.handbook_regions.length > 1 && (
              <FlatButton
                onClick={() => {
                  setModalOpened(true);
                }}
                className="more-adress"
              >
                Еще адреса
              </FlatButton>
            )}
            <Modal
              className="company-page-modal"
              opened={modalOpened}
              setOpened={setModalOpened}
            >
              <ModalTitle>Адреса компании</ModalTitle>
              <div className="items">
                {data.handbook_regions.map((region) => (
                  <div key={region.id} className="with-icon">
                    <GeoIcon />
                    <div className="orange">
                      <p>{region.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Modal>
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
