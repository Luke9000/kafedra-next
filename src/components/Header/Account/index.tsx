"use client"; //из-за usePathname только

import clsx from "clsx";
import { User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenu } from "radix-ui";
import styles from "./styles.module.css";

import { ClipboardList, IdCard, LogIn, LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserRole } from "./userRole";

const DropdownMenuDemo = () => {
  const [pathtext, setPathtext] = useState<number>();
  const [userRole, setUserRole] = useState<string | null>("");
  async function handleSignOut() {
    await fetch("auth/signout", { method: "POST" });
    await updateUserRole();
    redirect("/login");
  }
  const path = usePathname();

  async function updateUserRole() {
    try {
      const role = await getUserRole();
      setUserRole(role);
      console.log("role:", role);
    } catch (err) {
      console.error("Не удалось получить роль", err);
      setUserRole("");
    }
  }

  useEffect(() => {
    getUserRole().then((role) => {
      setUserRole(() => role);
      console.log("role:", role);
    });
  }, [path,pathtext]);

  return (
    <div onClick={updateUserRole}>
      <h3>{pathtext}</h3>
      <DropdownMenu.Root key={path}>
        <DropdownMenu.Trigger asChild>
          <button
            onClick={() => setPathtext((pathtext? pathtext + 1: 999))}
            className={styles.IconButton}
            aria-label="Customise options"
          >
            <User />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className={styles.Content} sideOffset={5}>
            {userRole === "" || userRole === null ? (
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
                <DropdownMenu.Item className={styles.Item}>
                  <div
                   
                    className={clsx(styles.navMenu, {
                      [styles.activeLink]: path === "/login",
                    })}
                    onClick={handleSignOut}
                  >
                    <LogOut className={styles.navMenu__icon} />
                    <span className={styles.navMenu__text}>Выйти</span>
                  </div>
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
