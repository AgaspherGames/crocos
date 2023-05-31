import React from "react";
import Button from "@/app/components/Button/Button";
import TopBadge from "@/app/components/Badges/TopBadge";
import Rating from "./Rating";
import Image from "next/image";
import FlatButton from "@/app/components/FlatButton/FlatButton";
import SendIcon from '@/app/icons/send.svg' 

export interface SecurityCardProps {
  badge: {
    text: string
    type: "top" | "sale" | "new"
  }
  rating: number;
  price: string;
  text: string;
  id: number
}

const SecurityCard: React.FC<SecurityCardProps> = ({badge,rating,price,text}) => {
  return (
    <div className="card">
      <div className="card-header">
        <TopBadge type={badge.type}>{badge.text}</TopBadge>
        <Rating rating={rating} />
      </div>
      <div className="price">
        <Image
          alt="security"
          src={"/assets/services/securityIcon.png"}
          width={60}
          height={60}
        />
        <div className="price-text">
          <p className="security-bold">Security</p>
          <p className="price-label">{price}</p>
        </div>
      </div>
      <div className="info">
        <p>
          {text}
        </p>
      </div>
      <hr />
      <div className="card-bottom">
        <Button>Посмотреть улсуги</Button>
        <FlatButton color="orange" >Онлайн заявка <Image  alt="send icon" src={SendIcon} width={20} height={20} /> </FlatButton>
      </div>
    </div>
  );
};

export default SecurityCard;
