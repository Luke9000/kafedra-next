'use client'

import { useState } from "react";
import "./Table.css";
import { createPortal } from "react-dom";
import Modal from "../../../../components/Modal";
import tableData from "../../../../content/tableData";

const SwitchableTable: React.FC = () => {
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
      <div className="wrapper">
        <div className="grid">
          {tableData.map((item, index) => (
            <b
              key={`base-${index}`}
              className="grid-item base"
              onClick={() =>
                openModal(
                  <div className="tableModal">
                    <h1 className="bigText">{item.title}</h1>
                    <p className="tableModalText">
                      {item.text.split("\n").map((str, index) => (
                        <span key={index}>
                          {str}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                )
              }
            >
              {item.title}
            </b>
          ))}
        </div>
      </div>
    </>
  );
};

export default SwitchableTable;
