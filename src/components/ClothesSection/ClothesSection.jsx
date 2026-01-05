import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ClothesSection({
  clothingItems,
  handleOpenItemModal,
  handleOpenAddGarmentModal,
  handleCardLike,
}) {
  const { userData } = useContext(CurrentUserContext);

  if (!userData || !userData._id) {
    console.log("User data not found");
  }

  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        Your items
        <button
          onClick={handleOpenAddGarmentModal}
          className="clothes-section__btn"
        >
          + Add New
        </button>
      </div>
      <ul className="clothes-section__card-list">
        {clothingItems.map((item) => {
          if (item.owner !== userData._id && item.owner._id !== userData._id) {
            return null;
          }

          return (
            <ItemCard
              key={item._id}
              data={item}
              onCardClick={handleOpenItemModal}
              onCardLike={handleCardLike}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;
