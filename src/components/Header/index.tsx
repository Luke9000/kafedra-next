import React from "react";
import NavMenu from "./NavMenu";
import styles from "./styles.module.css";
import NavMenuMobile from "./NavMenuMobile";
import Account from "./Account";


const index = () => {

  return (
    <header className={styles.header}>
      <NavMenu></NavMenu>
      <NavMenuMobile></NavMenuMobile>
      <Account></Account>
    </header>
  );
};

export default index;
