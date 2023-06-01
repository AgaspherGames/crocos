import FacebookIcon from "@/app/icons/FacebookIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import LogoIcon from "@/app/icons/LogoIcon";
import WhatsappIcon from "@/app/icons/WhatsappIcon";
import React from "react";
import Button from "../Button/Button";
import GeoIcon from "@/app/icons/GeoIcon";
import MapPinIcon from "@/app/icons/MapPinIcon";
import EmailIcon from "@/app/icons/EmailIcon";
import PhoneIcon from "@/app/icons/PhoneIcon";
import { links } from "@/app/constants/links";
import BackgroundLine from "../BackgroundLine/BackgroundLine";
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="social-media">
          <LogoIcon />
          <div className="icons">
            <a href={links.whatsapp}>
              <WhatsappIcon />
            </a>
            <a href={links.instagram}>
              <InstagramIcon />
            </a>
            <a href={links.facebook}>
              <FacebookIcon />
            </a>
          </div>
        </div>
        <div className="footer-nav">
          <a href="">Главная</a>
          <a href="">Охранные услуги</a>
          <a href="">Вакансии</a>
          <a href="">Средства защиты</a>
          <a href="">Обучение</a>
          <a href="">Журнал</a>
        </div>
        <Button>Заказать консультацию</Button>
      </div>
      <div className="footer-bottom">
        <div className="contacts">
          <p className="contacts-title">Контакты</p>
          <p>По вопросам сотрудничества обращаться</p>
        </div>
        <div className="with-icon">
          <PhoneIcon />
          <p>7 777 656 43 32</p>
        </div>
        <div className="with-icon">
          <EmailIcon />
          <p>kupiya@mail.kz</p>
        </div>
        <div className="with-icon">
          <MapPinIcon />
          <p>38-я ул. 40а, Нур-Султан 020000</p>
        </div>
      </div>
      {/* <BackgroundLine bottom /> */}
    </div>
  );
};

export default Footer;
