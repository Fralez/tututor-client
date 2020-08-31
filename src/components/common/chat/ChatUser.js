import React from "react";
import styled, { css } from "styled-components";
import tw from "tailwind.macro";

const ChatUser = ({ user: { id, name }, selectedUserId, handleSelect }) => {
  return (
    <UserContainer>
      <Overlay onClick={handleSelect} selected={selectedUserId == id} />
      <img
        className="h-8 md:h-12"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
        alt="Profile img"
      />
      <TextContainer>
        <Name>{name}</Name>
      </TextContainer>
    </UserContainer>
  );
};

export default ChatUser;

const Overlay = styled.div`
  ${tw`absolute top-0 bottom-0 left-0 right-0 w-full h-full`}
  background-color: ${(props) => props.theme.colors.whiteLavander.normal};

  ${(props) =>
    props.selected
      ? css`
          opacity: 0.1;
          filter: brightness(50%);
        `
      : css`
          opacity: 0;
          filter: none;

          &:hover {
            opacity: 0.1;
            filter: brightness(70%);
            cursor: pointer;
          }
        `}
`;

const UserContainer = styled.div`
  ${tw`flex p-4 items-center h-24 relative`}
`;

const TextContainer = styled.div`
  ${tw`flex flex-col p-2 w-full`}
`;

const Name = styled.div`
  ${tw`text-sm md:text-lg font-bold`}
  color: ${(props) => props.theme.colors.violetBlue.normal};
`;
