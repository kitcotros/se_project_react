import { useState, useEffect } from "react";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

import { defaultClothingItems } from "../../utils/defaultClothingItems.js";
import "./App.css";
import { getWeatherData } from "../../utils/weatherApi.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({ name: "", temp: "0" });
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  function handleOpenItemModal(card) {
    setActiveModal("item-modal");
    setSelectedCard(card);
  }

  function handleOpenAddGarmentModal() {
    setActiveModal("add-garment-modal");
  }

  function handleCloseModal() {
    setActiveModal("");
  }

  function handleTempUnitChange() {
    if (currentTempUnit == "F") {
      setCurrentTempUnit("C");
    } else {
      setCurrentTempUnit("F");
    }
  }

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    setClothingItems(defaultClothingItems);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTempUnit, handleTempUnitChange }}
    >
      <div className="app">
        <Header
          weatherData={weatherData}
          handleOpenAddGarmentModal={handleOpenAddGarmentModal}
        />
        <Main
          weatherData={weatherData}
          clothingItems={clothingItems}
          handleOpenItemModal={handleOpenItemModal}
        />
        <Footer />
        <ItemModal
          card={selectedCard}
          isOpen={activeModal === "item-modal"}
          onXClick={handleCloseModal}
        />
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
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
