import React, { useState } from "react";

import "./app.css";

import Header from "../Header";
import Content from "../Content";
import ItemAddForm from "../ItemAddForm";

const App = (props) => {
  const database = {
    username: "intocode",
    darkTheme: false,

    messages: [
      {
        id: 1,
        message: "Привет, как дела?",
        author: {
          name: "intocode",
          avatar: "http://intocode.ru/d/react-chat/avatars/admin.jpg",
        },
        time: "11:42",
      },
      {
        id: 2,
        message: "Что больше нравится: React или пирожки?",
        author: {
          name: "adam",
          avatar: "http://intocode.ru/d/react-chat/avatars/adam.jpg",
        },
        time: "11:44",
      },
      {
        id: 3,
        message: "Пирожки!",
        author: {
          name: "html_95",
          avatar: "http://intocode.ru/d/react-chat/avatars/no-avatar.jpg",
        },
        time: "11:50",
      },
      {
        id: 4,
        message: "Подскажите, как можно удалить JavaScript из мозга?",
        author: {
          name: "shovda",
          avatar: "http://intocode.ru/d/react-chat/avatars/no-avatar.jpg",
        },
        time: "13:21",
      },
      {
        id: 5,
        message: "Тоже хотел бы знать",
        author: {
          name: "intocode",
          avatar: "http://intocode.ru/d/react-chat/avatars/admin.jpg",
        },
        time: "13:22",
      },
      {
        id: 6,
        message: "Никак :(",
        author: {
          name: "adam",
          avatar: "http://intocode.ru/d/react-chat/avatars/adam.jpg",
        },
        time: "13:23",
      },
      {
        id: 7,
        message: "В интукод сложные задания. Больше к ним не пойду.",
        author: {
          name: "coronavirus",
          avatar: "http://intocode.ru/d/react-chat/avatars/coronavirus.png",
        },
        time: "14:00",
      },
      {
        id: 8,
        message: "А что еще делать? Карантин продлится до 2032г.",
        author: {
          name: "na_karantine",
          avatar: "http://intocode.ru/d/react-chat/avatars/no-avatar.jpg",
        },
        time: "14:04",
      },
      {
        id: 9,
        message: "свЛайкните последний пост на instagram.com/intocode",
        author: {
          name: "intocode",
          avatar: "http://intocode.ru/d/react-chat/avatars/admin.jpg",
        },
        time: "15:10",
      },
      {
        id: 10,
        message: "Отстань.",
        author: {
          name: "adam",
          avatar: "http://intocode.ru/d/react-chat/avatars/adam.jpg",
        },
        time: "15:12",
      },
      {
        id: 11,
        message: ":(",
        author: {
          name: "intocode",
          avatar: "http://intocode.ru/d/react-chat/avatars/admin.jpg",
        },
        time: "15:13",
      },
    ],
  };

  const [messages, setMessages] = useState(database.messages);
  const [styleDark, setStyle] = useState(database.darkTheme);

  const addMessage = (message) => {
    const time = new Date();

    let getHours, getMinutes, time1, time2;

    getHours = time.getHours();
    getMinutes = time.getMinutes();

    const addZero = (num) => (num <= 9 ? "0" + num : num);

    time1 = addZero(getHours);
    time2 = addZero(getMinutes);

    const id = messages.length + 1;
  
    const newArray = [
      ...messages,
      {
        id,
        message,
        author: {
          name: "saqhan",
          avatar: "http://intocode.ru/d/react-chat/avatars/admin.jpg",
        },
        time: `${time1}:${time2}`,
      },
    ];
    setMessages(newArray);
  };

  const deleteMessage = (checkId) => {
    setMessages((messages) =>
      messages.filter(({ id }) => (id === checkId ? false : true))
    );
  };

  const switchStyle = () => {
    setStyle((setStyle.darkTheme = !setStyle.darkTheme));
  };

  const switchStyleCss = document.getElementsByTagName("body")[0];
  switchStyleCss.className = styleDark ? "darkTheme" : "light";

  return (
    <div className="chat-app">
      <Header
        nameChat={database.username}
        switchStyle={switchStyle}
        styleDark={styleDark}
      />
      <Content messages={messages} setMessages={deleteMessage} />
      <ItemAddForm addMessage={addMessage} />
    </div>
  );
};

export default App;
