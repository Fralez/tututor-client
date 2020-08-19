import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { useRouter } from "next/router";

import { Close, Chat, Send } from "@material-ui/icons";

const ChatModal = ({ currentUser, showChatModal, toggleModal }) => {
  const Router = useRouter();
  const [message, setMessage] = useState("");

  return (
    <>
      {currentUser && showChatModal && (
        <ModalContainer>
          <ModalOverlay onClick={toggleModal} />
          <Modal>
            <ContentContainer>
              <UserList></UserList>
              <Log>
                <MessagesContainer>
                  <MessageTest>1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh1Lorem ipsum aosfnsa;lwbnrgh</MessageTest>
                  <MessageTest>2Lorem ipsum aosfnsa;lwbnrgh</MessageTest>
                  <MessageTest>3Lorem ipsum aosfnsa;lwbnrgh</MessageTest>
                  <MessageTest>4Lorem ipsum aosfnsa;lwbnrgh</MessageTest>
                  <MessageTest>5Lorem ipsum aosfnsa;lwbnrgh</MessageTest>
                </MessagesContainer>
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
              </Log>
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
  ${tw`z-20 relative h-full w-full bg-white flex flex-col flex-no-wrap justify-center`}
`;

const ContentContainer = styled.div`
  ${tw`flex flex-row h-full`}
`;

const UserList = styled.div`
  flex: 2;
  background: #e2e8f0;
`;

const Log = styled.div`
  ${tw`rounded-md m-3 flex flex-col`}
  flex: 3;
`;

const ChatMessage = styled.div`
  ${tw`w-full self-end flex items-center justify-around`};
`;

const ChatTextField = styled.input`
  ${tw`w-11/12 text-sm md:text-base rounded-md p-2 h-12 border-solid border border-gray-300`};
`;

const SendMessageButton = styled.button`
  ${tw`rounded-full text-white`}
  padding: .6rem;
  background-color: ${(props) => props.theme.colors.violetBlue.normal};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const SendIcon = styled(Send)`
  font-size: 1.5rem;
`;

const CloseModal = styled(Close)`
  ${tw`absolute m-2 cursor-pointer`}
  right: 1rem;
  top: 1rem;
  color: ${(props) => props.theme.colors.violetBlue.normal};
`;

const MessagesContainer = styled.div`
  ${tw`flex flex-col justify-end`}
  display: flex;
  height: 100%;
`;

const MessageTest = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  padding: 0.25rem;
  font-size: 14px;

  position: relative;

  min-height: 30px;
  max-width: 420px;

  background-color: #fff;
  margin-bottom: 8px;
  border-radius: 6px;

  z-index: 2;

  box-shadow: 0 2px 1px 0 rgba(160, 172, 182, 0.5);
`;
