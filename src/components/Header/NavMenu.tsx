"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "./links";
import styles from "./styles.module.css";

export default function NavLinks() {
  const path = usePathname();

  return (
    <div className={styles.navMenu__wrapper}>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              styles.navMenu,
              {
                [styles.activeLink]: path === link.href,
              }
            )}
          >
            <LinkIcon className={styles.navMenu__icon} />
            <span className={styles.navMenu__text}>{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
