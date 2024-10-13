"use client";

import React, { useState } from "react";
import { List, Avatar, Input, Button } from "antd";
import { LeftOutlined, SendOutlined } from "@ant-design/icons";
import { useParams, useRouter } from "next/navigation";
import { enCodeUrl } from "@/fsd/shared/UrlHelpers/UrlHepler";
import style from "./ui/chatDetail.module.scss";

const ChatDetail = () => {
  const { id, chatName } = useParams();
  const router = useRouter();
  const chatNameDecode = enCodeUrl(chatName);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: chatNameDecode,
      avatar: "https://i.pravatar.cc/300?img=1",
      content: "Hi! How are you?",
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
      <div className={style.goBackContainer}>
        <LeftOutlined className={style.iconGoBack} onClick={() => router.back()} />
        <h2 className="h2">User: {chatNameDecode}</h2>
      </div>
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
          placeholder="Input message..."
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
