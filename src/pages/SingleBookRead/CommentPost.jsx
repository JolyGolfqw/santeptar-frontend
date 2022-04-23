import React from "react";
import style from "../SingleBookRead/singleBookRead.module.css";
import Comment from "./Comment";
const CommentPost = () => {
  return (
    // COMMENT FIELD ENTRY ↓
    <div className={style.comments_render}>
      <div className={style.render_field}>
        <div className={style.comment_avatar}>
          <img
            src="https://www.prikol.ru/wp-content/gallery/october-2019/prikol-25102019-001.jpg"
            alt="avatar"
            className={style.image_config}
          ></img>
        </div>
        <div className={style.comments_field}>
          <textarea
            placeholder="Добавить комментарий"
            cols="30"
            rows="10"
          ></textarea>
          <button>Добавить</button>
        </div>
      </div>

      {/* COMMENTS RENDER ↓ */}
      <Comment />
    </div>
  );
};

export default CommentPost;
