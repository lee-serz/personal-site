"use client";

import Image from "next/image";
import s from "./Header.module.scss";
import "hover.css/css/hover-min.css";

export default function Header() {
  const openForm = () => {
    alert("Пока нельзя 😔");
  };
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <Image
          src={"/logo.svg"}
          width={0}
          height={0}
          alt={`Логотип "derante.ru"`}
          className="animate__animated animate__rotateInUpLeft animate__delay-4s"
        />
      </div>
      <div className={s.header__contact}>
        <button
          onClick={openForm}
          className={`${s.header__button} animate__animated animate__rotateInUpRight animate__delay-5s`}
        >
          Оставить заявку
        </button>
      </div>
    </header>
  );
}
