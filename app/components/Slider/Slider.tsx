import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Slide, { IPost } from "./Slides/Slide";
import arrowIcon from '../../icons/arrow.svg'
import Arrow from "./Arrow/Arrow";

interface SliderProps {}

const Slider: React.FC<SliderProps> = () => {
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
  }
  function decrementSlide() {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }

  return (
    <div className="slider">
      <div className="slider-wrapper">
        <div
          style={{ transform: `translateX(${-((currentSlide/slides.length)*100)}%)` }}
          className="slide-line"
        >
          {slides.map((el) => (
            <Slide key={el.src} {...el} />
          ))}
        </div>

      </div>
        <button className="slider-btn left" onClick={decrementSlide}><Arrow color="#00A2E4" /></button>
      <button className="slider-btn right" onClick={incrementSlide}><Arrow color="white" rotate={180} /></button>
      <div className="line">
        <div style={{width: `${(currentSlide/(slides.length-1))*100}%` }} className="inner"/>
      </div>
    </div>
  );
};

export default Slider;
