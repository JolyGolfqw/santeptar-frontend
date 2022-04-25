import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeComment } from "../../redux/features/comments";
import style from "../SingleBookRead/singleBookRead.module.css";

const Comment = (props) => {
  const { element, comments } = props;
	const dispatch = useDispatch();

  const userId = useSelector((state) => state.application.user);
	const avatar = useSelector(state => state.application.avatar)
	const token = useSelector(state => state.application.token)
  const userName = useSelector(state => state.application.userName)

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
              src={`http://localhost:4000/${element.user.avatar ? element.user.avatar : avatar}`}
              alt="avatarka"
              className={style.avatar_comment_user}
            ></img>
          </div>
          <div className={style.name_and_data_comment_user}>
            <div className={style.name_comment_user}><Link to={`/profile/${element.user._id}`}>{element.user.name ? element.user.name : userName}</Link></div>
            <div className={style.data_comment_user}>
              {element.date.substr(0, 10)}
            </div>
          </div>
          {userId === element.user || userId === element.user._id && token ? (
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
