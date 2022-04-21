import React from "react";
import styles from "../ModalBookDesc/modalbookdesc.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalBookDesc = (props) => {

	const {openModal, setOpenModal, item} = props;

  return (
    <div>
      <Modal size="lg" show={openModal} onHide={() => setOpenModal(false)}>
        <Modal.Body>
          <div
            className={styles.content}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className={styles.modal_image}>
              <img
                src={item.img}
                alt="img"
              ></img>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>{item.title}</h3>
              <div className="condition">Завершенная история</div>
              <div style={{ marginTop: 30 }}>
                {item.description}
              </div>
              <button
                className="learn-more"
                style={{ marginTop: 50, marginLeft: 280 }}
              >
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Начать читать</span>
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalBookDesc;
