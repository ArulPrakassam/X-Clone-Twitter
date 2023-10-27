import { useState } from "react";
import { RiMailAddLine, HiOutlineChevronDoubleDown } from "../../Icons";
import { HeaderIcons, HeaderText } from "../Chunks/Chunks";
import MessagesContent from "./MessagesContent";
import "../../styles/basic.css";
import "../../styles/Pages/messages.css";
import "../../styles/Components/floating-message-section.css";

const FloatingMessageSection = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section
      className="floating-message-section"
      style={{
        transform: showMessage ? "translateY(0%)" : "translateY(85%)",
      }}
    >
      <div
        className="floating-message-header"
        onClick={() => setShowMessage(!showMessage)}
      >
        <div className="header-top">
          <HeaderText text="Messages" />

          <HeaderIcons
            icons={[
              <RiMailAddLine />,
              <HiOutlineChevronDoubleDown
                style={{ transform: showMessage ? "rotate(180deg)" : "" }}
              />,
            ]}
          />
        </div>
      </div>

      <div className="messages-content">
        <MessagesContent />
      </div>
    </section>
  );
};

export default FloatingMessageSection;
