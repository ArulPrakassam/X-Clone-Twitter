import SearchBar from "./LatestTrending/SearchBar";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import "../styles/Header/header-content.css";

const Header = ({ selected, data, searchbar, handler, children }) => {
  const { showContent } = useGlobalContext();

  return (
    <header
      className="section-header sticky-header"
      style={{
        transform: showContent ? "translateY(0)" : "",
      }}
    >
      {children}
      {data && (
        <div className="header-content">
          {data.map((item, index) => {
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
      )}
      {searchbar && <SearchBar placeholder="Search Direct Messages" />}
    </header>
  );
};

const HeaderContent = ({ id, name, url, selected, handler }) => {
  return (
    <NavLink to={url} className="header-title" onClick={() => handler(id)}>
      <h2
        style={
          Number(selected) === id
            ? {
                fontWeight: "700",
                color: "var(--secondary)",
              }
            : {}
        }
      >
        {name}
      </h2>
      {Number(selected) === id && <div className="underline"></div>}
    </NavLink>
  );
};

export default Header;
export { HeaderContent };
