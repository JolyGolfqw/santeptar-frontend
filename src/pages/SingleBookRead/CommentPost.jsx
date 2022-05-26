import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../SingleBookRead/singleBookRead.module.css";
import { addComment } from "../../redux/features/comments";
import Comment from "./Comment";
const CommentPost = (props) => {
  const { id, comments } = props;

  const dispatch = useDispatch();

  const avatar = useSelector((state) => state.application.avatar);
  const author = useSelector((state) => state.application.user);
  const token = useSelector((state) => state.application.token);

  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (comment !== "") {
      dispatch(addComment(comment, id, author));
      setComment("");
    }
    return;
  };

  return (
    // COMMENT FIELD ENTRY ↓
    <div className={style.comments_render}>
      <div className={style.render_field}>
        <div className={style.comment_avatar}>
          {!token ? (
            ""
          ) : (
            <img
              src={`http://localhost:4000/${avatar}`}
              alt="avatar"
              className={style.image_config}
            ></img>
          )}
        </div>
        <div className={style.comments_field}>
          <textarea
            disabled={!token ? true : false}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            placeholder={`${
              !token
                ? "Войдите в аккаунт, чтобы оставить комментарий"
                : "Добавить комментарий"
            }`}
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={handleAddComment}>Добавить</button>
        </div>
      </div>

      {/* COMMENTS RENDER ↓ */}
      {comments.map((element) => {
        if (element.books === id) {
          return (
            <Comment comments={comments} element={element} key={element._id} />
          );
        }
      })}
    </div>
  );
};

export default CommentPost;
