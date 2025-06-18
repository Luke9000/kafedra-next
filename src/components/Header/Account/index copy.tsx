"use client"; //из-за usePathname только

import clsx from "clsx";
import { User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenu } from "radix-ui";
import styles from "./styles.module.css";

import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

import { LogIn, LogOut,ClipboardList, IdCard } from "lucide-react";
import { useEffect, useState } from "react";
import { getUserRole } from "./userRole";
import { redirect } from "next/navigation";

const DropdownMenuDemo = () => {
  const [userRole, setUserRole] = useState<string | null>("");
  async function handleSignOut() {
    await fetch("auth/signout", { method: "POST" });
    redirect("/login");
  }

  const path = usePathname();

  useEffect(() => {
    getUserRole().then((role) => {
      setUserRole(() => role);
      console.log("role:", role);
    });
  }, [path]);

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
          {userRole === "" || userRole === null  ? (
            // НЕ залогинен
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
          ) : (
            // Залогинен
            <>
              {/* Ссылка на аккаунт */}
              <DropdownMenu.Item className={styles.Item}>
                <Link
                  href={"/account"}
                  className={clsx(styles.navMenu, {
                    [styles.activeLink]: path === "/account",
                  })}
                >
                  <IdCard className={styles.navMenu__icon} />
                  <span className={styles.navMenu__text}>Аккаунт</span>
                </Link>
              </DropdownMenu.Item>

              {/* Если админ - показываем админку */}
              {userRole === "admin" && (
                <DropdownMenu.Item className={styles.Item}>
                  <Link
                    href={"/dashboard"}
                    className={clsx(styles.navMenu, {
                      [styles.activeLink]: path === "/dashboard",
                    })}
                  >
                    <ClipboardList className={styles.navMenu__icon} />
                    <span className={styles.navMenu__text}>Админка</span>
                  </Link>
                </DropdownMenu.Item>
              )}

              {/* Разделитель + выход */}
              <DropdownMenuSeparator />
              <DropdownMenu.Item className={styles.Item} asChild>
                <span className={styles.navMenu} onClick={handleSignOut}>
                  <LogOut className={styles.navMenu__icon} />
                  <span className={styles.navMenu__text}>Выйти</span>
                </span>
              </DropdownMenu.Item>
            </>
          )}
        </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default DropdownMenuDemo;
