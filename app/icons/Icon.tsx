import Image, { StaticImageData } from "next/image";
import React from "react";
interface IconProps {
  alt: string;
  src: string | StaticImageData;
  width: number;
  height: number;
  href: string
}

const Icon: React.FC<IconProps> = ({ alt, src, width, height, href }) => {
  return (
    <a className="icon" href={href}>
      <Image alt={alt} src={src} width={width} height={height} />
    </a>
  );
};

export default Icon;
