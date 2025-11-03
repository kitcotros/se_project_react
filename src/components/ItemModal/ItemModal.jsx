import "./ItemModal.css";
import xicon from "../../assets/x-icon.svg";

function ItemModal({ card, isOpen, onXClick }) {
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container">
        <img src={card.link} className="modal__image" />
        <img src={xicon} className="modal__close-btn" onClick={onXClick} />
        <p className="modal__title">{card.name}</p>
        <p className="modal__weather">Weather: {card.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
