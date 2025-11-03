function ModalWithForm({
  isOpen,
  children,
  handleSubmit,
  title,
  buttonText,
  name,
  onXClick,
}) {
  return (
    <div className={`modal${isOpen ? " modal_is-opened" : ""}`}>
      <div className="modal__container modal__container_type_form">
        <h2 className="modal__title modal__title_type_form">{title}</h2>
        <button
          onClick={onXClick}
          className="modal__close-btn modal__close-btn_type_form"
        ></button>
        <form onSubmit={handleSubmit} name={name} className="modal__form">
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
