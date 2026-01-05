import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ data, onCardClick, onCardLike }) {
  const { userData, isLoggedIn } = useContext(CurrentUserContext);

  function handleOpenCard() {
    onCardClick(data);
  }

  function handleLike() {
    onCardLike(data);
  }

  const isLiked = data.likes.includes(userData._id);

  return (
    <li className="card">
      <div className="card__title-and-like">
        <h2 className="card__title">{data.name}</h2>
        {isLoggedIn && (
          <button
            onClick={handleLike}
            className={`card__like-btn ${
              isLiked ? "card__like-btn_liked" : ""
            }`}
          ></button>
        )}
      </div>
      <img
        src={data.imageUrl}
        alt={data.name}
        className="card__image"
        onClick={handleOpenCard}
      />
    </li>
  );
}

export default ItemCard;
