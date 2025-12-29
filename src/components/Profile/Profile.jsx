import SideBar from "../Sidebar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  clothingItems,
  handleOpenItemModal,
  handleOpenAddGarmentModal,
  handleOpenEditProfileModal,
  handleLogout,
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
      />
    </main>
  );
}

export default Profile;
