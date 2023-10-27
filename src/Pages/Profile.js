import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Outlet } from "react-router-dom";
import { headerData } from "../data/header-data";
import {
  HiOutlineLocationMarker,
  BiLinkAlt,
  MdCalendarToday,
  BiDotsHorizontalRounded,
  HiOutlineMail,
  MdOutlineNotificationsActive,
  MdOutlineNotificationsNone,
} from "../Icons";
import Header from "../components/Header";
import LatestTrending from "../components/LatestTrending/LatestTrending";
import SearchBar from "../components/LatestTrending/SearchBar";
import WhatIsHappening from "../components/LatestTrending/WhatIsHappening";
import WhoToFollow from "../components/LatestTrending/WhoToFollow";
import FloatingMessageSection from "../components/Messages/FloatingMessageSection";
import { HeaderContent } from "../components/Header";
import { BackArrow, HeaderText } from "../components/Chunks/Chunks";
import MobileTweetButton from "../components/Tweets/MobileTweetButton";
import "../styles/basic.css";
import "../styles/Pages/profile.css";
import "../styles/Header/header.css";

const Profile = () => {
  const { windowSize, formatToUnits, postsData } = useGlobalContext();

  const [selected, setSelected] = useState(0);

  const location = useLocation();
  const pathValue = location.pathname.split("/")[2];

  const handler = (id) => {
    setSelected(id);
  };

  useEffect(() => {
    document.title = "Arul Prakassam G (@ArulPrakassam) / X";
  }, []);

  useEffect(() => {
    if (location.pathname === "/ArulPrakassam") {
      setSelected(0);
    } else if (pathValue === "with_replies") {
      setSelected(1);
    } else if (pathValue === "media") {
      setSelected(2);
    } else if (pathValue === "likes") {
      setSelected(3);
    }
  }, [pathValue]);

  return (
    <>
      <section className="section-container profile-section">
        <Header data="">
          <div className="header-top">
            <div className="header-top-left">
              <BackArrow />
              <HeaderText text="Arul Prakassam G">
                <p className="posts-count">
                  {formatToUnits(postsData.length)} posts
                </p>
              </HeaderText>
            </div>
          </div>
        </Header>

        {/* profile details */}
        <section className="profile-details">
          {/* banner */}
          <div
            className="banner-img"
            onLoad={(e) => {
              e.currentTarget.style.background = "none";
              e.currentTarget.style.minHeight = "auto";
            }}
          >
            <img
              src="https://res.cloudinary.com/dhxjitf9n/image/upload/v1698425692/X%20clone/banner.jpg"
              alt="banner"
              width="600"
              height="200"
            />
          </div>
          {/* profile photo */}
          <ProfilePhotoBox />

          {/* profile info */}
          <ProfileInfoBox />
        </section>

        {/*profile navigation links  */}
        <div className="profile-navigation-links">
          {headerData.profile.map((item, index) => {
            return (
              <HeaderContent
                key={index}
                id={index}
                {...item}
                selected={selected}
                handler={handler}
              />
            );
          })}
        </div>

        <section className="profile-content">
          <Outlet />
        </section>
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

const ProfilePhotoBox = () => {
  const [follow, setFollow] = useState(false);
  const [notify, setNotify] = useState(false);
  return (
    <div className="profile-photo-box">
      <div
        className="photo"
        onLoad={(e) => (e.currentTarget.style.minHeight = "auto")}
      >
        <img
          src="https://res.cloudinary.com/dhxjitf9n/image/upload/v1698425446/X%20clone/arul-prakassam.jpg"
          alt="Arul Prakassam"
        />
      </div>
      <div className="profile-btns">
        <button type="button" title="More" className="profile-btn">
          <BiDotsHorizontalRounded />
        </button>
        {follow && (
          <>
            <button type="button" title="Message" className="profile-btn">
              <HiOutlineMail />
            </button>
            {notify ? (
              <button
                type="button"
                title="Turn on notifications"
                className="profile-btn"
                onClick={() => setNotify(false)}
              >
                <MdOutlineNotificationsActive />
              </button>
            ) : (
              <button
                type="button"
                title="Turn on notifications"
                className="profile-btn"
                onClick={() => setNotify(true)}
              >
                <MdOutlineNotificationsNone />
              </button>
            )}
          </>
        )}
        <button
          type="button"
          className={`${follow ? "following-btn follow-btn" : "follow-btn"}`}
          onClick={() => {
            setFollow(!follow);
            setNotify(false);
          }}
          onMouseOver={(e) => {
            if (follow) {
              e.currentTarget.textContent = "Unfollow";
            }
          }}
          onMouseLeave={(e) => {
            if (follow) {
              e.currentTarget.textContent = "Following";
            }
          }}
        >
          {follow ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};

const ProfileInfoBox = () => {
  return (
    <div className="profile-info-box">
      <div className="profile-info-name">
        <p className="name">Arul Prakassam G</p>
        <p className="username">@ArulPrakassam</p>
      </div>
      <div className="profile-bio">
        <div className="bio-text">
          <p>
            Front-end web Developer with some Back-end knowledge & Content
            Creator{" "}
            <a href="https://switch2knowledge.com/" id="link">
              switch2knowledge.com
            </a>
          </p>
        </div>
        <div className="bio-links">
          <p id="location">
            <span>
              <HiOutlineLocationMarker />
            </span>
            India
          </p>
          <p id="link">
            <span>
              <BiLinkAlt />
            </span>
            <a href="https://arulprakassam.github.io/">
              arulprakassam.github.io
            </a>
          </p>
          <p id="joined">
            <span>
              <MdCalendarToday />
            </span>
            Joined July 2020
          </p>
        </div>
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
  );
};

export default Profile;
