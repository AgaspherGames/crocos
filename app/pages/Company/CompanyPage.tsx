import BackgroundLine from "@/app/components/BackgroundLine/BackgroundLine";
import TopBadge from "@/app/components/Badges/TopBadge";
import Button from "@/app/components/Button/Button";
import Rating from "@/app/components/Rating/Rating";
import Stars from "@/app/components/Stars/Stars";
import Tabs from "@/app/components/Tabs/Tabs";
import Title from "@/app/components/Title/Title";
import TitleBanner from "@/app/components/TitleBanner/TitleBanner";
import BagHappyIcon from "@/app/icons/BagHappyIcon";
import React, { useState, useRef, useEffect } from "react";
import CompanyService from "./CompanyService/CompanyService";
import SliderWrapper from "@/app/components/SliderWrapper/SliderWrapper";
import VacancyCard, {
  VacancyCardProps,
} from "@/app/components/MainPage/Vacancies/VacancyCard/VacancyCard";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import LikeIcon from "@/app/icons/LikeIcon";
import { ICompanyService } from "@/app/types/ICompanyService";
import { IFilter, IService } from "@/app/types/interfaces";
import { AvgRating } from "@/app/utils/features";
import CompanyCard from "./CompanyCard/CompanyCard";
import CompanyAccordion from "./CompanyAccordion/CompanyAccordion";
import CompanyServices from "./CompanyServices/CompanyServices";

interface CompanyPageProps {
  data: ICompanyService;
  services: IFilter[];
}

const CompanyPage: React.FC<CompanyPageProps> = ({ data, services }) => {
  console.log(data);

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

  const [vacancies2, setVacancies2] = useState<VacancyCardProps[]>(
    data.vacancies.map((it) => ({
      city: it.handbook_region.title,
      experience: it.handbook_experience.title,
      salary: `от ${it.salary_min} до ${it.salary_max} KZT`,
      text: it.title,
      companyImage: data.logo,
      companyTitle: data.title,
    }))
  );

  const [rating, setRating] = useState(AvgRating(data.reviews));
  useEffect(() => {
    setRating(AvgRating(data.reviews));
  }, [data]);

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


  return (
    <div className="company-page">
      <BackgroundLine />
      <TitleBanner
        text="Каталог охранных услуг"
        imgUrl="/assets/banners/katalog.png"
        type="full"
      />

      <CompanyCard data={data} rating={rating} />

      <CompanyAccordion description={data.description} />

      <CompanyServices data={data} services={services} />

      <div className="vacansies">
        <Title text="Вакансии компании" />
        {vacancies2.length > slides ? (
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
              {vacancies2.map((el, ind) => (
                <SwiperSlide key={ind}>
                  <VacancyCard {...el} />
                </SwiperSlide>
              ))}
            </Swiper>
          </SliderWrapper>
        ) : (
          <div className="flex">
            {vacancies2.map((el, ind) => (
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
              {data.top_five && <TopBadge type="top">Топ 5</TopBadge>}
              <p className="review-company-title"> {data.title} </p>
            </div>
            <div className="review-rating">
              <Rating rating={rating} />
              <Stars stars={rating} />
              <p className="reviews-count">{data.reviews.length} отзывов</p>
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
              <TopBadge type="new">
                Лучшая цена <LikeIcon />{" "}
              </TopBadge>
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
