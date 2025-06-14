import NavMenu from "./NavMenu";
import styles from "./styles.module.css";
const index = () => {

  

  return (
    <header className={styles.header}>
      <NavMenu></NavMenu>
      {/* <NavLink
        draggable={false}
        to="/kafedra"
        end
        className={({ isActive }) => clsx(isActive && styles.activeLink,styles.logo)}
      >
        {({ isActive }) => {
          const rootStyles = getComputedStyle(document.documentElement);
          const activeColor = rootStyles
            .getPropertyValue("--text-color-bright")
            .trim();
          const defaultColor = rootStyles
            .getPropertyValue("--logo-color-dark")
            .trim();

          return <Logo className={clsx(styles.logo, isActive && styles.activeLink)} fill={isActive ? activeColor : defaultColor} />;
        }}
      </NavLink>


      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <Link  href={'/prepodavateli'}>ПРЕПОДАВАТЕЛИ</Link>
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
