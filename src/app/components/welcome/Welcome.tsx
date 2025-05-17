"use client";

import Image from "next/image";
import s from "./Welcome.module.scss";
import Typed from "typed.js";
import React, { useEffect, useState } from "react";

export default function Welcome() {
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["веб-приложения"],
      typeSpeed: 100, // Скорость печати
      backSpeed: 30, // Скорость стирания
      backDelay: 1500, // Задержка перед стиранием
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
  }, []);

  return (
    <main className={s.welcome}>
      <div className={s.greeting}>
        <p className={`${s.greeting__text}`}>Привет!</p>
        <div className={`${s.greeting__image}`}>
          <Image src="/hand.png" fill alt="Эмодзи Рука" quality={100} />
        </div>
      </div>
      <div className={s.info}>
        <p className={`${s.info__text}`}>
          <span className={s.mobile__span}>
            Меня зовут <span className={s.info__bold}>Сергей</span>.
          </span>
          <span className={s.mobile__span}>
            {" "}
            Я превращаю идеи <span className={s.break}></span> в современные
          </span>
          <span className={s.info__highlight}>
            <span ref={el} className={s.highlight__text}></span>
          </span>
        </p>

        <a
          className={`${s.info__telegram}`}
          href="https://t.me/derante"
          target="__blank"
        >
          <Image
            src={"/telegram-black.png"}
            fill
            alt="Телеграм"
            quality={100}
          />
        </a>
      </div>
    </main>
  );
}
