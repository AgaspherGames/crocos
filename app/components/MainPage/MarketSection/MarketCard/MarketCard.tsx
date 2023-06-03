import Image from "next/image";
import React from "react";
interface MarketCardProps {
  imgUrl: string;
  text: string;
  double?: boolean;
}

const background = `
    linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 100%
  ),
  `;

const MarketCard: React.FC<MarketCardProps> = ({
  double = false,
  imgUrl,
  text,
}) => {
  return (
    <div
      // style={{ background: `${background} url(${imgUrl})` }}
      className={`card ${double ? "double" : ""}`}
    >
      <Image src={imgUrl} width={1000} height={500} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default MarketCard;
