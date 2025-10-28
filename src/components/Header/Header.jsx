import wtwrlogo from "../../assets/wtwr-logo.svg";
import avatar from "../../assets/terrence-avatar.svg";
import "./Header.css";

import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";

function Header({ weatherData }) {
  const now = new Date();
  const dateStr = now.toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__side">
        <img src={wtwrlogo} alt="wtwr logo" className="header__logo" />
        <p className="header__place">
          <time dateTime={now} className="header__datetime">
            {dateStr}
          </time>
          , {weatherData.city}
        </p>
      </div>
      <div className="header__side">
        <ToggleSwitch />
        <button className="header__add-clothes-btn">+ Add clothes</button>
        <p className="header__username">Terrence Tegegne</p>
        <img
          src={avatar}
          alt="Terrence Tegegne's avatar"
          className="header__avatar"
        />
      </div>
    </header>
  );
}

export default Header;
