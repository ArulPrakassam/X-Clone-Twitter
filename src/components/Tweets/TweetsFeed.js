import { tweetIcons } from "../../data/tweetIcons";
import { useEffect, useRef, createRef } from "react";
import { AiOutlineRetweet, BiDotsHorizontalRounded } from "../../Icons";
import TweetFeatures from "./TweetFeatures";
import { useGlobalContext } from "../../context";
import "../../styles/Components/tweets-feed.css";

const TweetsFeed = ({ data }) => {
  const { superText } = useGlobalContext();
  const refImageArray = useRef([]);
  const refProfileImageArray = useRef([]);
  refProfileImageArray.current = data.map(() => createRef());
  refImageArray.current = data.map(() => createRef());

  //for lazy loading of images
  useEffect(() => {
    const loadImage = (img) => {
      const src = img.getAttribute("data-src");
      const profileSrc = img.getAttribute("data-profileSrc");
      if (src) {
        img.src = src;
        img.parentElement.classList.add("loaded");
      } else if (profileSrc) {
        img.src = profileSrc;
      } else {
        return;
      }
    };
    const imgOptions = {
      threshold: 0,
      // rootMargin: "0px 0px 300px 0px",
    };

    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          loadImage(entry.target);
          imgObserver.unobserve(entry.target);
        }
      });
    }, imgOptions);

    refProfileImageArray.current.forEach((image) => {
      if (image.current) {
        imgObserver.observe(image.current);
      }
    });

    refImageArray.current.forEach((image) => {
      if (image.current) {
        imgObserver.observe(image.current);
      }
    });
  }, []);

  return (
    <section className="tweets-container">
      {data.map((item, index) => {
        const {
          description,
          urlToImage,
          time,
          title,
          name,
          picture,
          engage,
          reposted,
          alt,
          username,
        } = item;

        return (
          <div className="single-tweet-wrapper" key={index}>
            {reposted && (
              <div className="you-reposted">
                <p>
                  <span>
                    <AiOutlineRetweet />
                  </span>
                  You reposted
                </p>
              </div>
            )}
            <article className="single-tweet">
              <div
                className="profile-img"
                onLoad={(e) => (e.currentTarget.style.background = "none")}
              >
                <img
                  src=""
                  alt={name}
                  ref={refProfileImageArray.current[index]}
                  data-profileSrc={picture}
                />
              </div>
              <div className="tweet-content">
                <div className="tweet-account-wrapper">
                  <div className="tweet-account">
                    <p id="name">{name}</p>
                    <div className="tweet-account-details">
                      <p id="username">@{username ? username : name}</p>
                      <p id="time">. {time}</p>
                    </div>
                  </div>
                  <span className="tweet-options" title="More">
                    <BiDotsHorizontalRounded />
                  </span>
                </div>

                <div className="tweet-info">
                  <p
                    dangerouslySetInnerHTML={{ __html: superText(description) }}
                  ></p>
                </div>
                {urlToImage && (
                  <div className="tweet-content-img">
                    <img
                      src=""
                      alt={alt ? alt : title}
                      ref={refImageArray.current[index]}
                      data-src={urlToImage}
                      width="300"
                      height="200"
                    />
                  </div>
                )}
                <div className="tweet-features">
                  {tweetIcons.map((item, index) => {
                    return (
                      <TweetFeatures
                        key={index}
                        {...item}
                        count={engage[item.title]}
                      />
                    );
                  })}
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </section>
  );
};

export default TweetsFeed;
