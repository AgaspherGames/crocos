import BackgroundLine from "@/app/components/BackgroundLine/BackgroundLine";
import TopBadge from "@/app/components/Badges/TopBadge";
import Button from "@/app/components/Button/Button";
import FlatButton from "@/app/components/FlatButton/FlatButton";
import Rating from "@/app/components/Rating/Rating";
import Arrow from "@/app/components/SliderWrapper/Arrow/Arrow";
import Stars from "@/app/components/Stars/Stars";
import Tabs from "@/app/components/Tabs/Tabs";
import Title from "@/app/components/Title/Title";
import TitleBanner from "@/app/components/TitleBanner/TitleBanner";
import ArrowCircleIcon from "@/app/icons/ArrowCircleIcon";
import ArrowIcon from "@/app/icons/ArrowIcon";
import BagHappyIcon from "@/app/icons/BagHappyIcon";
import DownloadIcon from "@/app/icons/DownloadIcon";
import GeoIcon from "@/app/icons/GeoIcon";
import StarIcon from "@/app/icons/StarIcon";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import CompanyService from "./CompanyService/CompanyService";
import SliderWrapper from "@/app/components/SliderWrapper/SliderWrapper";
import VacancyCard, {
  VacancyCardProps,
} from "@/app/components/MainPage/Vacancies/VacancyCard/VacancyCard";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import LikeIcon from "@/app/icons/LikeIcon";
interface CompanyPageProps {}

const CompanyPage: React.FC<CompanyPageProps> = () => {
  const [accordionOpened, setAccordionOpened] = useState(false);

  const [vacancies, setVacancies] = useState<VacancyCardProps[]>([
    {
      badgeText: "Ищу работу",
      city: "Астана",
      experience: "1-3 года",
      salary: "от 100 000 до 200 000 KZT",
      text: "Охранник на объект различных категорий",
    },
    {
      badgeText: "Ищу работу",
      city: "Астана",
      experience: "1-3 года",
      salary: "з/п не указана",
      text: "Охранник на объект различных категорий",
    },
    {
      badgeText: "Ищу работу",
      city: "Астана",
      experience: "1-3 года",
      salary: "от 100 000 до 200 000 KZT",
      text: "Охранник на объект различных категорий",
    },
    {
      badgeText: "Ищу работу",
      city: "Астана",
      experience: "1-3 года",
      salary: "от 100 000 до 200 000 KZT",
      text: "Охранник на объект различных категорий",
    },
    {
      badgeText: "Ищу работу",
      city: "Астана",
      experience: "1-3 года",
      salary: "з/п не указана",
      text: "Охранник на объект различных категорий",
    },
    // {
    //   badgeText: "Ищу работу",
    //   city: "Астана",
    //   experience: "1-3 года",
    //   salary: "от 100 000 до 200 000 KZT",
    //   text: "Охранник на объект различных категорий",
    // },
  ]);

  const [windowSize, setWindowSize] = useState(0);

  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  });

  const slides = ~~((windowSize - 200) / 460);

  function incrementSlide() {
    swiperRef.current?.swiper.slideNext();
  }
  function decrementSlide() {
    swiperRef.current?.swiper.slidePrev();
  }

  let description = `
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
          accusantium eaque, quasi distinctio ullam doloribus dicta!`;

  description += `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quos
  excepturi quae ab sequi voluptatem, ea expedita eos nemo totam
  blanditiis tenetur consequatur nesciunt tempore dignissimos debitis
  sit laborum non deleniti soluta vitae veritatis dicta cupiditate?
  Perferendis id ratione doloremque perspiciatis blanditiis odio fugit
  tenetur libero minima, rem nemo natus deserunt dignissimos eveniet
  dicta! Facere molestias sunt alias corporis, repellendus eaque maxime
  provident? Quas itaque enim numquam neque quasi illum, explicabo
  veniam, molestiae laborum dignissimos iure alias consequuntur`;

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

      <div
        data-open={accordionOpened.toString()}
        data-big={description.length > 600}
        className="company-accordion"
      >
        <div className="text">
          <p>{description}</p>
        </div>
        {description.length > 600 && (
          <div
            onClick={() => {
              setAccordionOpened((prev) => !prev);
            }}
            className="more-less"
          >

            {
              accordionOpened?'Скрыть описание' :'Читать описание'
            }
            
            <ArrowIcon
              className="arrow-icon"
              rotate={accordionOpened ? 90 : 270}
            />
          </div>
        )}
      </div>

      <Title text="Наши услуги" />
      <Tabs
        className="services-tabs"
        tabs={[
          {
            name: (
              <div className="tab-name-wrap">
                {" "}
                <BagHappyIcon /> Пультовая охрана
              </div>
            ),
            tab: (
              <div>
                <CompanyService />
                <hr />
                <CompanyService />
              </div>
            ),
          },
          {
            name: (
              <div className="tab-name-wrap">
                {" "}
                <BagHappyIcon /> Физическая охрана
              </div>
            ),
            tab: <div>Физическая охрана</div>,
          },
          {
            name: (
              <div className="tab-name-wrap">
                {" "}
                <BagHappyIcon /> Консультирование в области охраны
              </div>
            ),
            tab: <div>Консультирование в области охраны</div>,
          },
        ]}
      />
      <div className="vacansies">
        <Title text="Вакансии компании" />
        {vacancies.length > slides ? (
          <SliderWrapper
            decrement={decrementSlide}
            increment={incrementSlide}
            swiperRef={swiperRef}
          >
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              // slidesPerView={3}
              slidesPerView={Math.min(slides || 1, vacancies.length)}
              className="swiper"
            >
              {vacancies.map((el, ind) => (
                <SwiperSlide key={ind}>
                  <VacancyCard {...el} />
                </SwiperSlide>
              ))}
            </Swiper>
          </SliderWrapper>
        ) : (
          <div className="flex">
            {vacancies.map((el, ind) => (
              <VacancyCard key={ind} {...el} />
            ))}
          </div>
        )}
      </div>
      <div className="company-reviews-section">
        <Title text="Отзывы о компании" />
        <div className="reviews">
          <div className="reviews-div">
            <div className="top">
              <TopBadge type="top">Топ 5</TopBadge>
              <p className="review-company-title">Smart Home Security</p>
            </div>
            <div className="review-rating">
              <Rating rating={4.7} />
              <Stars stars={4} />
              <p className="reviews-count">12 отзывов</p>
            </div>
            <hr className="review-hr" />
            <div className="add-review">
              <p>Поставьте нам оценку</p>
              <Button>Оставить отзыв</Button>
            </div>
          </div>
          <div className="best-offer">
            <p className="offer-tittle">Лучшее предложение компании</p>
            <div className="best-offer-item">
              <TopBadge type="new">Лучшая цена <LikeIcon/> </TopBadge>
              <div>
                <p className="offer-tittle">Охранная сигнализация</p>
              </div>
              <div>
                <p>В предложение входит</p>
              </div>
              <div>
                <p className="orange">Оплачивается 1 раз</p>
                <p>
                  Комплект охранного оборудования от 40 000 Т <br />
                  <br />
                  *зависит от охраняемого объекта
                  <br />
                </p>
              </div>
              <div>
                <p className="light-blue offer-medium">
                  Монтаж оборудования
                  <br />
                </p>
                <p className="offer-big light-blue">0 Т</p>
              </div>
              <div>
                <p className="orange offer-medium">Оплачивается ежемесячно </p>
                <p>Абонплата</p>
                <p className="offer-big">10 000 Т</p>
              </div>
              <Button>Подать заявку</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
