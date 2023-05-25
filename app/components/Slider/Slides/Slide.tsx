import Image from "next/image";
import React, { MouseEventHandler } from "react";
import Button from "../../Button/Button";

export interface IPost {
  src: string;
  text: string;
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Slide: React.FC<IPost> = ({ src, text, buttonText, onClick }) => {
  return (
    <div style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('${src}')`}} className="slide">
      {/* <Image alt="Slide" src={src} width={1073} height={413} /> */}
      <div>
        <p>{text}</p>
        <Button onClick={onClick}>{buttonText}</Button>
      </div>
    </div>
  );
};

export default Slide;
