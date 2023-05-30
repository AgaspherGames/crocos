import React, { useState } from "react";

import Logo from "./Logo/Logo";
import Icon from "@/app/icons/Icon";

import whatsappIcon from "../../icons/whatsapp-orange.png";
import facebookIcon from "../../icons/facebook-orange.png";
import instagramIcon from "../../icons/instagram-orange.png";
import geoIcon from "../../icons/geo.svg";
import userIcon from "../../icons/user.svg";
import Button from "../Button/Button";
import Select from "../Select/Select";
import GeoIcon from "@/app/icons/GeoIcon";
import CitySelect from "./CitySelect/CitySelect";
import WhatsappIcon from "@/app/icons/WhatsappIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import FacebookIcon from "@/app/icons/FacebookIcon";
import UserIcon from "@/app/icons/UserIcon";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <div>
        <Logo />
      </div>
      <div className="info">
        <div className="social-media">
          <WhatsappIcon className="orange" />
          <InstagramIcon className="orange" />
          <FacebookIcon className="orange" />
        </div>
          <CitySelect/>
        <div className="flex buttons">
          <Select />
          <UserIcon width={25} height={25} className="icon"/>
          <Button className="account">Личный кабинет</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
