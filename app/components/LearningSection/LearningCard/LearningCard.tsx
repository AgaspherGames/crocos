import Image from "next/image";
import React from "react";
import Button from "../../Button/Button";
import CourseBadge from "../CourseBadge/CourseBadge";
export interface LearningCardProps {
  imgUrl: string;
  text: string;
  offline?: boolean;
}

const LearningCard: React.FC<LearningCardProps> = ({
  imgUrl,
  text,
  offline = false,
}) => {
  return (
    <div className="card">
      <div className="card-top">
        <Image
          width={338}
          height={331}
          alt="learning image"
          src={imgUrl}
        />
      </div>
      <CourseBadge offline={offline} />
      <div className="card-bottom">
        <p className="info">{text}</p>
        <Button>Подать заявку</Button>
      </div>
    </div>
  );
};

export default LearningCard;
