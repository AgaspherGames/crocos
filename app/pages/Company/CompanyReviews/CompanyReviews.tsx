import TopBadge from "@/app/components/Badges/TopBadge";
import Button from "@/app/components/Button/Button";
import Rating from "@/app/components/Rating/Rating";
import Stars from "@/app/components/Stars/Stars";
import Title from "@/app/components/Title/Title";
import LikeIcon from "@/app/icons/LikeIcon";
import { ICompanyService } from "@/app/types/ICompanyService";
import React from "react";
interface CompanyReviewsProps {
  data: ICompanyService;
  rating: number;
}

const CompanyReviews: React.FC<CompanyReviewsProps> = ({ data, rating }) => {
  console.log(data);

  return (
    <div className="company-reviews-section">
      <Title text="Отзывы о компании" />
      <div className="reviews">
        <div className="reviews-div">
          <div className="top">
            {!!data.top_five && <TopBadge type="top">Топ 5</TopBadge>}
            <p className="review-company-title"> {data.title} </p>
          </div>
          <div className="review-rating">
            {!!rating && <Rating rating={rating} />}
            <Stars stars={rating} />
            <p className="reviews-count">{data.reviews.length} отзывов</p>
          </div>
          <hr className="review-hr" />

          {data.reviews.map((review) => (
            <div className="review">
              <Stars stars={review.rating} />
              <p>{review.description}</p>
              <hr className="review-hr" />
            </div>
          ))}

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
  );
};

export default CompanyReviews;
