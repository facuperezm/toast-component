import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts }) {
  const id = `toast-shelf-${Math.random() * 10}`;
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
