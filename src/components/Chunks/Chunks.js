import { BsArrowLeft } from "../../Icons";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";

const HeaderIcons = ({ icons }) => {
  return (
    icons && (
      <div className="header-top-icons">
        {icons.map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
      </div>
    )
  );
};

const HeaderText = ({ text, children }) => {
  return (
    <>
      <div className="title">
        <h1>{text}</h1>
        {children}
      </div>
    </>
  );
};

const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className="back-arrow" onClick={() => navigate(-1)}>
        <BsArrowLeft />
      </button>
    </>
  );
};

const ProfileImg = () => {
  const { setOpenAsidebar } = useGlobalContext();
  return (
    <div
      className="profile-img"
      onLoad={(e) => (e.currentTarget.style.background = "none")}
    >
      <img
        src="https://pbs.twimg.com/profile_images/1527562596475613184/A8beyBaP_200x200.jpg"
        alt="profile"
        onClick={() => {
          setOpenAsidebar(true);
        }}
      />
    </div>
  );
};

export { HeaderIcons, HeaderText, BackArrow, ProfileImg };
