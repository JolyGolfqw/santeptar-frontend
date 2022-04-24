import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { auth, createUser } from "../../redux/features/application";

export default function Signup() {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const error = useSelector((state) => state.application.errorSingUp);

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      return alert("Пароль не должен быть меньше 6 символов");
    }
   await dispatch(createUser(login, password, userName));
    if (!error) {
       await dispatch(auth(login, password))
    }
  };

  return (
    <>
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter" className="title">
          Регистрация
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Введите данные</h6>
        <div className="form-floating formFloating">
          <input
            value={userName}
            onChange={(e) => handleUserName(e)}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Имя пользователя</label>
        </div>
        <div className="form-floating formFloating">
          <input
            value={login}
            onChange={(e) => handleLogin(e)}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">E-mail</label>
        </div>
        <div className="form-floating">
          <input
            value={password}
            onChange={(e) => handlePassword(e)}
            type="password"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Пароль</label>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="registerButton" onClick={(e) => handleAuth(e)}>
          Регистрация
        </Button>
      </Modal.Footer>
    </>
  );
}
