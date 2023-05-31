import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../Button/Button";
import Slide, { IPost } from "./Slides/Slide";
import arrowIcon from "../../icons/arrow.svg";
import Arrow from "./Arrow/Arrow";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper, SwiperRef } from "swiper/react";
import SliderWrapper from "../../SliderWrapper/SliderWrapper";

interface SliderProps {}

const Slider: React.FC<SliderProps> = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const [slides, setSlides] = useState<IPost[]>([
    {
      src: "/assets/slides/slide1.png",
      buttonText: "Смотреть компании",
      text: "Все услуги и ценовые предложения вашего региона размещены на одной площадке и регулярно обновляются",
      onClick: () => {},
    },
    {
      src: "/assets/slides/slide2.png",
      buttonText: "Смотреть компании",
      text: "Все услуги и ценовые предложения вашего региона размещены на одной площадке и регулярно обновляются",
      onClick: () => {},
    },
    {
      src: "/assets/slides/slide3.png",
      buttonText: "Смотреть компании",
      text: "Все услуги и ценовые предложения вашего региона размещены на одной площадке и регулярно обновляются",
      onClick: () => {},
    },
    {
      src: "/assets/slides/slide4.png",
      buttonText: "Смотреть компании",
      text: "Все услуги и ценовые предложения вашего региона размещены на одной площадке и регулярно обновляются",
      onClick: () => {},
    },
  ]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  function incrementSlide() {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
    swiperRef.current?.swiper.slideNext();
  }
  function decrementSlide() {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
    swiperRef.current?.swiper.slidePrev();
  }
  return(
    <SliderWrapper progressBar={(currentSlide+1)/slides.length} swiperRef={swiperRef} increment={incrementSlide} decrement={decrementSlide} >
      <Swiper
            onSlideChange={() => {
              setCurrentSlide(swiperRef.current?.swiper.realIndex || 0);
            }}
            ref={swiperRef}
            slidesPerView={"auto"}
            loop={true}
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper"
          >
            {slides.map((el) => (
              <SwiperSlide key={el.src}>
                <Slide {...el} />
              </SwiperSlide>
            ))}
          </Swiper>
    </SliderWrapper>
  )

  return (
    <div className="slider">
      <div className="slider-wrapper">
        <div className="slide-line">
          <Swiper
            onSlideChange={() => {
              setCurrentSlide(swiperRef.current?.swiper.realIndex || 0);
            }}
            ref={swiperRef}
            slidesPerView={"auto"}
            loop={true}
            pagination={{
              clickable: true,
            }}
            spaceBetween={24}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper"
          >
            {slides.map((el) => (
              <SwiperSlide key={el.src}>
                <Slide {...el} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <button className="slider-btn left" onClick={decrementSlide}>
        <Arrow color="#00A2E4" />
      </button>
      <button className="slider-btn right" onClick={incrementSlide}>
        <Arrow color="white" rotate={180} />
      </button>
      <div className="line">
        <div
          style={{ width: `${(currentSlide / (slides.length - 1)) * 100}%` }}
          className="inner"
        />
      </div>
    </div>
  );
};

export default Slider;
