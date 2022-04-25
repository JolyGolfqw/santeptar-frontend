import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editProfile } from "../../redux/features/users";
import UserSmallCard from "../UserCard/UserSmallCard/UserSmallCard";
import './styles.css'

export default function Followers({dude, show, onHide }) {

const dispatch = useDispatch();

  return (
     <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Подписчики
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UserSmallCard dude={dude}/>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}
