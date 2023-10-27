import { mobileMenu } from "../../data/sideNavbar";
import { useGlobalContext } from "../../context";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/Components/mobile-menu.css";

const MobileMenu = () => {
  const { showContent } = useGlobalContext();
  const location = useLocation();
  const subPath = location.pathname.split("/")[2];
  return (
    <section
      className="mobile-menu"
      style={{ transform: showContent && "translateY(0)" }}
    >
      <ul className="mobile-menu-icons">
        {mobileMenu.map((item, index) => {
          const { icon, url } = item;
          return (
            <li key={index}>
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
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MobileMenu;
