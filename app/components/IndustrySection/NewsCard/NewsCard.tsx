import React from "react";
import Button from "../../Button/Button";
import Image from "next/image";
export interface NewsCardProps {
  category: string;
  date: string;
  title: string;
  text: string;
  imgUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  category,
  date,
  title,
  text,
  imgUrl,
}) => {
  return (
    <div className="card">
      <div className="content">
        <div className="card-top">
          <p className="category">{category}</p>
          <p className="date">{date}</p>
        </div>
        <p className="card-title">
          {title}
        </p>
        <p className="text">
          {text}
        </p>
        <Button>Подробнее</Button>
      </div>
      <div>
        <Image
          alt="news image"
          width={338}
          height={229}
          src={imgUrl}
        />
      </div>
    </div>
  );
};

export default NewsCard;
