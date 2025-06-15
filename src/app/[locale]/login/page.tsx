"use client";

import * as React from "react";
import { Form, Toast } from "radix-ui";
import styles from "./styles.module.css";
import toastStyles from "./toast.module.css";
import { login } from "./actions";
import { useSearchParams } from "next/navigation";

const FormDemo = () => {
  const [open, setOpen] = React.useState(false);
  const searchParams = useSearchParams();

  React.useEffect(() => {
    if (searchParams.get("error") === "true") {
      setOpen(true);
    }
  }, [searchParams]);

  return (
    <Toast.Provider swipeDirection="right">
      <div className={styles.wrapper}>
        <Form.Root className={styles.Root}>
          <Form.Field className={styles.Field} name="email">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className={styles.Label}>Почта</Form.Label>
              <Form.Message className={styles.Message} match="valueMissing">
                Не введен email
              </Form.Message>
              <Form.Message className={styles.Message} match="typeMismatch">
                Некорректный email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className={styles.Input} type="email" required />
            </Form.Control>
          </Form.Field>
          <Form.Field className={styles.Field} name="password">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className={styles.Label}>Пароль</Form.Label>
              <Form.Message className={styles.Message} match="valueMissing">
                Не введен пароль
              </Form.Message>
              <Form.Message className={styles.Message} match="typeMismatch">
                Некорректный пароль
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className={styles.Input} type="password" required />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <button
              formAction={login}
              className={styles.Button}
              style={{ marginTop: 10 }}
            >
              Войти
            </button>
          </Form.Submit>
        </Form.Root>
      </div>

      <Toast.Root open={open} onOpenChange={setOpen} className={toastStyles.Root}>
        <Toast.Title className={toastStyles.Title}>Ошибка входа</Toast.Title>
        <Toast.Description className={toastStyles.Description}>
          Неверный логин или пароль
        </Toast.Description>
        <Toast.Action asChild altText="Close">
          <button className={toastStyles.Button} onClick={() => setOpen(false)}>
            Закрыть
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className={toastStyles.Viewport} />
    </Toast.Provider>
  );
};

export default FormDemo;
