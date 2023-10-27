import { useEffect, useState } from "react";
import "../../styles/Components/latest-trending.css";

const LatestTrending = ({ children }) => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  useEffect(() => {
    const scrolling = () => {
      const latestTrending = document.querySelector(".latest-trending");
      if (window.scrollY > prevScrollY) {
        if (
          window.scrollY >=
          latestTrending.offsetTop +
            latestTrending.clientHeight -
            window.innerHeight
        ) {
          latestTrending.style.position = "sticky";
          latestTrending.style.top = `${
            latestTrending.getBoundingClientRect().top
          }px`;
        }
      }

      setPrevScrollY(window.scrollY);
    };
    window.addEventListener("scroll", scrolling);
    return () => window.removeEventListener("scroll", scrolling);
  }, [prevScrollY]);

  return (
    <>
      <section className="latest-trending">{children}</section>
    </>
  );
};

export default LatestTrending;
