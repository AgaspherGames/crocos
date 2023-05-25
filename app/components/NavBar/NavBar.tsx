import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="nav-bar">
      <Link href={"#"}>Охранные услуги</Link>
      <Link href={"#"}>Обучение</Link>
      <Link href={"#"}>Вакансии</Link>
      <Link href={"#"}>Маркет</Link>
      <Link href={"#"}>Услуги</Link>
      <Link href={"#"}>Тендеры</Link>
      <Link href={"#"}>Отраслевой журнал</Link>
      <Button className="menu">Меню</Button>
    </div>
  );
};

export default NavBar;
