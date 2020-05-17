import React, { useState } from "react";
import { Link } from "@/config/routes";
import styled from "styled-components";
import tw from "tailwind.macro";

import { Menu, Close } from "@material-ui/icons";
import { slide as SidebarMenu } from "react-burger-menu";

const Sidebar = ({ currentUser, showSidebar, toggleSidebar }) => {
  return (
    <CustomSidebar
      customBurgerIcon={false}
      isOpen={showSidebar}
      onStateChange={toggleSidebar}
      right
      width={"35%"}
    >
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
      <SidebarItems>
        <SidebarItem>Mis instituciones</SidebarItem>
        <SidebarItem>Mis preguntas</SidebarItem>
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
  ${tw`flex-col-reverse`}
  display: flex !important;
`;

const SidebarItem = styled.span`
  ${tw`p-4 text-md md:text-lg  font-medium text-gray-300 hover:text-white focus:text-white`}
`;

const User = styled.div`
  ${tw`m-4`}
  display: flex !important;
  cursor: pointer;
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
