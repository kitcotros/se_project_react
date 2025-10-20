import { useState } from "react";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";

import { defaultClothingItems } from "../../utils/defaultClothingItems.js";
import "./App.css";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  function handleOpenItemModal(card) {
    setActiveModal("item-modal");
    setSelectedCard(card);
  }

  function handleCloseItemModal() {
    setActiveModal("");
  }

  return (
    <div className="app">
      <Header />
      <Main
        clothingItems={clothingItems}
        handleOpenItemModal={handleOpenItemModal}
      />
      <Footer />
      <ItemModal card={selectedCard} isOpen={activeModal === "item-modal"} />
    </div>
  );
}

export default App;
