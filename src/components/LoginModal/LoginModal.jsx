import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, handleCloseModal, handleLogin }) {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handleSubmit prevents the default browser behavior and calls
  // the login handler.
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Log in"
      buttonText="Log in"
      name="login-form"
      onXClick={handleCloseModal}
      handleSubmit={handleSubmit}
      className="login"
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="login-email-input" className="modal__label">
          Name
          <input
            id="login-email-input"
            type="email"
            placeholder="Email"
            className="modal__input"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="login-password-input" className="modal__label">
          Password
          <input
            id="login-password-input"
            type="password"
            placeholder="Password"
            className="modal__input"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default LoginModal;
