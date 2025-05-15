"use client";

import Image from "next/image";
import s from "./Welcome.module.scss";
import Typed from "typed.js";
import React, { useEffect, useState } from "react";

export default function Welcome() {
  const el = React.useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.matchMedia("(max-width: 900px)").matches);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["веб-приложения"], // Одна строка
      typeSpeed: 100, // Скорость печати
      backSpeed: 30, // Скорость стирания
      loop: true, // Бесконечный цикл
      showCursor: true, // Показывать курсор
      cursorChar: "|", // Символ курсора
      backDelay: 1500, // Задержка перед стиранием
    });
  }, []);

  return (
    <main className={s.welcome}>
      <div className={s.greeting}>
        {/* 1 */}
        <p
          className={`${s.greeting__text} animate__animated animate__fadeInLeft animate__delay-1s`}
        >
          Привет!
        </p>
        {/* 2 */}
        <div
          className={`${s.greeting__image} animate__animated  animate__zoomIn animate__delay-2s`}
        >
          <Image
            src="../../../assets/hand.png"
            fill
            alt="Эмодзи Рука"
            quality={100}
            className={`animate__animated animate__tada  animate__delay-2s`}
          />
        </div>
      </div>
      <div className={s.info}>
        <p
          className={`${s.info__text} animate__animated animate__jackInTheBox animate__delay-3s`}
        >
          Меня зовут <span className={s.info__bold}>Сергей</span>.
          {isMobile && <br />} Я превращаю идеи
          <br />в современные {isMobile && <br />}
          <span ref={el} className={s.info__highlight}></span>
        </p>
        <div
          className={`${s.info__telegram}  animate__animated animate__zoomIn animate__delay-5s `}
        >
          <a
            className={`${s.info__link}`}
            href="https://t.me/derante"
            target="__blank"
          >
            <Image
              src={"../../../assets/telegram-black.png"}
              fill
              alt="Телеграм"
              quality={100}
              className="animate__animated animate__flip animate__delay-5s"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
