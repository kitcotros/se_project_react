import wtwrlogo from "../../assets/wtwr-logo.svg";
import avatar from "../../assets/terrence-avatar.svg";
import "./Header.css";

function Header() {
  const now = new Date();
  const dateStr = now.toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={wtwrlogo} alt="wtwr logo" className="header__logo" />
      <p className="header__place">
        <time dateTime={now} className="header__datetime">
          {dateStr}
        </time>
        , New York
      </p>
      <button className="header__add-clothes-btn">+ Add clothes</button>
      <p className="header__username">Terrence Tegegne</p>
      <img
        src={avatar}
        alt="Terrence Tegegne's avatar"
        className="header__avatar"
      />
    </header>
  );
}

export default Header;
