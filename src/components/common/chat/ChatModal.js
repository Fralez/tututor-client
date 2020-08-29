import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import api from "@/src/api";

import { Close, Chat } from "@material-ui/icons";

import UserList from "./UserList";
import ChatLog from "./ChatLog";

const ChatModal = ({ currentUser, showChatModal, toggleModal }) => {
  const { channels } = api();
  const cableWs = new WebSocket(process.env.WS_URL);

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userChannels, setUserChannels] = useState([]);
  const [selectedUserChannel, setSelectedUserChannel] = useState(null);

  useEffect(() => {
    cableWs.onopen = () => {
      cableWs.send(
        JSON.stringify({
          command: "subscribe",
          identifier: JSON.stringify({ channel: "ChannelsChannel" }),
        })
      );
    };

    cableWs.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.identifier == '{"channel":"ChannelsChannel"}' && data.message) {
        setUserChannels((oldState) => [...oldState, data.message]);
      }
    };
  }, []);

  useEffect(() => {
    channels.index().then((res) => {
      setUserChannels(res.data);
    });
  }, []);

  const handleSelectUser = async (selectedId) => {
    setSelectedUserId(selectedId);
    // Find channel
    let selectedChannel = userChannels.find(
      (uch) =>
        (uch.user_one_id == currentUser.id && uch.user_two_id == selectedId) ||
        (uch.user_two_id == currentUser.id && uch.user_one_id == selectedId)
    );
    // If it does not exist, create new one
    if (!selectedChannel) {
      const res = await channels.create(
        `${currentUser.id}::${selectedId}`,
        currentUser.id,
        selectedId
      );
      selectedChannel = res.data;
    }
    // Set selected channel
    setSelectedUserChannel(selectedChannel);
    console.log(selectedChannel);
  };

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
                setSelectedUserId={handleSelectUser}
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
