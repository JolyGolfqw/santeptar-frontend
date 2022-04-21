import React, { useState } from "react";
import ModalBookDesc from "../../ModalBookDesc/ModalBookDesc";
import styles from "./smallcard.module.css";

const SmallCard = ({ item }) => {
	
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (id) => {
		setOpenModal(!openModal)
    console.log(item);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_img}>
          <img className={styles.image} src={item.img} alt="img"></img>
        </div>
        <div className={styles.card_info}>
          <p className={styles.text_title}>{item.title}</p>
          <p className={styles.text_body}>
            {item.description.substr(0, 98) + "..."}
          </p>
          <button
            onClick={() => handleClick(item._id)}
            className={styles.card_button}
          >
            Подробнее
          </button>
        </div>
      </div>
      {openModal && <ModalBookDesc openModal={openModal} setOpenModal={setOpenModal} item={item}/>}
    </>
  );
};

export default SmallCard;
