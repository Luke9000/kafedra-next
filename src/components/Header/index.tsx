import React from "react";
import NavMenu from "./NavMenu";
import styles from "./styles.module.css";


const index = () => {

  return (
    <header className={styles.header}>
      <NavMenu></NavMenu>
    </header>
  );
};

export default index;
