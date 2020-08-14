import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { useRouter } from "next/router";

import ChatLog from "../chat/ChatLog";

import { Close, Chat } from "@material-ui/icons";

const ChatModal = ({ currentUser, showChatModal, toggleModal }) => {
  const Router = useRouter();

  return (
    <>
      {currentUser && showChatModal && (
        <ModalContainer>
          <ModalOverlay onClick={toggleModal} />
          <Modal>
            <ModalTitle>Chat</ModalTitle>
            <ChatLog/>
            <CloseModal onClick={toggleModal} />
          </Modal>
        </ModalContainer>
      )}
      {currentUser && (
        <OpenChatButton onClick={toggleModal}>
          <Chat />
        </OpenChatButton>
      )}
    </>
  );
};

export default ChatModal;

const OpenChatButton = styled.button`
  ${tw`fixed p-3 rounded-full text-white`}
  background-color: ${(props) => props.theme.colors.violetBlue.normal};
  right: 2rem;
  bottom: 6rem;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
`;

const ModalContainer = styled.div`
  ${tw`z-20 fixed h-full w-full flex justify-center items-center inset-0`}
`;

const ModalOverlay = styled.div`
  ${tw`fixed h-full w-full`}
  background-color: rgba(0, 0, 0, .3);
`;

const Modal = styled.div`
  ${tw`z-20 relative p-6 h-full w-full max-w-screen-lg bg-white sm:rounded-lg flex flex-col justify-center`}

  @media (min-width: 640px) {
    width: 90%;
    height: 50%;
  }
`;

const ModalTitle = styled.h1`
  ${tw`mb-4 text-3xl leading-9 font-extrabold`}
  color: ${(props) => props.theme.colors.violetBlue.normal};
`;

const CloseModal = styled(Close)`
  ${tw`absolute m-2 cursor-pointer`}
  right: 1rem;
  top: 1rem;
  color: ${(props) => props.theme.colors.violetBlue.normal};
`;
