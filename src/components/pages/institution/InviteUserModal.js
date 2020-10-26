import React, { useState, useEffect } from "react";
import styled, { css  } from "styled-components";
import tw from "tailwind.macro";

import api from "@/src/api";

import { Close } from "@material-ui/icons";

const InviteUserModal = ({ currentUser, showInviteUserModal, toggleModal }) => {
  const { users } = api();

  const [userList, setUserList] = useState([]);

  const [selectedUserId, setSelectedUserId] = useState(null);

  const populateList = async () => {
    const res = await users.usersWithoutInstitution();
    setUserList(res.data);
  };

  useEffect(() => {
    populateList();
  }, []);

  const handleInvite = async () => {};

  return (
    <>
      {currentUser && showInviteUserModal && (
        <ModalContainer>
          <ModalOverlay onClick={toggleModal} />
          <Modal>
            <ModalTitle>Invitar usuario</ModalTitle>
            <ModalContent>
              {userList.map((user) => (
                <UserContainer>
                  <Overlay
                    onClick={() => setSelectedUserId(user.id)}
                    selected={selectedUserId == user.id}
                  />
                  <img
                    className="h-8"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
                    alt="Profile img"
                  />
                  <TextContainer>
                    <Name>{user.name}</Name>
                  </TextContainer>
                </UserContainer>
              ))}
            </ModalContent>
            <Actions>
              <CancelButton
                onClick={toggleModal}
                className="transition duration-150 ease-in-out"
              >
                Cancelar
              </CancelButton>
              <InviteUserButton
                onClick={handleInvite}
                className="transition duration-150 ease-in-out"
              >
                Invitar
              </InviteUserButton>
            </Actions>
            <CloseModal onClick={toggleModal} />
          </Modal>
        </ModalContainer>
      )}
    </>
  );
};

export default InviteUserModal;

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

const Actions = styled.div`
  ${tw`w-full flex justify-end mt-8`}
`;

const InviteUserButton = styled.button`
  ${tw`ml-4 px-4 py-2 text-sm font-semibold text-gray-300 text-white rounded-md`}
  background-color: ${(props) => props.theme.colors.violetBlue.normal};
`;

const CancelButton = styled.button`
  ${tw`px-2 py-2 text-sm font-semibold`}
  color: ${(props) => props.theme.colors.violetBlue.normal};
  :hover {
    color: ${(props) => props.theme.colors.violetBlue.light};
  }
`;

const CloseModal = styled(Close)`
  ${tw`absolute m-2 cursor-pointer`}
  right: 1rem;
  top: 1rem;
  color: ${(props) => props.theme.colors.violetBlue.normal};
`;

const ModalContent = styled.div`
  ${tw`h-full overflow-y-auto`};
`;

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
  ${tw`flex p-4 items-center relative`}
`;

const TextContainer = styled.div`
  ${tw`flex flex-col p-2 w-full`}
`;

const Name = styled.div`
  ${tw`text-sm font-bold`}
  color: ${(props) => props.theme.colors.violetBlue.normal};
`;
