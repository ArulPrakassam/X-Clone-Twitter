import { useEffect } from "react";
import FloatingMessageSection from "../components/Messages/FloatingMessageSection";
import { useGlobalContext } from "../context";
import Header from "../components/Header";
import { BackArrow, HeaderText } from "../components/Chunks/Chunks";
import "../styles/basic.css";
import "../styles/Pages/error-page.css";
import "../styles/Header/header.css";

const ErrorPage = () => {
  const { windowSize } = useGlobalContext();

  useEffect(() => {
    document.title = "Page Not Found / X";
  }, []);

  return (
    <>
      <section className="section-container error-page-section">
        {windowSize <= 500 && (
          <Header data="">
            <div className="header-top">
              <div className="header-top-left">
                <BackArrow />
                <HeaderText text="Not Found" />
              </div>
            </div>
          </Header>
        )}
        <div className="error-message">
          <p>Sorry, this page doesn't exist.</p>
        </div>
      </section>
      {windowSize >= 1081 && (
        <>
          <FloatingMessageSection />
        </>
      )}
    </>
  );
};

export default ErrorPage;
