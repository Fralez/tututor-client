import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import {
  ExitToApp,
  QuestionAnswer,
  Textsms,
  Domain,
  EmojiObjects,
} from "@material-ui/icons";
import { slide as SidebarMenu } from "react-burger-menu";

const Sidebar = ({ currentUser, logout, showSidebar, toggleSidebar }) => {
  return (
    <CustomSidebar
      customBurgerIcon={false}
      isOpen={showSidebar}
      onStateChange={toggleSidebar}
      right
    >
      <div>
        <SidebarTitle onClick={logout}>
          <ExitToApp />
          <LeadingText>Cerrar sesión</LeadingText>
        </SidebarTitle>
        <User>
          <ProfileImgContainer>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
              alt="Profile img"
            ></img>
          </ProfileImgContainer>
          <UserInfo>
            <UserName>{currentUser.name}</UserName>
            <InstitutionName>My Institution Name</InstitutionName>
          </UserInfo>
        </User>
      </div>
      <SidebarItems>
        <SidebarTitle>Personal</SidebarTitle>
        <SidebarItem>
          <QuestionAnswer />
          <LeadingText>Preguntas</LeadingText>
        </SidebarItem>
        <SidebarItem>
          <Textsms />
          <LeadingText>Chats</LeadingText>
        </SidebarItem>
        <SidebarItem>
          <Domain />
          <LeadingText>Instituciones</LeadingText>
        </SidebarItem>
        {/* Reputation lights */}
        <SidebarTitle>Reputation</SidebarTitle>
        <ReputationZone>
          <ReputationLight />
          <ReputationText>
            {`${currentUser.reputation} ${
              currentUser.reputation > 1 ? "lights" : "light"
            }`}
          </ReputationText>
        </ReputationZone>
      </SidebarItems>
    </CustomSidebar>
  );
};

export default Sidebar;

const CustomSidebar = styled(SidebarMenu)`
  background-color: ${(props) => props.theme.colors.violetBlue.normal};
  min-width: 300px;

  .bm-item-list {
    ${tw`flex flex-col-reverse justify-between`}
  }
`;

const SidebarItems = styled.div`
  ${tw`flex-col`}
  display: flex !important;
`;

const SidebarTitle = styled.h1`
  ${tw`cursor-pointer p-4 text-lg font-bold text-white flex items-center`}
`;

const SidebarItem = styled.span`
  ${tw`cursor-pointer ml-6 p-4 text-md md:text-lg font-medium text-gray-300 hover:text-white focus:text-white flex items-center`}
`;

const LeadingText = styled.span`
  ${tw`pl-2`}
`;

const User = styled.div`
  ${tw`m-4 cursor-pointer`}
  display: flex !important;
`;

const ProfileImgContainer = styled.div`
  ${tw`h-10 w-10 md:w-12 md:h-12`}
`;

const UserInfo = styled.div`
  ${tw`ml-2 flex flex-col justify-center`}
`;

const UserName = styled.div`
  ${tw`text-sm md:text-md font-medium text-gray-200`}
`;

const InstitutionName = styled.div`
  ${tw`text-xs md:text-sm text-gray-300 mt-1`}
`;

const ReputationZone = styled.div`
  ${tw`h-20 p-2 flex text-gray-300 items-center ml-6`}
`;

const ReputationText = styled.span`
  ${tw`font-semibold text-xl`}
`;

const ReputationLight = styled.img`
  ${tw`h-16 w-16`}
`;
