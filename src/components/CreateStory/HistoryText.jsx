import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postBook } from "../../redux/features/books";
import style from "./styles.module.css";

export default function HistoryText({
  title,
  desc,
  chars,
  photo,
  tags,
  category,
  show,
  onHide,
}) {
  const [fullscreen, setFullscreen] = useState(true);
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const author = localStorage.getItem("user");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const dispatch = useDispatch();

  const handlePublish = () => {
    dispatch(postBook(photo, title, desc, chars, tags, category, text, author));
    navigate("/");
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        fullscreen={fullscreen}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>История</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            value={text}
            onChange={(e) => handleText(e)}
            className={style.bookText}
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <Button onClick={handlePublish}>Опубликовать</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
