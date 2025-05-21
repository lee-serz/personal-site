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
        className={`${s.form} `}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={onClose} className={s.close}>
          ×
        </button>

        <input
          {...register("name", { required: true, minLength: 1 })}
          aria-invalid={errors.name ? "true" : "false"}
          type="text"
          placeholder="Ваше имя *"
        />

        <input
          {...register("email", {
            required: true,
            minLength: 1,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          aria-invalid={errors.email ? "true" : "false"}
          type="email"
          placeholder="Ваш email *"
        />

        <input {...register("site")} placeholder="Ваш сайт (необязательно)" />

        <textarea
          {...register("message", { required: true, minLength: 10 })}
          aria-invalid={errors.message ? "true" : "false"}
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
