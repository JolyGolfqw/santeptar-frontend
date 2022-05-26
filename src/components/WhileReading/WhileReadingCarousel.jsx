import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import WhileReadingCard from "./WhileReading";
import styles from "./style.module.css";
import WhileReadingCardTwo from "./WhileReadingTwo";
import WhileReadingCardThree from "./WhileReadingThree.";
import WhileReadingCardFour from "./WhileReadingFour";

const WhileReadingCarousel = () => {
  return (
    <Carousel interval="3000" controls={true} indicators={true}>
      <Carousel.Item>
        <div className={styles.reversCard}>
          <div>
            <WhileReadingCard />
          </div>
          <div>
            <WhileReadingCardTwo />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.reversCard}>
          <div>
            <WhileReadingCardThree />
          </div>
          <div>
            <WhileReadingCardFour />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default WhileReadingCarousel;
