"use client";

// import { usePathname } from "next/navigation";
import LocaleSwitcher from "../LocaleSwitcher";
import NavigationMenu from "./NavigationMenu";
import styles from "./styles.module.css";

const index = () => {
  // const pathname = usePathname();

 

  return (
    <header className={styles.header}>
      {/* <Link className={pathname === '/'? clsx(styles.activeLink, styles.logo): styles.logo} href="/">
        <Logo></Logo>
      </Link> */}

      

      <NavigationMenu></NavigationMenu>
      <LocaleSwitcher></LocaleSwitcher>
      {/* 
      <NavLink
        draggable={false}
        to="/kafedra"
        end
        className={({ isActive }) =>
          clsx(isActive && styles.activeLink, styles.logo)
        }
      >
        {({ isActive }) => {
          const rootStyles = getComputedStyle(document.documentElement);
          const activeColor = rootStyles
            .getPropertyValue("--text-color-bright")
            .trim();
          const defaultColor = rootStyles
            .getPropertyValue("--logo-color-dark")
            .trim();

          return (
            <Logo
              className={clsx(styles.logo, isActive && styles.activeLink)}
              fill={isActive ? activeColor : defaultColor}
            />
          );
        }}
      </NavLink> */}
      {/* 
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <NavLink
              draggable={false}
              to="/kafedra/prepodavateli"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              ПРЕПОДАВАТЕЛИ
            </NavLink>
          </li>
          <li>
            <NavLink
              draggable={false}
              to="/kafedra/raboti_studentov"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              РАБОТЫ СТУДЕНТОВ
            </NavLink>
          </li>
          <li>
            <NavLink
              draggable={false}
              to="/kafedra/karta"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              КАРТА КАФЕДРЫ
            </NavLink>
          </li>
          <li>
            <NavLink
              draggable={false}
              to="/kafedra/raspisanie"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              РАСПИСАНИЕ
            </NavLink>
          </li>
          <li>
            <NavLink
              draggable={false}
              to="/kafedra/vkr"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              ВКР
            </NavLink>
          </li>
        </ul>
      </nav>
      <Hamburger></Hamburger> */}
    </header>
  );
};

export default index;
