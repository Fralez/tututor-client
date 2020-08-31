import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import api from "@/src/api";

import { Send } from "@material-ui/icons";

import MessageBubble from "./MessageBubble";

const ChatLog = ({ cableWs, currentUser, selectedUserChannel }) => {
  const { messages } = api();
  const [channelMessages, setChannelMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(() => {
    messages.index(selectedUserChannel.id).then((res) => {
      setChannelMessages(res.data);
    });
  }, [selectedUserChannel]);

  useEffect(scrollToBottom, [channelMessages]);

  useEffect(() => {
    cableWs.onopen = () => {
      cableWs.send(
        JSON.stringify({
          command: "subscribe",
          identifier: JSON.stringify({
            channel: "MessagesChannel",
            channel_id: selectedUserChannel.id,
          }),
        })
      );
    };

    cableWs.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (
        data.identifier &&
        data.identifier.includes("MessagesChannel") &&
        data.message
      ) {
        if (data.message.channel_id == selectedUserChannel.id) {
          setChannelMessages((oldState) => [...oldState, data.message]);
        }
      }
    };

    return () => {
      cableWs.send(
        JSON.stringify({
          command: "unsubscribe",
          identifier: JSON.stringify({
            channel: "MessagesChannel",
            channel_id: selectedUserChannel.id,
          }),
        })
      );
    };
  }, [selectedUserChannel]);

  const handleMessageCreation = async () => {
    if (newMessage) {
      messages.create(newMessage, selectedUserChannel.id);
      setNewMessage("");
    }
  };

  const handleKeyPress = async (event) => {
    try {
      if (event.key && event.key != "Enter") throw new Error();

      handleMessageCreation();
    } catch (error) {}
  };

  return (
    <Log id="chatLog">
      <MessageContainer>
        {channelMessages.map((channelMessage) => (
          <MessageBubble
            key={channelMessage.id}
            sender={currentUser.id == channelMessage.user_id}
          >
            {channelMessage.content}
          </MessageBubble>
        ))}
      </MessageContainer>
      {selectedUserChannel && (
        <ChatMessage>
          <ChatTextField
            aria-label="TextMessage"
            name="TextMessage"
            type="TextMessage"
            placeholder="Escribe un mensaje..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <SendMessageButton onClick={handleMessageCreation}>
            <SendIcon />
          </SendMessageButton>
        </ChatMessage>
      )}
      <div ref={messagesEndRef} />
    </Log>
  );
};

export default ChatLog;

const Log = styled.div`
  ${tw`rounded-md flex flex-col overflow-y-auto`}
  width: -webkit-fill-available;
`;

const MessageContainer = styled.div`
  ${tw`flex flex-col h-auto justify-end m-3 mt-auto`}
  display: flex;
`;

const ChatMessage = styled.div`
  ${tw`w-full self-end flex items-center justify-around bg-white p-3 sticky bottom-0`};
`;

const ChatTextField = styled.input`
  ${tw`w-11/12 text-sm md:text-base rounded-md p-2 h-12 border-solid border border-gray-300`};
`;

const SendMessageButton = styled.button`
  ${tw`ml-1 rounded-full text-white p-3`}
  background-color: ${(props) => props.theme.colors.violetBlue.normal};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const SendIcon = styled(Send)`
  font-size: 1.2rem;
`;
