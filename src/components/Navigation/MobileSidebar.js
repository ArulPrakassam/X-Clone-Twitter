import { useEffect } from "react";
import { AiOutlinePlus, RiMoonClearLine, BsSun } from "../../Icons";
import { mobileNavLinks } from "../../data/sideNavbar";
import { NavLink, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "../../styles/basic.css";
import "../../styles/Components/desktop-sidebar.css";
import "../../styles/Components/mobile-sidebar.css";

const MobileSidebar = () => {
  const { openAsidebar, setOpenAsidebar, lightMode, setLightMode } =
    useGlobalContext();

  const location = useLocation();
  const subPath = location.pathname.split("/")[2];

  //used to prevent scrolling when menu modal is opened
  useEffect(() => {
    document.documentElement.style.overflow = openAsidebar ? "hidden" : "unset";
  }, [openAsidebar]);

  return (
    <section className="mobile-sidebar">
      <div
        className={openAsidebar ? "mobile-sidebar-background" : ""}
        onClick={() => setOpenAsidebar(false)}
      >
        <aside
          className="mobile-asidebar"
          style={{ transform: openAsidebar ? "translatex(0)" : "" }}
        >
          <div className="mobile-asidebar-header">
            {/* profile box */}
            <div className="profile-box">
              <div className="profile-img">
                <a
                  href="/ArulPrakassam"
                  onLoad={(e) => (e.currentTarget.style.background = "none")}
                >
                  <img
                    src="https://res.cloudinary.com/dhxjitf9n/image/upload/v1698425446/X%20clone/arul-prakassam.jpg"
                    alt="Arul Prakassam"
                  />
                </a>
                <span>
                  <AiOutlinePlus />
                </span>
              </div>

              <div className="profile-info">
                <a href="/ArulPrakassam">
                  <p id="name">Arul Prakassam G</p>
                </a>
                <a href="/ArulPrakassam">
                  <p id="username">@ArulPrakassam</p>
                </a>
                <div className="social-followers">
                  <p>
                    44 <span>Following</span>
                  </p>
                  <p>
                    8 <span>Followers</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* navlinks */}
          <ul className="navlinks">
            {mobileNavLinks.map((item, index) => {
              const { icon, text, url } = item;
              return (
                <li key={index} onClick={() => setOpenAsidebar(false)}>
                  <NavLink
                    to={url}
                    className="navlink"
                    style={{ fontWeight: "500" }}
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
                    <p className="nav-text">{text}</p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {/* theme change button */}
          <div className="theme-change">
            <button
              className="theme-change-button"
              onClick={() => {
                setLightMode(!lightMode);
                localStorage.setItem("light-mode", !lightMode);
              }}
            >
              {lightMode ? <BsSun /> : <RiMoonClearLine />}
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default MobileSidebar;
