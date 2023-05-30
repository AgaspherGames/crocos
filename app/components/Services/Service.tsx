import Link from "next/link";
import React from "react";
import arrow from "/public/assets/services/arrow-right.svg";
import Image from "next/image";
export interface IService {
  text: string;
  src: string;
  href: string;
}

const Service: React.FC<IService> = ({ text, src, href }) => {
  return (
    <div
      className="service"
      style={{
        background: ` linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%), url('${src}')`,
      }}
    >
      <Link href={href}>
        <div className="content">
          <p>{text}</p>
          <Image className="arrow" width={77} height={24} alt="arrow" src={arrow} />
        </div>
      </Link>
    </div>
  );
};

export default Service;
