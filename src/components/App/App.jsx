import { useState, useEffect } from "react";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

import {
  getItems,
  addItem,
  deleteItem,
  getUserInfo,
  editUserInfo,
  addCardLike,
  removeCardLike,
} from "../../utils/api.js";
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
  const [userData, setUserData] = useState({ name: "", avatar: "", _id: "" });

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

  function handleEditProfileSubmit(values) {
    const token = localStorage.getItem("jwt");

    const userData = {};

    if (values.name && values.name.trim() !== "") {
      userData.name = values.name;
    }

    if (values.avatar && values.avatar.trim() !== "") {
      userData.avatar = values.avatar;
    }

    editUserInfo(token, userData)
      .then((data) => {
        setUserData(data);
        handleCloseModal();
      })
      .catch(console.error);
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    navigate("/");
  }

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

  function handleOpenEditProfileModal() {
    setActiveModal("edit-profile-modal");
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
    const token = localStorage.getItem("jwt");

    addItem(inputValues, token)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .then(() => {
        getItems().then((items) => {
          setClothingItems(items);
        });
      })
      .catch(console.error);
  }

  function handleDeleteItemSubmit(item) {
    const token = localStorage.getItem("jwt");

    deleteItem(item._id, token)
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

  const handleCardLike = (card) => {
    const token = localStorage.getItem("jwt");
    const isLiked = card.likes.includes(userData._id);
    // Check if this card is not currently liked
    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        // the first argument is the card's id
        addCardLike(card._id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) =>
                item._id === card._id ? updatedCard.data : item
              )
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        // the first argument is the card's id
        removeCardLike(card._id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) =>
                item._id === card._id ? updatedCard.data : item
              )
            );
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }

    // TODO - handle JWT

    getUserInfo(jwt)
      .then(({ name, avatar, _id }) => {
        setIsLoggedIn(true);
        setUserData({ name, avatar, _id });
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
                  handleCardLike={handleCardLike}
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
                    handleOpenEditProfileModal={handleOpenEditProfileModal}
                    handleLogout={handleLogout}
                    handleCardLike={handleCardLike}
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
          <EditProfileModal
            isOpen={activeModal === "edit-profile-modal"}
            handleCloseModal={handleCloseModal}
            handleEditProfileSubmit={handleEditProfileSubmit}
          />
        </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
