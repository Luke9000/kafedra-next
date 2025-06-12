"use client";

import { Link } from "@/i18n/navigation";
import { CaretDownIcon } from "@radix-ui/react-icons";
// import clsx from "clsx";
import { useTranslations } from "next-intl";
import { NavigationMenu } from "radix-ui";
import * as React from "react";
import styles from "./styles.module.css";



// import { usePathname, useRouter } from '@/i18n/navigation';
// import { Locale } from 'next-intl';
// import { useParams } from 'next/navigation';
// import { ChangeEvent, useTransition } from 'react';

const NavMenu = () => {
  const t = useTranslations("NavigationMenu");


  // const router = useRouter();
  // const [isPending, startTransition] = useTransition();
  // const pathname = usePathname();
  // const params = useParams();

// function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
//     const nextLocale = event.target.value as Locale;
//     startTransition(() => {
//       router.replace(
//         // @ts-expect-error -- TypeScript will validate that only known `params`
//         // are used in combination with a given `pathname`. Since the two will
//         // always match for the current route, we can skip runtime checks.
//         {pathname, params},
//         {locale: nextLocale}
//       );
//     });
//   }


  return (
    <NavigationMenu.Root className={styles.Root}>
      <NavigationMenu.List className={styles.MenuList}>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={styles.Trigger}>
            Разделы <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.Content}>
            <ul className={`${styles.List} one`}>
              {/* <ListItem
                title="Introduction"
                href="/primitives/docs/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
			      <ListItem
                title="Introduction"
                href="/primitives/docs/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
			      <ListItem
                title="Introduction"
                href="/primitives/docs/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem> */}

              <Link
                className={styles.ListItemLink}
                title={t("teachers.title")}
                href={t("teachers.href")}
              >
                {t("teachers.text")}

                <p className={styles.ListItemText}>цйцйацйуацу</p>
              </Link>
              <Link
                className={styles.ListItemLink}
                title={t("works.title")}
                href={t("works.href")}
              >
                {t("works.text")}
              </Link>

              {/* <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem> */}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={styles.Trigger}>
            СВЕТЛАЯ <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.Content}>
            <ul className={`${styles.List} two`}>
              {/* <ListItem
                title="Introduction"
                href="/primitives/docs/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/primitives/docs/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title="Styling" href="/primitives/docs/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/primitives/docs/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/primitives/docs/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/primitives/docs/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem> */}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

		 <NavigationMenu.Item>
          <NavigationMenu.Trigger className={styles.Trigger}>
            Ru <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.Content}>
              {/* <select onChange={onSelectChange}>
                  <option>ru</option>
                  <option>en</option>
              </select> */}

            <ul className={`${styles.List} two`}>
              {/* <ListItem
                title="Introduction"
                href="/primitives/docs/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/primitives/docs/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title="Styling" href="/primitives/docs/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/primitives/docs/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/primitives/docs/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/primitives/docs/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem> */}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className={styles.Indicator}>
          <div className={styles.Arrow} />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className={styles.ViewportPosition}>
        <NavigationMenu.Viewport className={styles.Viewport} />
      </div>
    </NavigationMenu.Root>
  );
};

// const ListItem = React.forwardRef(
//   ({ className, children, title, ...props }, forwardedRef) => (
//     <li>
//       <NavigationMenu.Link asChild>
//         <a
//           className={clsx(styles.ListItemLink, className)}
//           {...props}
//           ref={forwardedRef}
//         >
//           <div className={styles.ListItemHeading}>{title}</div>
//           <p className={styles.ListItemText}>{children}</p>
//         </a>
//       </NavigationMenu.Link>
//     </li>
//   )
// );

export default NavMenu;
