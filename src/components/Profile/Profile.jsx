import SideBar from "../Sidebar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile() {
  return (
    <main className="profile">
      <SideBar />
      <ClothesSection />
    </main>
  );
}

export default Profile;
