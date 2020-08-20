import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const ChatUser = ({ name, lastMessage }) => {
  return (
    <UserContainer>
      <Overlay />
      <img
        className="h-8 md:h-12"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
        alt="Profile img"
      />
      <TextContainer>
        <Name>{name}</Name>
        <LastMessage>{lastMessage}</LastMessage>
      </TextContainer>
    </UserContainer>
  );
};

export default ChatUser;

const Overlay = styled.div`
  ${tw`absolute top-o bottom-0 left-0 right-0 w-full h-full bg-gray-100`}

  opacity: 0;
  filter: none;
  
  &:hover {
    opacity: 0.1;
    filter: brightness(10%);
    cursor: pointer;
  }
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

const LastMessage = styled.div`
  ${tw`text-xs md:text-base`}
`;
