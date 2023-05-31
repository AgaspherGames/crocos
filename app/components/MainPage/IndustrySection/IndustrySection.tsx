import React, { useEffect, useRef, useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TitleButtons from "@/app/components/TitleButtons/TitleButtons";
import FlatButton from "@/app/components/FlatButton/FlatButton";
import NewsCard, { NewsCardProps } from "./NewsCard/NewsCard";
import SliderWrapper from "@/app/components/SliderWrapper/SliderWrapper";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import Tabs from "@/app/components/Tabs/Tabs";
// import Slide from "../Slider/Slides/Slide";

interface IndustrySectionProps {}

const IndustrySection: React.FC<IndustrySectionProps> = () => {
  const swiperRefTop = useRef<SwiperRef>(null);
  const swiperRefBottom = useRef<SwiperRef>(null);
  const [windowSize, setWindowSize] = useState(0);

  const [slides, setSlides] = useState(1);

  useEffect(() => {
    setWindowSize(window.innerWidth);
    setSlides(~~((windowSize - 200) / 350) || 1);
  });
  function incrementTop() {
    swiperRefTop.current?.swiper.slideNext();
  }
  function incrementBottom() {
    swiperRefBottom.current?.swiper.slideNext();
  }
  function decrementTop() {
    swiperRefTop.current?.swiper.slidePrev();
  }
  function decrementBottom() {
    swiperRefBottom.current?.swiper.slidePrev();
  }
  const [news, setNews] = useState<NewsCardProps[]>([
    {
      category: "Категория",
      date: "27.08.2022",
      title: "В школах Казахстана введут специализированную охрану",
      text: "Объекты организаций образования сегодня в большинстве отнесены к категории объектов, уязвимых в террористическом отношении. В начале мая постановлением правительства утверждены...",
      imgUrl: "/assets/news/card-1.png",
    },
    {
      category: "Категория",
      date: "27.08.2022",
      title: "В школах Казахстана введут специализированную охрану",
      text: "Объекты организаций образования сегодня в большинстве отнесены к категории объектов, уязвимых в террористическом отношении. В начале мая постановлением правительства утверждены...",
      imgUrl: "/assets/news/card-2.png",
    },
    {
      category: "Категория",
      date: "27.08.2022",
      title: "В школах Казахстана введут специализированную охрану",
      text: "Объекты организаций образования сегодня в большинстве отнесены к категории объектов, уязвимых в террористическом отношении. В начале мая постановлением правительства утверждены...",
      imgUrl: "/assets/news/card-3.png",
    },
    {
      category: "Категория",
      date: "27.08.2022",
      title: "В школах Казахстана введут специализированную охрану",
      text: "Объекты организаций образования сегодня в большинстве отнесены к категории объектов, уязвимых в террористическом отношении. В начале мая постановлением правительства утверждены...",
      imgUrl: "/assets/news/card-4.png",
    },
  ]);
  const [events, setEvents] = useState<NewsCardProps[]>([
    {
      category: "Категория",
      date: "27.08.2022",
      title: "В школах Казахстана введут специализированную охрану",
      text: "Объекты организаций образования сегодня в большинстве отнесены к категории объектов, уязвимых в террористическом отношении. В начале мая постановлением правительства утверждены...",
      imgUrl: "/assets/news/card-4.png",
    },
    {
      category: "Категория",
      date: "27.08.2022",
      title: "В школах Казахстана введут специализированную охрану",
      text: "Объекты организаций образования сегодня в большинстве отнесены к категории объектов, уязвимых в террористическом отношении. В начале мая постановлением правительства утверждены...",
      imgUrl: "/assets/news/card-3.png",
    },
    {
      category: "Категория",
      date: "27.08.2022",
      title: "В школах Казахстана введут специализированную охрану",
      text: "Объекты организаций образования сегодня в большинстве отнесены к категории объектов, уязвимых в террористическом отношении. В начале мая постановлением правительства утверждены...",
      imgUrl: "/assets/news/card-2.png",
    },
    {
      category: "Категория",
      date: "27.08.2022",
      title: "В школах Казахстана введут специализированную охрану",
      text: "Объекты организаций образования сегодня в большинстве отнесены к категории объектов, уязвимых в террористическом отношении. В начале мая постановлением правительства утверждены...",
      imgUrl: "/assets/news/card-1.png",
    },
  ]);

  return (
    <div id="news" className="industry-section">
      <TitleButtons
        title="Отраслевой журнал"
        buttons={<FlatButton outline>Смотреть все</FlatButton>}
      />
      <Tabs
        tabs={[
          {
            name: "Новости",
            tab: (
              <SliderWrapper
                swiperRef={swiperRefTop}
                increment={incrementTop}
                decrement={decrementTop}
                onlyMobileArrow
              >
                <Swiper
                  ref={swiperRefTop}
                  slidesPerView={slides}
                  pagination={{
                    clickable: true,
                  }}
                  spaceBetween={30}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="swiper"
                >
                  {news.map((el) => (
                    <SwiperSlide key={el.imgUrl}>
                      <NewsCard {...el} />
                    </SwiperSlide>
                  ))}
                  {news.map((el) => (
                    <SwiperSlide key={el.imgUrl}>
                      <NewsCard {...el} />
                    </SwiperSlide>
                  ))}
                  ,
                </Swiper>
              </SliderWrapper>
            ),
          },
          {
            name: "Ивенты",
            tab: (
              <SliderWrapper
                swiperRef={swiperRefBottom}
                increment={incrementBottom}
                decrement={decrementBottom}
                onlyMobileArrow
              >
                <Swiper
                  ref={swiperRefBottom}
                  slidesPerView={slides}
                  pagination={{
                    clickable: true,
                  }}
                  spaceBetween={30}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="swiper"
                >
                  {events.map((el) => (
                    <SwiperSlide key={el.imgUrl}>
                      <NewsCard {...el} />
                    </SwiperSlide>
                  ))}
                  {events.map((el) => (
                    <SwiperSlide key={el.imgUrl}>
                      <NewsCard {...el} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </SliderWrapper>
            ),
          },
        ]}
      />
    </div>
  );

  // return (
  //   <div className="industry-section">
  //     <TitleButtons
  //       title="Отраслевой журнал"
  //       buttons={<FlatButton outline>Смотреть все</FlatButton>}
  //     />
  //     <Tabs defaultFocus={true}>
  //       <TabList>
  //         <Tab>Новости</Tab>
  //         <Tab>Ивенты</Tab>
  //       </TabList>
  //       <TabPanel>
  //         <SliderWrapper
  //           swiperRef={swiperRefTop}
  //           increment={incrementTop}
  //           decrement={decrementTop}
  //           onlyMobileArrow
  //         >
  //           <Swiper
  //             ref={swiperRefTop}
  //             slidesPerView={slides}
  //             pagination={{
  //               clickable: true,
  //             }}
  //             spaceBetween={30}
  //             navigation={true}
  //             modules={[Pagination, Navigation]}
  //             className="swiper"
  //           >
  //             {news.map((el) => (
  //               <SwiperSlide key={el.imgUrl}>
  //                 <NewsCard {...el} />
  //               </SwiperSlide>
  //             ))}
  //             {news.map((el) => (
  //               <SwiperSlide key={el.imgUrl}>
  //                 <NewsCard {...el} />
  //               </SwiperSlide>
  //             ))}
  //           </Swiper>
  //         </SliderWrapper>
  //       </TabPanel>
  //       <TabPanel>
  //         <SliderWrapper
  //           swiperRef={swiperRefBottom}
  //           increment={incrementBottom}
  //           decrement={decrementBottom}
  //           onlyMobileArrow
  //         >
  //           <Swiper
  //             ref={swiperRefBottom}
  //             slidesPerView={slides}
  //             pagination={{
  //               clickable: true,
  //             }}
  //             spaceBetween={24}
  //             navigation={true}
  //             modules={[Pagination, Navigation]}
  //             className="swiper"
  //           >
  //             {events.map((el) => (
  //               <SwiperSlide key={el.imgUrl}>
  //                 <NewsCard {...el} />
  //               </SwiperSlide>
  //             ))}
  //             {events.map((el) => (
  //               <SwiperSlide key={el.imgUrl}>
  //                 <NewsCard {...el} />
  //               </SwiperSlide>
  //             ))}
  //           </Swiper>
  //         </SliderWrapper>
  //       </TabPanel>
  //     </Tabs>
  //   </div>
  // );
};

export default IndustrySection;
