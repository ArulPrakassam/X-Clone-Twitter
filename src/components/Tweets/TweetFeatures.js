import { useState, useRef } from "react";
import { useGlobalContext } from "../../context";
import { AiTwotoneHeart } from "../../Icons";

const TweetFeatures = ({ icon, hoverColor, title, color, count }) => {
  const [set, setSet] = useState(false);

  const countRef = useRef();
  const { formatToUnits, formatToNumbers } = useGlobalContext();

  const handlerCount = () => {
    setSet(!set);
    if (title === "Repost" || title === "Like") {
      if (!set) {
        const toNumbers =
          Number(formatToNumbers(countRef.current.textContent)) + 1;
        countRef.current.textContent = formatToUnits(toNumbers);
      } else {
        const toNumbers =
          Number(formatToNumbers(countRef.current.textContent)) - 1;

        //to avoid 0 we are going this
        let temp = formatToUnits(toNumbers);
        if (temp === "0") {
          temp = "";
        }
        countRef.current.textContent = temp || "";
      }
    }
  };

  return (
    <div
      className={hoverColor}
      onClick={handlerCount}
      title={title}
      style={set ? { color: color } : {}}
    >
      <span className="feature-icon">
        {set && title === "Like" ? <AiTwotoneHeart /> : icon}
      </span>
      <span className="feature-count" ref={countRef}>
        {(count && formatToUnits(count)) || ""}
      </span>
    </div>
  );
};
export default TweetFeatures;
