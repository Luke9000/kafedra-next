import Header from "@/components/Header/index";
import { routing } from "@/i18n/routing";
import "@/styles/global.css";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "./globals.css";
import styles from "./layout.module.css";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const onest = localFont({
  src: "../../fonts/Onest-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-onest",
  weight: "100 900",
  style: "normal",
});

const neutralFace = localFont({
  src: "../../fonts/NeutralFace-Bold.ttf",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Кафедра Цифровых и аддитивных технологий",
  description: "Добро пожаловать на сайт ЦАТ Спбгуптд",
  openGraph: {
    title: "Кафедра Цифровых и аддитивных технологий",
    description: "Добро пожаловать на официальный сайт кафедры ЦАТ СПбГУПТД.",
    url: "https://datsutd.ru",
    siteName: "Кафедра ЦАТ СПбГУПТД",
    images: [
      {
        url: "https://tukzhejovsuybrreadju.supabase.co/storage/v1/object/public/misc//Logo.svg",
        width: 807,
        height: 100,
        alt: "Логотип кафедры ЦАТ",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
      </head>
      <body className={`${onest.variable} ${neutralFace.className}`}>
        <NextIntlClientProvider>
          <Header></Header>
          <main className={styles.main}>{children}</main>
          <Footer></Footer>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
