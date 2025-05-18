"use client";

import Image from "next/image";
import s from "./Header.module.scss";
import "hover.css/css/hover-min.css";
import Form from "../form/Form";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Header() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const toggleForm = () => {
    setIsOpenForm(!isOpenForm);
  };
  const queryClient = new QueryClient();
  return (
    <>
      {isOpenForm ? (
        <QueryClientProvider client={queryClient}>
          <Form onClose={() => setIsOpenForm(false)} />
        </QueryClientProvider>
      ) : (
        ""
      )}
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
          <button onClick={toggleForm} className={`${s.header__button}`}>
            Оставить заявку
          </button>
        </div>
      </header>
    </>
  );
}
