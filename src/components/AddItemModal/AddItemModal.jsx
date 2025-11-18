import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ activeModal, handleCloseModal }) {
  return (
    <ModalWithForm
      isOpen={activeModal === "add-garment-modal"}
      title="New garment"
      buttonText="Add garment"
      name="add-garment-form"
      onXClick={handleCloseModal}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="add-garment-name-input" className="modal__label">
          Name
          <input
            id="add-garment-name-input"
            type="text"
            placeholder="Name"
            className="modal__input"
          />
        </label>
        <label htmlFor="add-garment-link-input" className="modal__label">
          Image
          <input
            id="add-garment-link-input"
            type="url"
            placeholder="Image URL"
            className="modal__input"
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
