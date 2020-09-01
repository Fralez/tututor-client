import React from "react";
import styled, { css } from "styled-components";
import tw from "tailwind.macro";

const MessageBubble = ({ children, sender }) => {
  return <Bubble sender={sender}>{children}</Bubble>;
};

export default MessageBubble;

const Bubble = styled.div`
  ${tw`p-2 text-sm shadow-lg`}

  display: flex;
  align-items: center;

  ${(props) =>
    props.sender
      ? css`
          border-radius: 6px 0px 6px 6px;
          align-self: flex-end;
          background: #9f9ce7;
        `
      : css`
          border-radius: 0px 6px 6px 6px;
          align-self: flex-start;
          background: #9dcffe;
        `}

  position: relative;

  min-height: 30px;
  max-width: 420px;

  margin-bottom: 8px;
`;
