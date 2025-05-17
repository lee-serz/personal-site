"use client";

import s from "./Form.module.scss";

export default function Form({ onClose }: { onClose: () => void }) {
  return (
    <div className={s.form}>
      <button onClick={onClose} className={s.form__close}>
        ×
      </button>
      dadsadsadadsadd
    </div>
  );
}
