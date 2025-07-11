import clsx from "clsx";
import Hero from "./main/Hero";
import StudyRoute from "./main/StudyRoute";
import Table from "./main/Table";
import styles from "./page.module.css";
import { PartnerIcons } from "@/components/PartnerIcons";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero></Hero>
      <section className="section_border main_section">
        <h1 className={styles.left5vw}>СФЕРЫ ДЕЯТЕЛЬНОСТИ</h1>
        <Table></Table>
      </section>
      <h1 className={styles.leftMarg}>ПАРТНЕРЫ КАФЕДРЫ</h1>
      <PartnerIcons></PartnerIcons>
      <section className="main_section">
        <div className={styles.fullScreen}>
          <h1 className={clsx(styles.left5vw, "alt")}>
            НАПРАВЛЕНИЯ ПОДГОТОВКИ
          </h1>
          <StudyRoute></StudyRoute>
        </div>
      </section>
    </div>
  );
}
