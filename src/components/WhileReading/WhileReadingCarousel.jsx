import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import WhileReadingCard from "./WhileReading";
import styles from "./style.module.css";

const WhileReadingCarousel = () => {
  return (
    <Carousel interval="3000" controls={true} indicators={true}>
      <Carousel.Item>
        <div className={styles.reversCard}>
          <div>
            <WhileReadingCard />
          </div>
          <div>
            <WhileReadingCard />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.reversCard}>
          <div>
            <WhileReadingCard />
          </div>
          <div>
            <WhileReadingCard />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.reversCard}>
          <div>
            <WhileReadingCard />
          </div>
          <div>
            <WhileReadingCard />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default WhileReadingCarousel;
