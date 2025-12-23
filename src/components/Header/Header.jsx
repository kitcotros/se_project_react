import wtwrlogo from "../../assets/wtwr-logo.svg";
import avatar from "../../assets/terrence-avatar.svg";
import "./Header.css";

import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

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

/*
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
        <button
          onClick={handleOpenAddGarmentModal}
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
        <Link className="header__link" to="/profile">
          <p className="header__username">Terrence Tegegne</p>
          <img
            src={avatar}
            alt="Terrence Tegegne's avatar"
            className="header__avatar"
          />
        </Link>
      </div>
    </header>
  );
}
*/

export default Header;
