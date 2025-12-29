import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";

function EditProfileModal({
  isOpen,
  handleCloseModal,
  handleEditProfileSubmit,
}) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    avatar: "",
  });

  const initialForm = {
    name: "",
    avatar: "",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEditProfileSubmit(values);
    setValues(initialForm);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Change profile data"
      buttonText="Save changes"
      name="edit-profile-form"
      onXClick={handleCloseModal}
      handleSubmit={handleSubmit}
      className="login"
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="login-email-input" className="modal__label">
          Name
          <input
            id="login-email-input"
            type="text"
            placeholder="Name"
            className="modal__input"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="login-password-input" className="modal__label">
          Avatar
          <input
            id="login-password-input"
            type="url"
            placeholder="Avatar URL"
            className="modal__input"
            name="avatar"
            value={values.avatar}
            onChange={handleChange}
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default EditProfileModal;
