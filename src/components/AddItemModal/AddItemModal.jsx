import { useRef } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ isOpen, handleCloseModal, handleAddItemSubmit }) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    weather: "hot",
    imageUrl: "",
  });

  const initialForm = {
    name: "",
    weather: "hot",
    imageUrl: "",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddItemSubmit(values);
    setValues(initialForm);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="New garment"
      buttonText="Add garment"
      name="add-garment-form"
      onXClick={handleCloseModal}
      handleSubmit={handleSubmit}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="add-garment-name-input" className="modal__label">
          Name
          <input
            id="add-garment-name-input"
            type="text"
            placeholder="Name"
            className="modal__input"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="add-garment-link-input" className="modal__label">
          Image
          <input
            id="add-garment-link-input"
            type="url"
            placeholder="Image URL"
            className="modal__input"
            name="imageUrl"
            value={values.imageUrl}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <legend className="modal__legend">Select the weather type:</legend>

        <div className="modal__radiobtn-and-label">
          <input
            className="modal__radio-btn"
            type="radio"
            id="hot"
            name="weather"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
          />
          <label className="modal__label" htmlFor="hot">
            Hot
          </label>
        </div>

        <div className="modal__radiobtn-and-label">
          <input
            className="modal__radio-btn"
            type="radio"
            id="warm"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          <label className="modal__label" htmlFor="warm">
            Warm
          </label>
        </div>

        <div className="modal__radiobtn-and-label">
          <input
            className="modal__radio-btn"
            type="radio"
            id="cold"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          <label className="modal__label" htmlFor="cold">
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
