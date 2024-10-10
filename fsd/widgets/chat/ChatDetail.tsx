"use client";

import React, { useState } from "react";
import { List, Avatar, Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { useParams } from "next/navigation";
import { enCodeUrl } from "@/fsd/shared/UrlHelpers/UrlHepler";
import style from "./ui/chatDetail.module.scss";

const ChatDetail = () => {
  const { id, chatName } = useParams();
  const chatNameDecode = enCodeUrl(chatName);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: chatNameDecode,
      avatar: "https://i.pravatar.cc/300?img=1",
      content: "Привет! Как дела?",
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: "You",
      avatar: "https://i.pravatar.cc/300?img=3",
      content: inputValue,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  return (
    <div className={style.wrapperDetail}>
      <h2 className="h2">Чат с Пользователем: {chatNameDecode}</h2>
      <List
        className={style.listContainer}
        dataSource={messages}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              className=""
              avatar={<Avatar src={item.avatar} />}
              title={item.sender}
              description={item.content}
            />
          </List.Item>
        )}
      />
      <div className={style.inputContainer}>
        <Input
          className="inputBase"
          placeholder="Введите сообщение..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleSendMessage}
        />
        <Button
          type="primary"
          className="defaultButton"
          icon={<SendOutlined />}
          onClick={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default ChatDetail;
