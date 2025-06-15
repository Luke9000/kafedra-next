"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import Logo from "../icons/Logo";
import Hamburger from "./Hamburger";


export default function NavLinks() {
  const path = usePathname();

  return (
    <div className={styles.navMenuMobile__wrapper}>
      <Link
        href="/"
        className={clsx(styles.navMenuMobile, {
          [styles.activeLink]: path === "/",
        })}
      >
        <Logo className={styles.navMenu__icon}></Logo>
      </Link>
        <Hamburger></Hamburger>
    </div>
  );
}
