import React from "react";
import styles from "../ModalBookDesc/modalbookdesc.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalBookDesc = (props) => {
  const { openModal, setOpenModal, item } = props;

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
              <img src={item.img} alt="img"></img>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>{item.title}</h3>
              <div className='endedStories'>
                <h5>Завершенная история</h5>
              </div>
              <div className="info">
                <div className="likes">
                  <div className="likesIcon">
                    <div>
                      <ion-icon name="happy-outline"></ion-icon>
                    </div>
                    <span>Голосов</span>
                  </div>
                  <h6>0</h6>
                </div>
                <div className="time">
                  <div className="bookIcon">
                    <div>
                      <ion-icon name="book-outline"></ion-icon>
                    </div>
                    <span>Время</span>
                  </div>
                  <h6>5 мин</h6>
                </div>
              </div>
              <div style={{ marginTop: 10 }}>{item.description}</div>
              <button
                className="learn-more"
                style={{ marginTop: 10, marginLeft: 280 }}
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
