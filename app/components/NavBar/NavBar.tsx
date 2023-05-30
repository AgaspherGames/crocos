import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button/Button";
import WhatsappIcon from "@/app/icons/WhatsappIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import FacebookIcon from "@/app/icons/FacebookIcon";
import CrossIcon from "@/app/icons/CrossIcon";
interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [isOpened, setIsOpened] = useState(true);
  return (
    <div className="nav-bar">
      <div
        onClick={() => {
          setIsOpened(false);
        }}
        className={`links ${isOpened ? "opened" : ""}`}
      >
        <Button className="mb-only">Личный кабинет</Button>
        <a href={"#security-services"}>Охранные услуги</a>
        <a href={"#learning"}>Обучение</a>
        <a href={"#vacansies"}>Вакансии</a>
        <a href={"#market"}>Маркет</a>
        <a href={"#services"}>Услуги</a>
        <a href={"#"}>Тендеры</a>
        <a href={"#news"}>Отраслевой журнал</a>
        <div className="mb-only social-media">
          <WhatsappIcon className="orange" />
          <InstagramIcon className="orange" />
          <FacebookIcon className="orange" />
        </div>
        <div
          onClick={() => {
            setIsOpened(false);
          }}
          className="mb-only"
        >
          <CrossIcon className="mb-only" />
        </div>
      </div>
      <Button
        onClick={() => {
          setIsOpened(true);
        }}
        className="menu"
      >
        Меню
      </Button>
    </div>
  );
};

export default NavBar;
