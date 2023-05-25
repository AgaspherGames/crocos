import Image from "next/image";
import React, { useEffect, useState } from "react";

interface SliderProps {}

const Slider: React.FC<SliderProps> = () => {
  const [slides, setSlides] = useState<string[]>([
    "/assets/slides/slide1.png",
    "/assets/slides/slide2.png",
    "/assets/slides/slide3.png",
    "/assets/slides/slide5.png",
  ]);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  function incrementSlide() {
    setCurrentSlide((prev) => prev + 1);
  }
  function decrementSlide() {
    setCurrentSlide((prev) => prev - 1);
  }

  return (
    <div className="slider">
      <div className="slider-wrapper">
        <div style={{marginLeft: `${-(currentSlide*1073)}px`}} className="slide-line">
        {slides.map((el) => (
          <div className="slide">
            <Image alt="Slide" src={el} width={1073} height={413} />
          </div>
        ))}
        </div>
      </div>
      <button onClick={incrementSlide}>+</button>
      <button onClick={decrementSlide}>-</button>
    </div>
  );
};

export default Slider;
