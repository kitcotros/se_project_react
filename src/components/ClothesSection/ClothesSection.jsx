import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ClothesSection({
  clothingItems,
  handleOpenItemModal,
  handleOpenAddGarmentModal,
}) {
  const { userData } = useContext(CurrentUserContext);

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
          if (item?.owner?._id !== userData?._id) {
            return null;
          }

          return (
            <ItemCard
              key={item._id}
              data={item}
              onCardClick={handleOpenItemModal}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;
