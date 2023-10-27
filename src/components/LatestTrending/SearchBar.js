import { useRef, useState } from "react";
import { BiSearch, AiFillCloseCircle } from "../../Icons";
const SearchBar = ({ placeholder = "Search" }) => {
  const searchInputRef = useRef();
  const [showCloseBtn, setShowCloseBtn] = useState(false);

  const searchInputHandler = () => {
    if (searchInputRef.current.value) {
      setShowCloseBtn(true);
    } else {
      setShowCloseBtn(false);
    }
  };

  const focusPointIn = () => {
    const searchInput = searchInputRef.current;
    const spans = searchInput.parentNode.querySelectorAll("span");

    if (searchInput.value) {
      setShowCloseBtn(true);
    }
    searchInput.parentNode.style.border = "1px solid rgb(29, 155, 240)";

    spans.forEach((span) => {
      span.style.color = "rgb(29, 155, 240)";
    });
  };
  const focusPointOut = () => {
    const searchInput = searchInputRef.current;
    const spans = searchInput.parentNode.querySelectorAll("span");
    searchInput.parentNode.style.border = "";
    spans.forEach((span) => {
      span.style.color = "";
    });
    setTimeout(() => {
      setShowCloseBtn(false);
    }, 200);
  };
  return (
    <div className="searchbar">
      <div
        className="search-main"
        onClick={(e) => {
          searchInputRef.current.focus();
        }}
      >
        <span className="search-icon">
          <BiSearch />
        </span>
        <input
          type="text"
          className="input-area"
          placeholder={placeholder}
          ref={searchInputRef}
          onChange={searchInputHandler}
          onFocus={focusPointIn}
          onBlur={focusPointOut}
        />
        <span
          className="close-btn"
          onClick={() => {
            searchInputRef.current.value = "";
            setShowCloseBtn(false);
          }}
        >
          {showCloseBtn && <AiFillCloseCircle />}
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
