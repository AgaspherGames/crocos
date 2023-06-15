import React, { useState } from "react";

import Logo from "./Logo/Logo";

import Button from "../Button/Button";
import WhatsappIcon from "@/app/icons/WhatsappIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import FacebookIcon from "@/app/icons/FacebookIcon";
import UserIcon from "@/app/icons/UserIcon";
import { links } from "@/app/constants/links";
import SelectLang from "../SelectLang/SelectLang";
import Link from "next/link";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <div>
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="info">
        <div className="social-media">
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
        {/* <CitySelect /> */}
        <div className="flex buttons">
          <SelectLang />
          <UserIcon width={25} height={25} className="icon" />
          <Button className="account">Личный кабинет</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
