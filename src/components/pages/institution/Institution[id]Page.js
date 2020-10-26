import React, { useState, useEffect } from "react";
import withCurrentUser from "../../../../lib/withCurrentUser";
import styled from "styled-components";
import tw from "tailwind.macro";
import { useRouter } from "next/router";

import api from "@/src/api";

import QuestionPreview from "@/src/components/common/question/QuestionPreview";
import SearchBar from "../../common/search/SearchBar";
import UserTile from "./UserTile";
import InviteUserModal from "./InviteUserModal";

import {
  AlternateEmail,
  LocationOn,
  Info,
  Apartment,
  Group,
  Add,
} from "@material-ui/icons";

const InstitutionIdPage = ({
  currentUser,
  institution: { id, name, email, description, address, creator, users },
}) => {
  const Router = useRouter();

  const { questions, institutions } = api();
  const usersApi = api().users;

  const [questionFeed, setQuestionFeed] = useState([]);
  const [showInviteUserModal, setShowInviteUserModal] = useState(false);

  const getQuestionFeed = async () => {
    try {
      const res = await questions.index(id);
      if (res.status == 200) {
        setQuestionFeed(res.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getQuestionFeed();
  }, []);

  const leaveInstitution = async () => {
    try {
      const leavingUserId = currentUser.id;
      const res = await usersApi.clearInstitution(id, leavingUserId);
      
      if (res.status == 201) {
        Router.reload();
      }
    } catch (error) {}
  };

  const inviteUserToInstitution = async () => {};

  return (
    <Container>
      <InstitutionContainer>
        <InstitutionPerfil>
          <ProfilePic />
          {currentUser &&
            currentUser.institution_id == id &&
            currentUser.id != creator.id && (
              <LeaveInstitutionButton onClick={leaveInstitution}>
                Abandonar institución
              </LeaveInstitutionButton>
            )}
          <Name>{name}</Name>
        </InstitutionPerfil>
        <InstitutionInfo>
          <EmailContainer>
            <EmailIcon />
            {email}
          </EmailContainer>
          <LocationContainer>
            <LocationIcon />
            {address}
          </LocationContainer>
          <DescriptionContainer>
            <DescriptionIcon />
            <Description>
              {description ? description : "Sin descripción"}
            </Description>
          </DescriptionContainer>
          <UsersContainer>
            <GroupIcon />
            <Title>Usuarios</Title>
          </UsersContainer>
          {/* Render creator */}
          <UserTile user={creator} isCreator />
          {/* Render other members */}
          {users.map((user) => (
            <UserTile
              key={user.id}
              user={user}
              showMakeCreator={currentUser && currentUser.id == creator.id}
              institutionId={id}
            />
          ))}
          {currentUser && currentUser.id == creator.id && (
            <AddNewUserButton onClick={() => setShowInviteUserModal(true)}>
              <ContainerFlat>
                <AddIcon />
                Invitar usuario
              </ContainerFlat>
            </AddNewUserButton>
          )}
        </InstitutionInfo>
      </InstitutionContainer>
      <SearchBarQuestionsContainer>
        <SearchBar />
        <QuestionContainer>
          {questionFeed.map((question) => (
            <QuestionPreview key={question.id} question={question} />
          ))}
        </QuestionContainer>
      </SearchBarQuestionsContainer>
      {currentUser && currentUser.id == creator.id && (
        <InviteUserModal
          currentUser={currentUser}
          showInviteUserModal={showInviteUserModal}
          toggleModal={() => setShowInviteUserModal(!showInviteUserModal)}
        />
      )}
    </Container>
  );
};

export default withCurrentUser(InstitutionIdPage);

const Container = styled.div`
  ${tw`flex md:flex-row flex-col md:items-center md:h-full`}
`;

const InstitutionContainer = styled.div`
  ${tw`flex flex-col px-4 w-full border-r border-solid border-gray-300 overflow-scroll pb-4 md:w-2/6 md:h-full`}
`;

const InstitutionPerfil = styled.div`
  ${tw`flex flex-col items-center mb-4 mt-4`}
`;

const ProfilePic = styled(Apartment)`
  ${tw``}
  color: ${(props) => props.theme.colors.blueBaby.normal};
  width: 130px !important;
  height: 130px !important;
`;

const Name = styled.h5`
  ${tw`text-xl mt-2 font-semibold text-center`}
  color: ${(props) => props.theme.colors.violetBlue.light};
`;

const Title = styled.h5`
  ${tw`text-xl font-semibold`}
  color: ${(props) => props.theme.colors.violetBlue.light};
`;

const GroupIcon = styled(Group)`
  ${tw`mr-2`}
  color: ${(props) => props.theme.colors.violetBlue.light};
`;

const EmailIcon = styled(AlternateEmail)`
  ${tw`mr-2`}
  color: ${(props) => props.theme.colors.violetBlue.light};
`;

const LocationContainer = styled.div`
  ${tw`flex mt-2`}
`;

const LocationIcon = styled(LocationOn)`
  ${tw`mr-2`}
  color: ${(props) => props.theme.colors.violetBlue.light};
`;

const DescriptionContainer = styled.div`
  ${tw`flex mt-2 italic`}
`;

const DescriptionIcon = styled(Info)`
  ${tw`mr-2`}
  color: ${(props) => props.theme.colors.violetBlue.light};
`;

const Description = styled.h3`
  ${tw`text-justify`}
`;

const InstitutionInfo = styled.div`
  ${tw`w-full`}
`;

const EmailContainer = styled.div`
  ${tw`flex`}
`;

const QuestionContainer = styled.div`
  ${tw`flex items-center w-4/5 flex-col`}
`;

const SearchBarQuestionsContainer = styled.div`
  ${tw`flex flex-col items-center w-full md:h-full`}
`;

const UsersContainer = styled.div`
  ${tw`mt-4 flex`}
`;

const LeaveInstitutionButton = styled.button`
  ${tw`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full my-2`}
`;

const AddIcon = styled(Add)`
  color: white;
`;

const ContainerFlat = styled.div`
  ${tw`flex items-center justify-center`}
`;

const AddNewUserButton = styled.button`
  ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full my-2`}
`;
