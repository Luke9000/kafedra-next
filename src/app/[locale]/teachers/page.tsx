import { useTranslations } from "next-intl";
import { text } from "stream/consumers";
import styles from "./page.module.css";

export default function Teachers() {
  const t = useTranslations("Teachers");

 return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <li>
           {t('title')}
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

      </main>
   
    </div>
  );
}
