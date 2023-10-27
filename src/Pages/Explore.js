import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { headerData } from "../data/header-data";
import Header from "../components/Header";
import LatestTrending from "../components/LatestTrending/LatestTrending";
import WhoToFollow from "../components/LatestTrending/WhoToFollow";
import SearchBar from "../components/LatestTrending/SearchBar";
import { BsGear } from "../Icons";
import { useGlobalContext } from "../context";
import { HeaderIcons, ProfileImg } from "../components/Chunks/Chunks";
import FloatingMessageSection from "../components/Messages/FloatingMessageSection";
import MobileTweetButton from "../components/Tweets/MobileTweetButton";
import "../styles/basic.css";
import "../styles/Components/latest-trending.css";
import "../styles/Pages/explore.css";
import "../styles/Header/header.css";

const Explore = () => {
  const { windowSize } = useGlobalContext();

  const [selected, setSelected] = useState(0);

  const location = useLocation();
  const pathValue = location.pathname.split("/")[3];

  const handler = (id) => {
    setSelected(id);
  };

  useEffect(() => {
    document.title = "Explore / X";
  }, []);

  useEffect(() => {
    if (location.pathname === "/explore") {
      setSelected(0);
    } else if (pathValue === "for-you") {
      setSelected(0);
    } else if (pathValue === "trending") {
      setSelected(1);
    } else if (pathValue === "news") {
      setSelected(2);
    } else if (pathValue === "sports") {
      setSelected(3);
    } else if (pathValue === "entertainment") {
      setSelected(4);
    }
  }, [pathValue]);

  return (
    <>
      <section className="section-container explore-section">
        <Header selected={selected} data={headerData.explore} handler={handler}>
          <div className="header-top">
            {windowSize > 500 ? (
              <SearchBar />
            ) : (
              <>
                <ProfileImg />
                <SearchBar />
              </>
            )}
            <HeaderIcons icons={[<BsGear />]} />
          </div>
        </Header>

        <div className="explore-content">
          <Outlet />
        </div>
      </section>
      {windowSize >= 1081 && (
        <>
          <LatestTrending>
            <WhoToFollow />
          </LatestTrending>
          <FloatingMessageSection />
        </>
      )}
      {windowSize <= 500 && <MobileTweetButton />}
    </>
  );
};

export default Explore;
