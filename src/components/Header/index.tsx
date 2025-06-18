import React from "react";
import NavMenu from "./NavMenu";
import styles from "./styles.module.css";
import NavMenuMobile from "./NavMenuMobile";


const index = () => {

  return (
    <header className={styles.header}>
      <NavMenu></NavMenu>
      <NavMenuMobile></NavMenuMobile>
    </header>
  );
};

export default index;
