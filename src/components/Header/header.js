import React from "react";

import "./header.css";

const Header = ({ nameChat, switchStyle, styleDark }) => {
  return (
    <div className="chat-header">
      <div className="left-header">Hi, {nameChat}</div>
      <div className="right-header">
        <button onClick={() => switchStyle()}>
          {styleDark ? "дневной режим" : "ночной режим"}
        </button>
      </div>
    </div>
  );
};

export default Header;
