import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
import { headerData } from "../data/header-data";
import LatestTrending from "../components/LatestTrending/LatestTrending";
import SearchBar from "../components/LatestTrending/SearchBar";
import WhatIsHappening from "../components/LatestTrending/WhatIsHappening";
import WhoToFollow from "../components/LatestTrending/WhoToFollow";
import Header from "../components/Header";
import {
  HeaderIcons,
  ProfileImg,
  HeaderText,
} from "../components/Chunks/Chunks";
import { BsGear } from "../Icons";
import FloatingMessageSection from "../components/Messages/FloatingMessageSection";
import MobileTweetButton from "../components/Tweets/MobileTweetButton";
import "../styles/basic.css";
import "../styles/Pages/notifications.css";
import "../styles/Header/header.css";

const Notifications = () => {
  const { windowSize } = useGlobalContext();
  const [selected, setSelected] = useState(0);

  const location = useLocation();
  const pathValue = location.pathname.split("/")[2];

  const handler = (id) => {
    setSelected(id);
  };

  useEffect(() => {
    document.title = "Notifications / X";
  }, []);

  useEffect(() => {
    if (location.pathname === "/notifications") {
      setSelected(0);
    } else if (pathValue === "verified") {
      setSelected(1);
    } else if (pathValue === "mentions") {
      setSelected(2);
    }
  }, [pathValue]);

  return (
    <>
      <section className="section-container notifications-section">
        <Header
          selected={selected}
          data={headerData.notifications}
          handler={handler}
        >
          <div className="header-top">
            {windowSize > 500 ? (
              <HeaderText text="Notifications" />
            ) : (
              <div className="header-top-left">
                <ProfileImg />
                <HeaderText text="Notifications" />
              </div>
            )}
            <HeaderIcons icons={[<BsGear />]} />
          </div>
        </Header>

        <div className="notifications-content">
          <Outlet />
        </div>
      </section>
      {windowSize >= 1081 && (
        <>
          <LatestTrending>
            <SearchBar />
            <WhatIsHappening />
            <WhoToFollow />
          </LatestTrending>
          <FloatingMessageSection />
        </>
      )}
      {windowSize <= 500 && <MobileTweetButton />}
    </>
  );
};

export default Notifications;
