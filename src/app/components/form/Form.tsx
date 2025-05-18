"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import s from "./Form.module.scss";
import { submitForm } from "@/app/api/api";

interface FormData {
  name: string;
  email: string;
  message: string;
  site?: string;
}

export default function Form({ onClose }: { onClose: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<FormData>();

  const { mutate } = useMutation({
    mutationFn: submitForm,
    onSuccess: () => {
      reset();
      toast.success("Форма отправлена успешно!");
      onClose();
    },
    onError: () => {
      toast.error("Ошибка при отправке формы");
    },
  });

  const onSubmit = async (data: FormData) => {
    mutate(data);
  };

  return (
    <div className={s.overlay} onClick={onClose}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={s.form}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={onClose} className={s.close}>
          ×
        </button>

        <input {...register("name")} type="text" placeholder="Ваше имя *" />

        <input
          {...register("email", {})}
          type="email"
          placeholder="Ваш email *"
        />

        <input {...register("site")} placeholder="Ваш сайт (необязательно)" />

        <textarea
          {...register("message", {})}
          placeholder="Ваше сообщение *"
          rows={4}
        />

        <button className={s.btn} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Отправить"}
        </button>
      </form>
    </div>
  );
}
