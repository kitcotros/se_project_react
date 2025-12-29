import "./ItemModal.css";
import xicon from "../../assets/x-icon.svg";

import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ card, isOpen, onXClick, handleDeleteItemSubmit }) {
  function handleDelete() {
    handleDeleteItemSubmit(card);
  }

  const { userData } = useContext(CurrentUserContext);

  console.log("Current user id", userData?._id);
  console.log("Card owner:", card?.owner);
  console.log("Owner type:", typeof card?.owner);

  const isOwn = userData?._id === card?.owner?._id;

  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container">
        <img src={card.imageUrl} className="modal__image" />
        <img src={xicon} className="modal__close-btn" onClick={onXClick} />
        <div className="modal__grouper">
          <div>
            <p className="modal__title">{card.name}</p>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <div>
            <button
              onClick={handleDelete}
              className={`modal__delete-btn ${
                isOwn ? `` : `modal__delete-btn_hidden`
              }`}
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
