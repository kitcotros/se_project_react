import { useContext } from "react";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import cloudy from "../../assets/cloudy.svg";
import { weatherConditionImages } from "../../utils/constants";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  const contextValue = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather-card">
      <img
        src={
          weatherConditionImages[weatherData.isDay ? "day" : "night"][
            weatherData.weatherCondition
          ]?.image || weatherConditionImages["night"]["default"]?.image
        }
        alt="cloudy weather"
        className="weather-card__image"
      />
      <p className="weather-card__temp">
        {weatherData.temp[contextValue.currentTempUnit]}&deg;{" "}
        {contextValue.currentTempUnit}
      </p>
    </section>
  );
}

export default WeatherCard;
