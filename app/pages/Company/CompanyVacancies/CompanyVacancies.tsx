import VacancyCard, {
  VacancyCardProps,
} from "@/app/components/MainPage/Vacancies/VacancyCard/VacancyCard";
import SliderWrapper from "@/app/components/SliderWrapper/SliderWrapper";
import Title from "@/app/components/Title/Title";
import { ICVacancy, ICompanyService } from "@/app/types/ICompanyService";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
interface CompanyVacanciesProps {
  data: ICompanyService;
}

interface V extends ICVacancy {}

const CompanyVacancies: React.FC<CompanyVacanciesProps> = ({ data }) => {
  const [vacancies] = useState<VacancyCardProps[]>(function () {
    if (!data.vacancies[0]) {
      return [];
    }
    if (typeof data.vacancies[0] == "object") {
      return (data.vacancies as ICVacancy[]).map((value: ICVacancy) => {
        return {
          city: value.handbook_region.title,
          experience: value.handbook_experience.title,
          salary: `от ${value.salary_min} до ${value.salary_max} KZT`,
          text: value.title,
          companyImage: data.logo,
          companyTitle: data.title,
        };
      }) as VacancyCardProps[];
    } else {
      return [];
    }
  });


  const [windowSize, setWindowSize] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);
  const slides = ~~((windowSize - 200) / 460);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  });

  function incrementSlide() {
    swiperRef.current?.swiper.slideNext();
  }
  function decrementSlide() {
    swiperRef.current?.swiper.slidePrev();
  }

  if (!vacancies.length){
    return <div className="vacansies"></div>
  }

  return (
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
  );
};

export default CompanyVacancies;
