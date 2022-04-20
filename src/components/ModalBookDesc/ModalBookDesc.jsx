import React from "react";
import styles from "../ModalBookDesc/modalbookdesc.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalBookDesc = () => {
  const [smShow, setSmShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setSmShow(true)} className="me-2">
        Small modal
      </Button>
      <Modal size="lg" show={smShow} onHide={() => setSmShow(false)}>
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
                src="https://img-gorod.ru/29/122/2912202_detail.jpg"
                alt="img"
              ></img>
            </div>
            <div style={{ marginLeft: 20 }}>
              <h3>Ibragim Sardalov</h3>
              <div class="condition">Завершенная история</div>
              <div style={{ marginTop: 30 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit...
              </div>
              <button
                class="learn-more"
                style={{ marginTop: 50, marginLeft: 280 }}
              >
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Начать читать</span>
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalBookDesc;
