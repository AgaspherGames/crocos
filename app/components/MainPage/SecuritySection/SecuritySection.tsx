import Title from "@/app/components/Title/Title";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FlatButton from "@/app/components/FlatButton/FlatButton";
import SecurityCard, { SecurityCardProps } from "./SecurityCard/SecurityCard";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderWrapper from "@/app/components/SliderWrapper/SliderWrapper";
import GeoIcon from "@/app/icons/GeoIcon";
import TitleButtons from "@/app/components/TitleButtons/TitleButtons";
import { title } from "process";

interface SecuritySectionProps {}

const SecuritySection: React.FC<SecuritySectionProps> = () => {
  const [cards, setCards] = useState<SecurityCardProps[]>([
    {
      id: 1,
      badge: {
        text: "Топ 10",
        type: "top",
      },
      rating: 4.7,
      price: "от 5 000 тнг.",
      text: "Физическая охрана от 300 000 тнг./мес. Пультовая охрана от 10 000 тнг./мес. Системы безопасности. Установка, монтаж и обслуживание.",
    },
    {
      id: 2,
      badge: {
        text: "NEW",
        type: "new",
      },
      rating: 4.2,
      price: "от 5 000 тнг.",
      text: "Физическая охрана от 300 000 тнг./мес. Пультовая охрана от 10 000 тнг./мес. Системы безопасности. Установка, монтаж и обслуживание.",
    },
    {
      id: 3,
      badge: {
        text: "Акция",
        type: "sale",
      },
      rating: 4.1,
      price: "от 5 000 тнг.",
      text: "Физическая охрана от 300 000 тнг./мес. Пультовая охрана от 10 000 тнг./мес. Системы безопасности. Установка, монтаж и обслуживание.",
    },
    {
      id: 4,
      badge: {
        text: "Топ 10",
        type: "top",
      },
      rating: 4.9,
      price: "от 5 000 тнг.",
      text: "Физическая охрана от 300 000 тнг./мес. Пультовая охрана от 10 000 тнг./мес. Системы безопасности. Установка, монтаж и обслуживание.",
    },
  ]);

  const [windowSize, setWindowSize] = useState(0);

  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  });

  const slides = ~~((windowSize - 200) / 350);

  function incrementSlide() {
    swiperRef.current?.swiper.slideNext();
  }
  function decrementSlide() {
    swiperRef.current?.swiper.slidePrev();
  }

  return (
    <div id="security-services" className="security">
      <TitleButtons
        buttons={
          <>
            <FlatButton outline>Смотреть все</FlatButton>
            <FlatButton outline color="orange">
              Показать на карте
              <GeoIcon />
            </FlatButton>
          </>
        }
        title="Охранные компании вашего города"
      />
      <SliderWrapper
        decrement={decrementSlide}
        increment={incrementSlide}
        swiperRef={swiperRef}
      >
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={Math.min(slides || 1, cards.length)}
          className="swiper"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <SecurityCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
      <div className="cards"></div>
    </div>
  );
};

export default SecuritySection;
