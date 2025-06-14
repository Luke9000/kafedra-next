'use client'

import Modal from "../../../../components/Modal";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import clsx from "clsx";
import { useState } from "react";
import { Events, Kursi, CK } from "./heroModals";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)}>{modalContent}</Modal>,
          document.body
        )}
      <div className={styles.container}>
        <div className={styles.blockText}>
          <p className="alt2">О кафедре</p>
          <small className={clsx("alt", styles.smallLineHeight)}>
            Кафедра цифровых и аддитивных технологий СПБГУПТД занимается
            разработкой и внедрением передовых решений в области информационных
            технологий и цифровизации
          </small>
        </div>
        <div className={styles.block} onClick={() => openModal(Kursi)}>
          <p className="alt2">Подготовительные курсы</p>
          <small className={clsx("alt", styles.smallLineHeight)}>
            Возможность для студентов 9 и 11 классов подготовиться к
            вступительным испытаниям
          </small>
        </div>

        <div className={styles.block} onClick={() => openModal(Events)}>
          <p className="alt2">Мероприятия</p>
          <small className={clsx("alt", styles.smallLineHeight)}>
            Более 2000 студентов различных направлений со всего университета
            осваивают IT направления
          </small>
        </div>

        <div className={styles.block} onClick={() => openModal(CK)}>
          <p className="alt2">Проект цифровая кафедра</p>
          <small className={clsx("alt", styles.smallLineHeight)}>
            Более 2000 студентов различных направлений со всего университета
            осваивают IT направления
          </small>
        </div>
      </div>
    </>
  );
};

export default Index;
