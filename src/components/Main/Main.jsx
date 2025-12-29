import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";

import "./Main.css";

import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Main({ clothingItems, handleOpenItemModal, weatherData }) {
  const { userData } = useContext(CurrentUserContext);

  const filteredClothes = clothingItems.filter((item) => {
    if (item.weather === weatherData.templevel) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {weatherData.temp.F}&deg; F / You may want to wear:
      </p>
      <ul className="main__card-list">
        {filteredClothes.map((item) => {
          return (
            <ItemCard
              key={item._id}
              data={item}
              onCardClick={handleOpenItemModal}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
