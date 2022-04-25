import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import style from './styles.module.css'

export default function BookTextEdit({ show, onHide }) {
  const [fullscreen, setFullscreen] = useState(true);

  const [text, setText] = useState("");
  const author = localStorage.getItem('user')

  const handleText = (e) => {
    setText(e.target.value);
  };

  const dispatch = useDispatch();

  const handlePublish = () => {
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
          <Modal.Title>Modal</Modal.Title>
          <Button onClick={handlePublish}>Опубликовать</Button>
        </Modal.Header>
        <Modal.Body>
          <input type="text" />
          <textarea
            value={text}
            onChange={(e) => handleText(e)}
            // className={style.bookText}
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </Modal.Body>
      </Modal>
    </>
  );
}
