import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, handleCloseModal }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    avatarUrl: "",
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
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Sign up"
      buttonText="Next"
      name="register-form"
      onXClick={handleCloseModal}
      handleSubmit={handleSubmit}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="register-email-input" className="modal__label">
          Name
          <input
            id="register-email-input"
            type="email"
            placeholder="Email"
            className="modal__input"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="register-password-input" className="modal__label">
          Image
          <input
            id="register-password-input"
            type="password"
            placeholder="Password"
            className="modal__input"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="register-name-input" className="modal__label">
          Image
          <input
            id="register-name-input"
            type="text"
            placeholder="Name"
            className="modal__input"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="register-avatar-url-input" className="modal__label">
          Image
          <input
            id="register-avatar-url-input"
            type="url"
            placeholder="Avatar URL"
            className="modal__input"
            name="avatarUrl"
            value={data.avatarUrl}
            onChange={handleChange}
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default RegisterModal;
