import avatar from "../../assets/terrence-avatar.svg";
import "./sidebar.css";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__row">
        <img
          src={avatar}
          alt="Terrence Tegegne's avatar"
          className="header__avatar sidebar__avatar"
        />
        <p className="header__username sidebar__username">Terrence Tegegne</p>
      </div>
    </aside>
  );
}

export default SideBar;
