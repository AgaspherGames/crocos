import StarIcon from "@/app/icons/StarIcon";
import React from "react";
interface StarsProps {
    stars: number
}

const Stars: React.FC<StarsProps> = ({stars}) => {
  return (
    <div className="stars">
      <StarIcon className={`${stars >= 1 ? "gold" : ""}`} />
      <StarIcon className={`${stars >= 2 ? "gold" : ""}`} />
      <StarIcon className={`${stars >= 3 ? "gold" : ""}`} />
      <StarIcon className={`${stars >= 4 ? "gold" : ""}`} />
      <StarIcon className={`${stars >= 5 ? "gold" : ""}`} />
    </div>
  );
};

export default Stars;
