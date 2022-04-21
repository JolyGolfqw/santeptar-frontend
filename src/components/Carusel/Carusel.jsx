import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../Carusel/Carusel.module.css";

const Carusel = () => {
  return (
    <Carousel className={styles.main} interval="3000"  controls={false} indicators={true}>
      <Carousel.Item>
        <div className={styles.content}>
          <img
            className={styles.image}
            src="https://ma.wattpad.com/kaleidoscopic_hfc_desktop.png"
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.content}>
          <img
            className={styles.image}
            src="https://ma.wattpad.com/milo_callout_hfc_desktop.jpg"
            alt="Second slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.content}>
          <img
            className={styles.image}
            src="https://static-cse.canva.com/blob/773181/2020100815.23.03.png"
            alt="Third slide"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carusel;
