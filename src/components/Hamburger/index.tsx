// import { useState } from "react";
// import styles from "./styles.module.css";
// import clsx from "clsx";
// import Graduate from "../../shared/assets/icons/svg-raw/GraduateThin.svg?react";
// import People from "../../shared/assets/icons/svg-raw/PeopleThin.svg?react";
// import Scheme from "../../shared/assets/icons/svg-raw/SchemeThin2.svg?react";
// import Works from "../../shared/assets/icons/svg-raw/WorksThin.svg?react";
// import Home from "../../shared/assets/icons/svg-raw/HomeThin.svg?react";
// import Menu from "../../shared/assets/icons/svg-raw/MenuThin.svg?react";
// import Cross from "../../shared/assets/icons/svg-raw/CrossThin.svg?react";
// import CalendarThin from "../../shared/assets/icons/svg-raw/CalendarThin.svg?react";

// import { Link } from "react-router-dom";

// const Index = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className={styles.humbWrapper}>
//       <div
//         onClick={() => setOpen(!open)}
//       >
//         <Menu
//           className={open ? styles.closedIcon : styles.openIcon}
//         />
//         <Cross
//           className={open ? styles.openIcon : styles.closedIcon}
//         />
//       </div>
//       <div className={clsx(styles.menu, open ? styles.open : "")}>
//         <nav className={styles.nav}>
//           {[
//             {
//               to: "/kafedra/",
//               Icon: Home,
//               key: "Home",
//               text: "ГЛАВНАЯ",
//             },
//             {
//               to: "/kafedra/raboti_studentov",
//               Icon: Works,
//               key: "Works",
//               text: "РАБОТЫ СТУДЕНТОВ",
//             },
//             {
//               to: "/kafedra/prepodavateli",
//               Icon: People,
//               key: "People",
//               text: "ПРЕПОДАВАТЕЛИ",
//             },
//             {
//               to: "/kafedra/karta",
//               Icon: Scheme,
//               key: "Scheme",
//               text: "КАРТА КАФЕДРЫ",
//             },
//             {
//               to: "/kafedra/raspisanie",
//               Icon: CalendarThin,
//               key: "Calendar",
//               text: "РАСПИСАНИЕ",
//             },
//             {
//               to: "/kafedra/vkr",
//               Icon: Graduate,
//               key: "Graduate",
//               text: "ВКР",
//             },
//           ].map(({ to, Icon, key, text }) => (
//             <Link
//               className={`${styles.link} ${
//                 location.pathname === to ? styles.active : ""
//               }`}
//               to={to}
//             >
//               <div
//                 className={styles.humbLine}
//                 key={key}
//                 style={{
//                   backgroundColor:
//                     location.pathname === to ? "#680aff" : "white",
//                 }}
//               >
//                 <p
//                   style={{
//                     color: location.pathname === to ? "white" : "#201541",
//                   }}
//                 >
//                   {text}
//                 </p>

//                 <Icon
//                   className={styles.icon}
//                   fill={location.pathname === to ? "white" : "#201541"}
//                 />
//               </div>
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Index;
