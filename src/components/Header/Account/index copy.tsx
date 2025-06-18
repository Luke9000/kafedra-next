"use client"; //из-за usePathname только

import { User } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import styles from "./styles.module.css";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import {LogIn} from 'lucide-react'



import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

const DropdownMenuDemo = () => {
  const path = usePathname();

  return (
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
              href={'/login'}
              className={clsx(styles.navMenu, {
                [styles.activeLink]: path === '/login',
              })}
            >
              <LogIn className={styles.navMenu__icon} />
              <span className={styles.navMenu__text}>Войти</span>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenuSeparator></DropdownMenuSeparator>

           <DropdownMenu.Item className={styles.Item}>
            <Link
              href={'/login'}
              className={clsx(styles.navMenu, {
                [styles.activeLink]: path === '/login',
              })}
            >
              <LogIn className={styles.navMenu__icon} />
              <span className={styles.navMenu__text}>Войти</span>
            </Link>
          </DropdownMenu.Item>

        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;




export async function POST(req: NextRequest) {
  const supabase = await createClient()

  // Check if a user's logged in
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    await supabase.auth.signOut()
  }

  revalidatePath('/', 'layout')
  return NextResponse.redirect(new URL('/login', req.url), {
    status: 302,
  })
}