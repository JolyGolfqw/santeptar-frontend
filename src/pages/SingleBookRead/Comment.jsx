import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeComment } from "../../redux/features/comments";
import style from "../SingleBookRead/singleBookRead.module.css";

const Comment = (props) => {
  const { element, comments } = props;

	const dispatch = useDispatch();

  const userId = useSelector((state) => state.application.user);
	const avatar = useSelector(state => state.application.avatar)
	const token = useSelector(state => state.application.token)

	const handleDeleteComment = (id) => {
		const filtered = comments.filter((item) => item._id !== id)
		dispatch(removeComment(id, filtered))
	}

  return (
    <div className={style.comments_paket}>
      <div className={style.comment_user}>
        <div className={style.header_comment_user}>
          <div className={style.image_comment_user}>
            <img
              src={`http://localhost:4000/${avatar}`}
              alt="avatarka"
              className={style.avatar_comment_user}
            ></img>
          </div>
          <div className={style.name_and_data_comment_user}>
            <div className={style.name_comment_user}>Имя</div>
            <div className={style.data_comment_user}>
              {element.date.substr(0, 10)}
            </div>
          </div>
          {userId === element.user && token ? (
            <button className={style.delete_btn_comment_user} onClick={() => handleDeleteComment(element._id)}>
              <ion-icon name="close-circle-outline"></ion-icon>
            </button>
          ) : (
            ""
          )}
        </div>
        <div className={style.text_comment_user}>{element.text}</div>
      </div>
    </div>
  );
};

export default Comment;
