"use client"; //из-за usePathname только

import { User } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import styles from "./styles.module.css";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

import { LogIn,LogOut } from "lucide-react";
import { getUserRole } from "./userRole";
import { useEffect } from "react";
import { POST } from "@/app/[locale]/auth/signout/route";


  const handleSignOut = async () => {
    await fetch("/signout", { method: "POST" })


  }

const DropdownMenuDemo = () => {
  const path = usePathname();


useEffect(() => {
  getUserRole().then(role => {
    console.log('role:', role)

  })
}, [])

  return (
    <div>
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
            <DropdownMenu.Item className={styles.Item} onClick={handleSignOut}>
              <Link
                href={"/"}
                className={clsx(styles.navMenu, {
                  [styles.activeLink]: false,
                })}
              >
                <LogOut className={styles.navMenu__icon} />
                <span className={styles.navMenu__text}>Выйти</span>
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default DropdownMenuDemo;

