import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, handleCloseModal, handleRegistration }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegistration(data);
    setData({
      email: "",
      password: "",
      name: "",
      avatar: "",
    });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Sign up"
      buttonText="Sign Up"
      name="register-form"
      onXClick={handleCloseModal}
      handleSubmit={handleSubmit}
      className="register"
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="register-email-input" className="modal__label">
          Email *
          <input
            id="register-email-input"
            type="email"
            placeholder="Email"
            className="modal__input"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="register-password-input" className="modal__label">
          Password *
          <input
            id="register-password-input"
            type="password"
            placeholder="Password"
            className="modal__input"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="register-name-input" className="modal__label">
          Name *
          <input
            id="register-name-input"
            type="text"
            placeholder="Name"
            className="modal__input"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="register-avatar-url-input" className="modal__label">
          Avatar URL
          <input
            id="register-avatar-url-input"
            type="url"
            placeholder="Avatar URL"
            className="modal__input"
            name="avatar"
            value={data.avatar}
            onChange={handleChange}
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default RegisterModal;
