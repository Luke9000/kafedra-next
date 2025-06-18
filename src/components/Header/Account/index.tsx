"use client"; //из-за usePathname только

import { User } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import styles from "./styles.module.css";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

import { LogIn } from "lucide-react";
import { useUserRole } from "./useUserRole";

const DropdownMenuDemo = () => {
  const path = usePathname();
  const role = useUserRole();
  return (
    <div>
      <p>{role.role}</p>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className={styles.IconButton} aria-label="Customise options">
            <User />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className={styles.Content} sideOffset={5}>
            <DropdownMenu.Item className={styles.Item}>
              <Link
                href={"/login"}
                className={clsx(styles.navMenu, {
                  [styles.activeLink]: path === "/login",
                })}
              >
                <LogIn className={styles.navMenu__icon} />
                <span className={styles.navMenu__text}>Войти</span>
              </Link>
            </DropdownMenu.Item>
            <DropdownMenuSeparator></DropdownMenuSeparator>
            <DropdownMenu.Item className={styles.Item}>
              <Link
                href={"/login"}
                className={clsx(styles.navMenu, {
                  [styles.activeLink]: path === "/login",
                })}
              >
                <LogIn className={styles.navMenu__icon} />
                <span className={styles.navMenu__text}>Войти</span>
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default DropdownMenuDemo;

