import React, { useEffect, useState } from "react";
import { Link } from "@/config/routes";
import styled from "styled-components";
import { EmojiObjects, Help, QuestionAnswer, Chat, ArrowForward } from "@material-ui/icons";
import tw from "tailwind.macro";
import withCurrentUser from "@/lib/withCurrentUser";

const HomePage = ({ currentUser, logout }) => {
  return (
    <Container>
      <SidebarButton >
      </SidebarButton>
      <Sidebar>
        <SidebarHead>
          <ImgIcon src="/img/logos/tututor.svg"/>
          <TitleTututor>Tututor</TitleTututor>
          <ArrowForward>
          </ArrowForward>
          <hr/>
        </SidebarHead>
        <SidebarContent>
          <SidebarPoints>
            <EmojiObjects style={{ fontSize: 80 }}></EmojiObjects>
            <SidebarPointsValue>
              105
              <SidebarPointsStars>LIGHTS</SidebarPointsStars>
            </SidebarPointsValue>
          </SidebarPoints>
          <SidebarOptions>
            <SidebarOptionsActive>
              <Help></Help>
              <SidebarOptionsText>My Questions </SidebarOptionsText>
            </SidebarOptionsActive>
            <SidebarOptionsDesactive>
              <QuestionAnswer></QuestionAnswer> 
              <SidebarOptionsText>My Answers </SidebarOptionsText>
            </SidebarOptionsDesactive>
            <SidebarOptionsDesactive> 
              <Chat></Chat>
              <SidebarOptionsText>Chats </SidebarOptionsText>
            </SidebarOptionsDesactive>
          </SidebarOptions>
        </SidebarContent>
        <SidebarFooter>
          <FotoPerfil src="/img/FotoPerfil.png" />
          <SidebarProfile>
              <SidebarProfileName>
                Pepe Perez
              </SidebarProfileName>
              <SidebarProfileInstitucion>ÁNIMA - Bachillerato Tecnológico</SidebarProfileInstitucion>
          </SidebarProfile>
        </SidebarFooter>
      </Sidebar>
      <MainContainer>
        <Link route="register">
          <a>Goto Register</a>
        </Link>
        <Link route="login">
          <a>Goto Login</a>
        </Link>
        <button onClick={logout}>Logout</button>
        <div>User: {currentUser.email}</div>
      </MainContainer>
    </Container>
  );
};

export default withCurrentUser(HomePage);

const Container = styled.div`
  ${tw`flex`}
`;

const Sidebar = styled.div`
  ${tw`fixed flex min-h-screen max-h-screen w-64 flex-col text-white text-base shadow-2xl`}
  background: #90C4FE;
`;

const SidebarHead = styled.div`
  ${tw`flex items-center justify-between text-white p-3 border-b`}
`;

const SidebarPoints = styled.div`
  ${tw`flex border-b h-32 items-center p-1`}
`;

const SidebarContent = styled.div`
  ${tw`flex flex-grow overflow-scroll h-screen flex-col text-base`}
`;

const SidebarFooter = styled.div`
  ${tw`flex items-center justify-center w-full p-2`}
  border-top: 1.2px solid white;
`;

const SidebarOptions = styled.ul`
  ${tw`text-base`}
`;

const SidebarOptionsActive = styled.li`
  ${tw`flex items-center h-12 p-4`}
  background-color: #80BAFA;
`;

const SidebarOptionsDesactive = styled.li`
  ${tw`flex items-center h-12 p-4`}
  background-color: #90C4FE;
  &:hover {
    background-color: #80BAFA;
  }

`;

const SidebarOptionsText = styled.h1`
  ${tw`text-white p-2`}
`;

const MainContainer = styled.div`
  ${tw``}
  margin-left: 270px;
`;

const SidebarPointsValue= styled.div`
  ${tw`text-4xl font-sans p-4`}
`;

const FotoPerfil= styled.img`
  ${tw`w-8 h-8 mr-2`}
`;

const SidebarPointsStars= styled.h1`
  ${tw`flex justify-center text-sm font-sans`}
`;

const SidebarProfileInstitucion = styled.h1`
  ${tw`font-sans tracking-wider text-gray-100`}
  font-size: 10px;
`;

const SidebarProfile = styled.div`
  ${tw``}
`;

const TitleTututor = styled.h1`
  ${tw`ml-4 mr-20 text-xl`}
`;

const SidebarProfileName = styled.span`
  ${tw`flex items-center justify-between text-sm`}
`;

const ImgIcon = styled.img`
  ${tw`w-8 h-8`}
`;

const SidebarButton = styled.button`
  ${tw``}
`;