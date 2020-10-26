import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import tw from "tailwind.macro";

import api from "@/src/api";

import { Close, CheckCircle, Cancel } from "@material-ui/icons";

const InstitutionInvitationModal = ({
  currentUser,
  showInstitutionInvitationModal,
  invitations = [],
  toggleModal,
}) => {
  const { users } = api();

  const [invitationsList, setInvitationsList] = useState([]);

  useEffect(() => {
    setInvitationsList(invitations);
  }, []);

  const handleAcceptInvitation = async (invitation) => {};

  const handleRejectInvitation = async (invitation) => {};

  return (
    <>
      {currentUser && showInstitutionInvitationModal && (
        <ModalContainer>
          <ModalOverlay onClick={toggleModal} />
          <Modal>
            <ModalTitle>Notificaciones</ModalTitle>
            <ModalContent className="divide-y">
              {invitationsList.map((invitation) => (
                <InvitationContainer>
                  <TextContainer>
                    <Name>{`¿Deseas unirta a <institution_name>?`}</Name>
                  </TextContainer>
                  <CheckCircleIcon
                    onClick={() => handleAcceptInvitation(invitation)}
                  />
                  <CancelIcon
                    onClick={() => handleRejectInvitation(invitation)}
                  />
                </InvitationContainer>
              ))}
            </ModalContent>
            <CloseModal onClick={toggleModal} />
          </Modal>
        </ModalContainer>
      )}
    </>
  );
};

export default InstitutionInvitationModal;

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

const ModalContent = styled.div`
  ${tw`h-full overflow-y-auto`};
`;

const InvitationContainer = styled.div`
  ${tw`flex pb-3 pt-3 items-center relative justify-between`}
`;

const TextContainer = styled.div`
  ${tw`flex flex-col p-2 w-full`}
`;

const Name = styled.div`
  ${tw`text-md font-bold`}
  color: ${(props) => props.theme.colors.violetBlue.normal};
`;

const CheckCircleIcon = styled(CheckCircle)`
  ${tw`mr-2 cursor-pointer`}
  color: #38a169; // red-600
  width: 1.8rem !important;
  height: 1.8rem !important;
`;

const CancelIcon = styled(Cancel)`
  ${tw`mr-2 cursor-pointer`}
  color: #e53e3e; // green-600
  width: 1.8rem !important;
  height: 1.8rem !important;
`;
