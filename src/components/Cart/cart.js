import React from "react";

import "./cart.css";

const Cart = ({ mess, setMessages }) => {
  const {
    id,
    message,
    author: { name, avatar },
    time,
  } = mess;

  return (
    <div className="row cart-mess">
      <div className="user-avatar ">
        <img src={avatar} alt="" />
      </div>
      <div className="block-info">
        <div className="user-time">
          <span className="user-name">{name}</span>
          <span className="user-time">{time}</span>
        </div>
        <div className="message">{message}</div>
        <div className="delete-message">
          <button 
            type="button"
            className="delete-btn"
            onClick={() => setMessages(id)}
          > 
            удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
