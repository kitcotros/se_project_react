import SideBar from "../Sidebar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  clothingItems,
  handleOpenItemModal,
  handleOpenAddGarmentModal,
  handleOpenEditProfileModal,
  handleLogout,
  handleCardLike,
}) {
  return (
    <main className="profile">
      <SideBar
        handleOpenEditProfileModal={handleOpenEditProfileModal}
        handleLogout={handleLogout}
      />
      <ClothesSection
        clothingItems={clothingItems}
        handleOpenItemModal={handleOpenItemModal}
        handleOpenAddGarmentModal={handleOpenAddGarmentModal}
        handleCardLike={handleCardLike}
      />
    </main>
  );
}

export default Profile;
