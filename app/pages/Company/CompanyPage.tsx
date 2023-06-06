import BackgroundLine from "@/app/components/BackgroundLine/BackgroundLine";
import TopBadge from "@/app/components/Badges/TopBadge";
import Button from "@/app/components/Button/Button";
import FlatButton from "@/app/components/FlatButton/FlatButton";
import Rating from "@/app/components/Rating/Rating";
import Arrow from "@/app/components/SliderWrapper/Arrow/Arrow";
import Stars from "@/app/components/Stars/Stars";
import TitleBanner from "@/app/components/TitleBanner/TitleBanner";
import ArrowCircleIcon from "@/app/icons/ArrowCircleIcon";
import ArrowIcon from "@/app/icons/ArrowIcon";
import DownloadIcon from "@/app/icons/DownloadIcon";
import GeoIcon from "@/app/icons/GeoIcon";
import StarIcon from "@/app/icons/StarIcon";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
interface CompanyPageProps {}

const CompanyPage: React.FC<CompanyPageProps> = () => {
  const [accordionOpened, setAccordionOpened] = useState(false);
  return (
    <div className="company-page">
      <BackgroundLine />
      <TitleBanner
        text="Каталог охранных услуг"
        imgUrl="/assets/banners/katalog.png"
        type="full"
      />
      <div className="company-card">
        <Image
          alt="company image"
          src={"/assets/services/securityIcon.png"}
          width={180}
          height={180}
        />
        <div className="company-info">
          <div className="company-title">Smart Home Security</div>
          <div className="info-top">
            <TopBadge type="top">Топ 5</TopBadge>
            <Rating rating={4.7} />
            <div className="address">
              <div className="with-icon">
                <GeoIcon />
                <div>
                  <p>Алматы, мкр.Таусамалы, с/т Кокбель, 32</p>
                </div>
              </div>
              <Link href={"#"}>Еще адреса</Link>
            </div>
          </div>
          <div className="info-bottom">
            <Stars stars={4} />
            <p className="reviews-count">{12} отзывов</p>
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

      <div data-open={accordionOpened.toString()} className="company-accordion">
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quos
          excepturi quae ab sequi voluptatem, ea expedita eos nemo totam
          blanditiis tenetur consequatur nesciunt tempore dignissimos debitis
          sit laborum non deleniti soluta vitae veritatis dicta cupiditate?
          Perferendis id ratione doloremque perspiciatis blanditiis odio fugit
          tenetur libero minima, rem nemo natus deserunt dignissimos eveniet
          dicta! Facere molestias sunt alias corporis, repellendus eaque maxime
          provident? Quas itaque enim numquam neque quasi illum, explicabo
          veniam, molestiae laborum dignissimos iure alias consequuntur
          voluptate atque amet esse nam. Tempore accusamus laudantium, nam animi
          a similique quis officia sapiente accusantium eaque, quasi distinctio
          ullam doloribus dicta! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Beatae quos excepturi quae ab sequi voluptatem, ea
          expedita eos nemo totam blanditiis tenetur consequatur nesciunt
          tempore dignissimos debitis sit laborum non deleniti soluta vitae
          veritatis dicta cupiditate? Perferendis id ratione doloremque
          perspiciatis blanditiis odio fugit tenetur libero minima, rem nemo
          natus deserunt dignissimos eveniet dicta! Facere molestias sunt alias
          corporis, repellendus eaque maxime provident? Quas itaque enim numquam
          neque quasi illum, explicabo veniam, molestiae laborum dignissimos
          iure alias consequuntur voluptate atque amet esse nam. Tempore
          accusamus laudantium, nam animi a similique quis officia sapiente
          accusantium eaque, quasi distinctio ullam doloribus dicta!
        </div>
        <div
          onClick={() => {
            setAccordionOpened((prev) => !prev);
          }}
          className="more-less"
        >
          Читать описание
          <ArrowIcon
            className="arrow-icon"
            rotate={accordionOpened ? 90 : 270}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
