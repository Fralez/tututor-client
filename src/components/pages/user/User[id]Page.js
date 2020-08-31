import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Moment from "react-moment";

import { AlternateEmail, Cake, Info, EmojiObjects } from "@material-ui/icons";
import { useRouter } from "next/router";

const UserIdPage = ({ user }) => {
  return (
    <div>
      {/* {user.name}
      {user.email}
      {user.birth_date}
      {user.gender} */}
      <Background></Background>

      <UserContainer>
        <ProfilePicContainer>
          <ProfilePic src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" />
        </ProfilePicContainer>
        <div>
          <Name>{user.name}</Name>
          <Institution>ÁNIMA - Bachillerato tecnológico</Institution>
        </div>
      </UserContainer>
      <UserInfo>
        <ReputationTitle>
          Luces
        </ReputationTitle>
        <ReputationContainer>
          <Lightbulb fill="currentColor" />
          <Reputation>200</Reputation>
        </ReputationContainer>
        <MoreInfoTitle>
          Más información
        </MoreInfoTitle>
        <EmailContainer>
          <EmailIcon />
          <h3>{user.email}</h3>
        </EmailContainer>
        <BirthContainer>
          <BirthDateIcon />
          <Moment format="LL">{user.birth_date}</Moment>
        </BirthContainer>
        <DescriptionContainer>
          <DescriptionIcon />
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </h3>
        </DescriptionContainer>
      </UserInfo>
    </div>
  );
};

export default UserIdPage;

const Background = styled.div`
  ${tw`w-11/12 h-40 mx-auto rounded-bl-lg rounded-br-lg`}
  background-color: #90c4fe;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23459af9' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const UserContainer = styled.div`
  ${tw`flex flex-col md:flex-row items-center`}
`;

const ProfilePicContainer = styled.div`
  ${tw`w-40 h-40 -mt-20 md:ml-32 md:mr-4 rounded-full border-white border-4`}
`;

const ProfilePic = styled.img`
  ${tw`w-full`}
`;

const Name = styled.h1`
  ${tw`text-4xl`}
  color: ${(props) => props.theme.colors.violetBlue.normal}
`;

const Institution = styled.h5`
  ${tw`text-sm mt-2`}
  color: #718096
`;

const UserInfo = styled.div`
  ${tw`w-3/4 ml-16 md:ml-32`}
`;
const EmailContainer = styled.div`
  ${tw`flex`}
`;

const EmailIcon = styled(AlternateEmail)`
  ${tw`mr-2`}
  color: ${(props) => props.theme.colors.violetBlue.light};
`;

const BirthContainer = styled.div`
  ${tw`flex mt-2`}
`;

const BirthDateIcon = styled(Cake)`
  ${tw`mr-2`}
  color: ${(props) => props.theme.colors.violetBlue.light};
`;

const DescriptionContainer = styled.div`
  ${tw`flex mt-2`}
`;

const DescriptionIcon = styled(Info)`
  ${tw`mr-2`}
  color: ${(props) => props.theme.colors.violetBlue.light};
`;

const ReputationContainer = styled.div`
  ${tw`flex items-center`}
`;

const Lightbulb = styled(EmojiObjects)`
  ${tw``}
  color: ${(props) => props.theme.colors.yellowMustard.normal};
  width: 60px !important;
  height: 60px !important;
`;

const Reputation = styled.div`
  ${tw`text-xl`}
`;

const ReputationTitle = styled.h2`
  ${tw`text-2xl mt-8 mb-4`}
`
const MoreInfoTitle = styled.h2`
${tw`text-2xl mt-8 mb-4`}
` 