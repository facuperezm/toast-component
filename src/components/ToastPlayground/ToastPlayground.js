import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { toasts, setToasts, createToast } = React.useContext(ToastContext);
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("This is the default message");

  const handleSubmit = (e) => {
    e.preventDefault();
    createToast(message, variant);
    setMessage("");
    setVariant("notice");
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} setToasts={setToasts} />
      <form
        className={styles.controlsWrapper}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variante, index) => (
              <label key={index} htmlFor={`variant-${variante}`}>
                <input
                  id={`variant-${variante}`}
                  type="radio"
                  name="variante"
                  value={variante}
                  checked={variante === variant}
                  onChange={(e) => setVariant(e.target.value)}
                />
                {variante}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
