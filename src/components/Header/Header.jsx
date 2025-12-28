import wtwrlogo from "../../assets/wtwr-logo.svg";
import avatar from "../../assets/terrence-avatar.svg";
import "./Header.css";

import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  weatherData,
  handleOpenAddGarmentModal,
  handleOpenLoginModal,
  handleOpenRegisterModal,
}) {
  const now = new Date();
  const dateStr = now.toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { userData, isLoggedIn } = useContext(CurrentUserContext);

  if (isLoggedIn) {
    return (
      <header className="header">
        <div className="header__side">
          <Link to="/">
            <img src={wtwrlogo} alt="wtwr logo" className="header__logo" />
          </Link>
          <p className="header__place">
            <time dateTime={now} className="header__datetime">
              {dateStr}
            </time>
            , {weatherData.city}
          </p>
        </div>
        <div className="header__side">
          <ToggleSwitch />
          <Link className="header__link" to="/profile">
            <p className="header__username">{userData.username}</p>
            <img
              src={userData.avatar}
              alt="Your avatar"
              className="header__avatar"
            />
          </Link>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div className="header__side">
          <Link to="/">
            <img src={wtwrlogo} alt="wtwr logo" className="header__logo" />
          </Link>
          <p className="header__place">
            <time dateTime={now} className="header__datetime">
              {dateStr}
            </time>
            , {weatherData.city}
          </p>
        </div>
        <div className="header__side">
          <ToggleSwitch />
          <button onClick={handleOpenRegisterModal} className="header__button">
            Sign Up
          </button>
          <button onClick={handleOpenLoginModal} className="header__button">
            Log in
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
