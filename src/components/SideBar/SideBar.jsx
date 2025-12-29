import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SideBar.css";

function SideBar({ handleOpenEditProfileModal }) {
  const { userData } = useContext(CurrentUserContext);

  return (
    <aside className="sidebar">
      <div className="sidebar__row">
        <img
          src={userData.avatar}
          alt="Your avatar"
          className="header__avatar sidebar__avatar"
        />
        <p className="header__username sidebar__username">{userData.name}</p>
      </div>
      <button
        onClick={handleOpenEditProfileModal}
        className="sidebar__changeprofile"
      >
        Change profile data
      </button>
      <button className="sidebar__logout">Log out</button>
    </aside>
  );
}

export default SideBar;
