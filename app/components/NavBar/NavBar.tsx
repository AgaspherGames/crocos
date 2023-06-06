import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button/Button";
import WhatsappIcon from "@/app/icons/WhatsappIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import FacebookIcon from "@/app/icons/FacebookIcon";
import CrossIcon from "@/app/icons/CrossIcon";
import {links} from '@/app/constants/links'
import BurgerMenuIcon from "@/app/icons/BurgerMenuIcon";
interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="nav-bar">
      <div
        onClick={() => {
          setIsOpened(false);
        }}
        className={`links ${isOpened ? "opened" : ""}`}
      >
        <Button className="mb-only">Личный кабинет</Button>
        <Link href="/search">Охранные услуги</Link>
        <a href={"#learning"}>Обучение</a>
        <a href={"#vacansies"}>Вакансии</a>
        <a href={"#market"}>Маркет</a>
        <a href={"#services"}>Услуги</a>
        <a href={"#"}>Тендеры</a>
        <a href={"#news"}>Отраслевой журнал</a>
        <div className="mb-only social-media">
          <a href={links.whatsapp}>
            <WhatsappIcon className="orange" />
          </a>
          <a href={links.instagram}>
            <InstagramIcon className="orange" />
          </a>
          <a href={links.facebook}>
            <FacebookIcon className="orange" />
          </a>
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
        <BurgerMenuIcon/>
        Меню
      </Button>
    </div>
  );
};

export default NavBar;
