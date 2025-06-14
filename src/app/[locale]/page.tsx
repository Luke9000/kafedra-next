import clsx from "clsx";
import Hero from "./main/Hero";
import StudyRoute from "./main/StudyRoute";
import Table from "./main/Table";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero></Hero>
      <section className="section_border">
        <h1 className={styles.left5vw}>СФЕРЫ ДЕЯТЕЛЬНОСТИ</h1>
        <Table></Table>
      </section>
      <section>
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
