import React from "react";
import styled, { css } from "styled-components";
import tw from "tailwind.macro";

const MessageBubble = ({ children, sender }) => {
  return <Bubble sender={sender}>{children}</Bubble>;
};

export default MessageBubble;

const Bubble = styled.div`
  ${tw`p-2 text-sm`}

  display: flex;
  align-items: center;

  ${(props) =>
    props.sender
      ? css`
          align-self: flex-end;
          background: #9f9ce7;
        `
      : css`
          align-self: flex-start;
          background: #9dcffe;
        `}

  position: relative;

  min-height: 30px;
  max-width: 420px;

  margin-bottom: 8px;
  border-radius: 6px;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
