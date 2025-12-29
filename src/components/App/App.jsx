import { useState, useEffect } from "react";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

import { getItems, addItem, deleteItem, getUserInfo } from "../../utils/api.js";
import * as auth from "../../utils/auth.js";
import { defaultClothingItems } from "../../utils/defaultClothingItems.js";
import "./App.css";
import { getWeatherData } from "../../utils/weatherApi.js";
import { setToken, getToken } from "../../utils/token.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({ name: "", temp: "0" });
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ name: "", avatar: "" });

  const navigate = useNavigate();

  const handleRegistration = ({ name, avatar, email, password }) => {
    console.log(email);

    auth
      .register(name, avatar, email, password)
      .then(() => {
        // TODO: handle succesful registration
        handleCloseModal();
        handleLogin({ email, password });
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }

    auth
      .authorize(email, password)
      .then((data) => {
        console.log("LOGIN RESPONSE:", data);
        if (data.token) {
          setToken(data.token);
          setUserData(data.user);
          setIsLoggedIn(true);
          handleCloseModal();
          navigate("/");
        }
      })
      .catch(console.error);
  };

  function handleOpenItemModal(card) {
    setActiveModal("item-modal");
    setSelectedCard(card);
  }

  function handleOpenAddGarmentModal() {
    setActiveModal("add-garment-modal");
  }

  function handleOpenRegisterModal() {
    setActiveModal("register-modal");
  }

  function handleOpenLoginModal() {
    setActiveModal("login-modal");
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

  function handleAddItemSubmit(inputValues) {
    addItem(inputValues)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch(console.error);
  }

  function handleDeleteItemSubmit(item) {
    deleteItem(item._id)
      .then(() => {
        getItems()
          .then((items) => {
            setClothingItems(items.reverse());
          })
          .catch(console.error);
        handleCloseModal();
      })
      .catch(console.error);
  }

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }

    // TODO - handle JWT

    getUserInfo(jwt)
      .then(({ name, avatar }) => {
        setIsLoggedIn(true);
        setUserData({ name, avatar });
        navigate("/");
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items.reverse());
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTempUnit, handleTempUnitChange }}
    >
      <CurrentUserContext.Provider value={{ userData, isLoggedIn }}>
        <div className="app">
          <Header
            weatherData={weatherData}
            handleOpenAddGarmentModal={handleOpenAddGarmentModal}
            handleOpenLoginModal={handleOpenLoginModal}
            handleOpenRegisterModal={handleOpenRegisterModal}
          />
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                  handleOpenItemModal={handleOpenItemModal}
                />
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    clothingItems={clothingItems}
                    handleOpenItemModal={handleOpenItemModal}
                    handleOpenAddGarmentModal={handleOpenAddGarmentModal}
                  />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
          <Footer />
          <ItemModal
            card={selectedCard}
            isOpen={activeModal === "item-modal"}
            onXClick={handleCloseModal}
            handleDeleteItemSubmit={handleDeleteItemSubmit}
          />
          <AddItemModal
            isOpen={activeModal === "add-garment-modal"}
            handleCloseModal={handleCloseModal}
            handleAddItemSubmit={handleAddItemSubmit}
          />
          <LoginModal
            isOpen={activeModal === "login-modal"}
            handleCloseModal={handleCloseModal}
            handleLogin={handleLogin}
          />
          <RegisterModal
            isOpen={activeModal === "register-modal"}
            handleCloseModal={handleCloseModal}
            handleRegistration={handleRegistration}
          />
        </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
