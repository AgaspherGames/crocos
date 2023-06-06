import Image from "next/image";
import React, {
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "../Button/Button";
// import Slide, { IPost } from "./Slides/Slide";
import Arrow from "./Arrow/Arrow";

import { Pagination, Navigation } from "swiper";
import { SwiperSlide, useSwiper, SwiperRef } from "swiper/react";
import "swiper/css";
interface SliderWrapperProps {
  children: ReactNode;
  swiperRef: RefObject<SwiperRef>;
  increment: React.MouseEventHandler<HTMLButtonElement>;
  decrement: React.MouseEventHandler<HTMLButtonElement>;
  progressBar?: number;
  onlyMobileArrow?: boolean;
}

const SliderWrapper: React.FC<SliderWrapperProps> = ({
  children,
  swiperRef,
  increment,
  decrement,
  progressBar,
  onlyMobileArrow=false,
}) => {

  return (
    <div className="slider">
      <div className="slider-wrapper">
        <div className="slide-line">{children}</div>
      </div>
      <button className={`slider-btn left ${onlyMobileArrow?'only-mobile':''} `} onClick={decrement}>
        <Arrow color="#00A2E4" />
      </button>
      <button className={`slider-btn right ${onlyMobileArrow?'only-mobile':''} `} onClick={increment}>
        <Arrow color="white" rotate={180} />
      </button>
      {progressBar !== undefined && (
        <div className="line">
          <div style={{ width: `${progressBar * 100}%` }} className="inner" />
        </div>
      )}
    </div>
  );
};

export default SliderWrapper;
