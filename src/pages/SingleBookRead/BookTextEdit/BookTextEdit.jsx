import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { continueBook } from "../../../redux/features/books";
import style from "./styles.module.css";

export default function BookTextEdit({ title, book, id, show, onHide }) {
  const [fullscreen, setFullscreen] = useState(true);

  const [text, setText] = useState(book);
  const author = localStorage.getItem("user");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const dispatch = useDispatch();

  const handlePublish = () => {
      dispatch(continueBook(text, id))
      setTimeout(() => {
        window.location.reload()
      }, 500)
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
          <Modal.Title>{title}</Modal.Title>
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
