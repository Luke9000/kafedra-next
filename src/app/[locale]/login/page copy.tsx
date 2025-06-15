// 'use client'

// import * as React from "react";
// import { Form } from "radix-ui";
// import styles from "./styles.module.css";
// import { login } from "./actions";

// const FormDemo = () => {
//   const [open, setOpen] = React.useState(false);
//   React.useEffect(() => {
//     if (window.location.hash === "#error") {
//       setOpen(true);
//     }
//   }, []);
  
//   return (
//     <div className={styles.wrapper}>
//       <Form.Root className={styles.Root}>
//         <Form.Field className={styles.Field} name="email">
//           <div
//             style={{
//               display: "flex",
//               alignItems: "baseline",
//               justifyContent: "space-between",
//             }}
//           >
//             <Form.Label className={styles.Label}>Почта</Form.Label>
//             <Form.Message className={styles.Message} match="valueMissing">
//               Не введен email
//             </Form.Message>
//             <Form.Message className={styles.Message} match="typeMismatch">
//               Некорректный email
//             </Form.Message>
//           </div>
//           <Form.Control asChild>
//             <input className={styles.Input} type="email" required />
//           </Form.Control>
//         </Form.Field>
//         <Form.Field className={styles.Field} name="password">
//           <div
//             style={{
//               display: "flex",
//               alignItems: "baseline",
//               justifyContent: "space-between",
//             }}
//           >
//             <Form.Label className={styles.Label}>Пароль</Form.Label>
//             <Form.Message className={styles.Message} match="valueMissing">
//               Не введен пароль
//             </Form.Message>
//             <Form.Message className={styles.Message} match="typeMismatch">
//               Некорректный пароль
//             </Form.Message>
//           </div>
//           <Form.Control asChild>
//             <input className={styles.Input} type="password" required />
//           </Form.Control>
//         </Form.Field>
//         <Form.Submit asChild>
//           <button
//             formAction={login}
//             className={styles.Button}
//             style={{ marginTop: 10 }}
//           >
//             Войти
//           </button>
//         </Form.Submit>
//       </Form.Root>
//     </div>
//   );
// };

// export default FormDemo;
