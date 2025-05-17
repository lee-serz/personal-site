"use client";

import Image from "next/image";
import s from "./Header.module.scss";
import "hover.css/css/hover-min.css";

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <Image
          src={"/logo.svg"}
          width={0}
          height={0}
          alt={`Логотип "derante.ru"`}
        />
      </div>
      <div className={s.header__contact}>
        <button className={`${s.header__button}`}>Оставить заявку</button>
      </div>
    </header>
  );
}
