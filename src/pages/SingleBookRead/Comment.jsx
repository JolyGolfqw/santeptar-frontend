import React from "react";
import style from "../SingleBookRead/singleBookRead.module.css";

const Comment = () => {
  return (
    <div className={style.comments_paket}>
      <div className={style.comment_user}>
        <div className={style.header_comment_user}>
          <div className={style.image_comment_user}>
            <img
              src="https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg"
              alt="avatarka"
              className={style.avatar_comment_user}
            ></img>
          </div>
          <div className={style.name_and_data_comment_user}>
            <div className={style.name_comment_user}>Nasty</div>
            <div className={style.data_comment_user}>22.04.2022</div>
          </div>
          <button className={style.delete_btn_comment_user}>
            <ion-icon name="close-circle-outline"></ion-icon>
          </button>
        </div>
        <div className={style.text_comment_user}>
          Только начала читать, а уже хочется чтобы у книги был статус:
          «закончена», потому что все ваши произведения шедевры, а шедевры
          хочется читать без остановки.  Только начала читать, а уже хочется чтобы у книги был статус:
          «закончена», потому что все ваши произведения шедевры, а шедевры
          хочется читать без остановки. 
        </div>
      </div>
    </div>
  );
};

export default Comment;
