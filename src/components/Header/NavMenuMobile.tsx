"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../icons/Logo";
import Hamburger from "./Hamburger";
import styles from "./styles.module.css";
import Account from "./Account";


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
        <div className="flex flex-row gap-4">
          <Hamburger></Hamburger>
          <Account></Account>
        </div>
    </div>
  );
}
