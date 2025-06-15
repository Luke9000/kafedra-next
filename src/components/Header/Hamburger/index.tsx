import {
	HamburgerMenuIcon
} from "@radix-ui/react-icons";
import { DropdownMenu } from "radix-ui";
import * as React from "react";
import styles from "./styles.module.css";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "../links";

const DropdownMenuDemo = () => {
  const path = usePathname();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.IconButton} aria-label="Customise options">
          <HamburgerMenuIcon  />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.Content} sideOffset={5}>
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <DropdownMenu.Item key={link.name} className={styles.Item}>
                <Link
                  
                  href={link.href}
                  className={clsx(styles.navMenu, {
                    [styles.activeLink]: path === link.href,
                  })}
                >
                  <LinkIcon className={styles.navMenu__icon} />
                  <span className={styles.navMenu__text}>{link.name}</span>{" "}
                </Link>
              </DropdownMenu.Item>
            );
          })}

         

        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
