import React from "react";

import "./content.css";

import Cart from "../Cart";

const Content = ({ messages, setMessages }) => {
  return (
    <div className="content">
      {messages.map((mess) => {
        return <Cart key={mess.id} mess={mess} setMessages={setMessages}  />;
      })}
    </div>
  );
};

export default Content;
