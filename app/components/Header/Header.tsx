import React from "react";

import Logo from "./Logo/Logo";
import Icon from "@/app/icons/Icon";

import whatsappIcon from "../../icons/whatsapp-orange.png";
import facebookIcon from "../../icons/facebook-orange.png";
import instagramIcon from "../../icons/instagram-orange.png";
import geoIcon from "../../icons/geo.svg";
import userIcon from "../../icons/user.svg";
import Button from "../Button/Button";
import Select from "../Select/Select";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <div>
        <Logo />
      </div>
      <div className="info"> 
        <div className="social-media">
          <Icon
            alt="WhatsApp icon"
            height={20}
            width={20}
            src={whatsappIcon}
            href="https://www.whatsapp.com/?lang=ru"
          />
          <Icon
            alt="WhatsApp icon"
            height={20}
            width={20}
            src={instagramIcon}
            href="https://www.whatsapp.com/?lang=ru"
          />
          <Icon
            alt="Facebook icon"
            height={20}
            width={10}
            src={facebookIcon}
            href="https://www.whatsapp.com/?lang=ru"
          />
        </div>
        <div className="geo-label">
          <Icon
            alt="Facebook icon"
            height={40}
            width={18}
            src={geoIcon}
            href="https://www.whatsapp.com/?lang=ru"
          />
          <p className="city">Астана</p>
        </div>
        <div className="flex buttons">
          <Select />
          <Icon width={25}height={25} alt="user icon" href="#" src={userIcon} />
          <Button className="account">Личный кабинет</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
