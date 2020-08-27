import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { useRouter } from "next/router";

import { Close, Chat } from "@material-ui/icons";

import UserList from "./UserList";
import ChatLog from "./ChatLog";

const ChatModal = ({ currentUser, showChatModal, toggleModal }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <>
      {currentUser && showChatModal && (
        <ModalContainer>
          <ModalOverlay onClick={toggleModal} />
          <Modal>
            <ContentContainer>
              <UserList
                currentUser={currentUser}
                selectedUserId={selectedUserId}
                setSelectedUserId={setSelectedUserId}
              />
              <ChatLog />
            </ContentContainer>
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
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const ModalContainer = styled.div`
  ${tw`z-20 fixed h-full w-full flex justify-center items-center inset-0`}
`;

const ModalOverlay = styled.div`
  ${tw`fixed h-full w-full`}
  background-color: rgba(0, 0, 0, .3);
`;

const Modal = styled.div`
  ${tw`z-20 relative h-full w-full bg-white flex flex-col flex-no-wrap justify-center`}
`;

const ContentContainer = styled.div`
  ${tw`flex flex-row h-full`}
`;

const CloseModal = styled(Close)`
  ${tw`absolute m-2 cursor-pointer`}
  right: 1rem;
  top: 1rem;
  color: ${(props) => props.theme.colors.violetBlue.normal};
`;
