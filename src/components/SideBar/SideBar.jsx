import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SideBar.css";

function SideBar({ handleOpenEditProfileModal, handleLogout }) {
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
      <div className="sidebar__group">
        <button
          onClick={handleOpenEditProfileModal}
          className="sidebar__changeprofile"
        >
          Change profile data
        </button>
        <button onClick={handleLogout} className="sidebar__logout">
          Log out
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
