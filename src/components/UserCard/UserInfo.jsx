import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editProfile } from "../../redux/features/users";

export default function UserInfo({id, desc, show, onHide }) {

const dispatch = useDispatch();

const userDesc = desc

  const [text, setText] = useState(userDesc);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const editDesc = () => {
    dispatch(editProfile(text, id))
    setTimeout(() =>{
      window.location.reload()

    }, 500)
  }

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea value={text ? text : userDesc} onChange={(e) => handleText(e)} name="" id="" cols="30" rows="10"></textarea>
          
        </Modal.Body>
        <Button onClick={editDesc}>Сохранить</Button>

      </Modal>
    </>
  );
}
