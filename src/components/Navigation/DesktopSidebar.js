import { NavLink, Link, useLocation } from "react-router-dom";
import { desktopNavLinks } from "../../data/sideNavbar";
import logo from "../../assets/x-twitter-logo.png";
import {
  BiDotsHorizontalRounded,
  FaFeatherAlt,
  HiPlusSm,
  RiMoonClearLine,
  BsSun,
} from "../../Icons";
import { useGlobalContext } from "../../context";
import "../../styles/basic.css";
import "../../styles/Components/desktop-sidebar.css";

const DesktopSidebar = () => {
  const { windowSize, lightMode, setLightMode } = useGlobalContext();

  const location = useLocation();
  const subPath = location.pathname.split("/")[2];
  return (
    <aside className="desktop-asidebar">
      <NavLink to="/home" className="logo">
        <img
          src={logo}
          alt="x-twitter logo"
          className={`${lightMode && "invert-img"}`}
        />
      </NavLink>
      <div className="desktop-asidebar-container">
        <nav className="side-navbar">
          <ul className="navlinks">
            {desktopNavLinks.map((item, index) => {
              const { icon, text, url } = item;
              return (
                <li key={index}>
                  <NavLink
                    to={url}
                    className="navlink"
                    style={({ isActive }) => {
                      return { fontWeight: isActive ? "700" : "400" };
                    }}
                    end={
                      location.pathname.includes("/explore")
                        ? false
                        : subPath === "with_replies"
                        ? false
                        : subPath === "media"
                        ? false
                        : subPath === "likes"
                        ? false
                        : true
                    }
                  >
                    <span className="nav-icon">{icon}</span>
                    {windowSize > 1301 && <p className="nav-text">{text}</p>}
                  </NavLink>
                </li>
              );
            })}
            <li>
              <button
                className="navlink"
                onClick={() => {
                  setLightMode(!lightMode);
                  localStorage.setItem("light-mode", !lightMode);
                }}
                style={{
                  border: "none",
                  background: "transparent",
                  fontWeight: "400",
                  cursor: "pointer",
                }}
              >
                <span className="nav-icon">
                  {lightMode ? <BsSun /> : <RiMoonClearLine />}
                </span>
                {windowSize > 1301 && <p className="nav-text">Switch Theme</p>}
              </button>
            </li>
          </ul>
        </nav>
        <div className="post-tweet-button">
          <Link to="/compose-tweet" state={location}>
            <button type="button" className="post-tweet-btn relative-btn">
              {windowSize > 1301 ? (
                "Post"
              ) : (
                <>
                  <span className="plus-icon">
                    <HiPlusSm />
                  </span>
                  <span>
                    <FaFeatherAlt />
                  </span>
                </>
              )}
            </button>
          </Link>
        </div>

        <div className="profile-box">
          <div
            className="profile-img"
            onLoad={(e) => (e.currentTarget.style.background = "none")}
          >
            <img
              src="https://res.cloudinary.com/dhxjitf9n/image/upload/v1698425446/X%20clone/arul-prakassam.jpg"
              alt="Arul Prakassam"
            />
          </div>
          {windowSize > 1301 && (
            <>
              <div className="profile-info">
                <p id="name">Arul Prakassam G</p>
                <p id="username">@ArulPrakassam</p>
              </div>
              <span>
                <BiDotsHorizontalRounded />
              </span>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
