"use client";

import clsx from "clsx";
import { useState } from "react";
import { createPortal } from "react-dom";
// import { works } from "../../../entities/works";
import Modal from "../../../components/Modal";
import styles from "./styles.module.css";
import type { Work } from "./type";
import Image from 'next/image'

type Props = {
  works: Work[];
};

const Index = ({ works }: Props) => {
  // console.log("titleImage:", typeof works[0].titleImage, works[0].titleImage);
  // console.log("images:", works[0].images);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setShowModal(true);
  };

  const [query, setQuery] = useState("");

  const filteredWorks = works.filter(
    (item) =>
      (item.author?.toLowerCase().includes(query.toLowerCase()) ?? false) ||
      (item.title?.toLowerCase().includes(query.toLowerCase()) ?? false) ||
      (item.year?.toString().toLowerCase().includes(query.toLowerCase()) ??
        false) ||
      (item.type?.toLowerCase().includes(query.toLowerCase()) ?? false)
  );

  return (
    <>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)}>{modalContent}</Modal>,
          document.body
        )}
      <div className={styles.cont}>
        <div className={styles.title}>
          <h1 className={styles.local}>РАБОТЫ СТУДЕНТОВ</h1>
          <input
            className={styles.search}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              // console.log(e.target.value);
            }}
            placeholder="Поиск..."
          ></input>
        </div>
        <div className={styles.container}>
          {filteredWorks.length > 0 ? (
            filteredWorks.map((item, index) => (
              <div
                style={{ backgroundImage: `url(${item.images[0]})` }}
                key={index}
                className={styles.block}
                onClick={() =>
                  openModal(
                    <div className={styles.modal}>
                      <div className={styles.modalTitle}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.type}>{item.type}</p>
                        <div className={styles.modalAuthor}>
                          <small>{item.author}</small>
                          <small>{item.year}</small>
                        </div>
                      </div>

                      <div className={styles.modalImages}>
                        {item.images.map((item2, index2) => (
                          <div className={styles.imgWrapper} key={index2}>
                            {/* <img
                              className={styles.img}
                              key={index2}
                              src={item2}
                            ></img> */}
                            <Image width={600} height={300} className={styles.img} src={item2} alt={item2} ></Image>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                }
              >
                <small
                  className={clsx("alt", styles.smallLineHeight, styles.author)}
                >
                  <span>{item.author}. </span>
                  <span>{item.title}</span>
                </small>
              </div>
            ))
          ) : (
            <p style={{ margin: "auto auto" }}>Ничего не найдено</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
