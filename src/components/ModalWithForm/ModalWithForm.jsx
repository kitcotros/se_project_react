function ModalWithForm({ isOpen, children, handleSubmit, title, buttonText }) {
  return (
    <div className={`modal${isOpen ? " modal_is-opened" : ""}`}>
      <div className="modal__container modal__container_type_form">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close-btn">X</button>
        <form onSubmit={handleSubmit} className="modal__form">
          {children}
        </form>
        <button type="submit" className="modal__submit-btn">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
