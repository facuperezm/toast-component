import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState("");
  const [toastMessage, setToastMessage] = React.useState("Try this out!");
  const [toasts, setToasts] = React.useState([
    {
      message: "Something went wrong!",
      variant: "error",
    },
    {
      message: "17 photos uploaded",
      variant: "success",
    },
  ]);

  function handleSubmit(event) {
    console.log("submitted");
    event.preventDefault();
    setToasts((toasts) => [
      ...toasts,
      { variant: variant, message: toastMessage },
    ]);
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} />
      <form
        className={styles.controlsWrapper}
        onSubmit={(event) => handleSubmit(event)}
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
              value={toastMessage}
              onChange={(e) => setToastMessage(e.target.value)}
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
            <Button> Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
