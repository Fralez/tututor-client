import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import { Send } from "@material-ui/icons";

import MessageBubble from "./MessageBubble";

const ChatLog = () => {
  const [message, setMessage] = useState("");

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(scrollToBottom, []);

  return (
    <Log id="chatLog">
      <MessageContainer>
        <MessageBubble sender>
          1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum
          aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum
          aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum
          aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum
          aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum
          aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum
          aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum
          aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum
          aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum
          aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum
          aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum
          aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum
          aosfnsa;lwbnrgh
        </MessageBubble>
        <MessageBubble>2Lorem ipsum aosfnsa;lwbnrgh</MessageBubble>
        <MessageBubble>3Lorem ipsum aosfnsa;lwbnrgh</MessageBubble>
        <MessageBubble sender>4Lorem ipsum aosfnsa;lwbnrgh</MessageBubble>
        <MessageBubble sender>5Lorem ipsum aosfnsa;lwbnrgh</MessageBubble>
      </MessageContainer>
      <ChatMessage>
        <ChatTextField
          aria-label="TextMessage"
          name="TextMessage"
          type="TextMessage"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SendMessageButton>
          <SendIcon />
        </SendMessageButton>
      </ChatMessage>
      <div ref={messagesEndRef} />
    </Log>
  );
};

export default ChatLog;

const Log = styled.div`
  ${tw`rounded-md flex flex-col overflow-y-auto`}
  flex: 3;
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
