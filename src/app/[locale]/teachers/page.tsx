'use client'

// import { useTranslations } from "next-intl";
import { useState } from "react";
import { teachers } from "../../../content/teachers";
import styles from "./page.module.css";
import Image from "next/image";


export default function Teachers() {
  // const t = useTranslations("Teachers");

  const [query, setQuery] = useState("");

  const filteredTeachers = teachers.filter(
    (item) =>
      item.text.toLowerCase().includes(query.toLowerCase()) ||
      item.subtext.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.cont}>
      <div className={styles.title}>
        <h1 className={styles.local}>ПРЕПОДАВАТЕЛИ</h1>
        <input
          className={styles.search}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            // console.log(e.target.value);
          }}
          placeholder="Поиск"
        ></input>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map((item) => (
              <div className={styles.gridItem} key={item.text}>
                <Image
                  className={styles.img}
                  src={item.image}
                  alt={item.text}
                  width={218}
                  height={300}
                />

                <div className={styles.teacherText}>
                  <p className={styles.teachers}>
                    {item.text}
                  </p>
                  <small className={styles.teachers}>
                    {item.subtext}
                  </small>
                </div>
              </div>
            ))
          ) : (
            <p style={{ margin: "0 auto" }}>Ничего не найдено</p>
          )}
        </div>
      </div>
    </div>
  );
}
