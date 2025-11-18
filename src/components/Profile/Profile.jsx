import SideBar from "../Sidebar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  clothingItems,
  handleOpenItemModal,
  handleOpenAddGarmentModal,
}) {
  return (
    <main className="profile">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        handleOpenItemModal={handleOpenItemModal}
        handleOpenAddGarmentModal={handleOpenAddGarmentModal}
      />
    </main>
  );
}

export default Profile;
