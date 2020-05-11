import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const Preview = styled.div`
    ${tw`w-4/5 rounded-md p-6 mt-8`}
    background-color: ${(props) => props.theme.colors.whiteLavander.light};
`;
const PorfileImgCon = styled.div`
  ${tw`w-12 h-12`}
`;
const ProfileImg = styled.img`
  ${tw``}
`;
const User = styled.div`
  ${tw`flex w-full`}
`;
const UserInfo = styled.div`
  ${tw`ml-2 flex flex-col justify-center`}
`;
const Subtitle = styled.div`
  ${tw`text-xs text-gray-500 mt-1`}
`;
const Date = styled.div`
  ${tw`text-xs w-auto ml-auto`}
`;
const Title = styled.div`
  ${tw`text-2xl mb-2 mt-4`}
`;
const Description = styled.div`
  ${tw`text-sm`}
`;

const descript =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const QuestionPreview = () => {
  return (
    <Preview>
      <User>
        <PorfileImgCon>
          <ProfileImg
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
            alt="Profile img"
          ></ProfileImg>
        </PorfileImgCon>
        <UserInfo>
          <div>Pepe Perez</div>
          <Subtitle>ÁNIMA - Bachillerato tecnológico</Subtitle>
        </UserInfo>
        <Date>25th October, 2019</Date>
      </User>
      <Title>How do I create a HTML page?</Title>
      <Description>
        {descript.length > 80 ? descript.slice(0, 80) + '...' : descript}
      </Description>
    </Preview>
  );
};

export default QuestionPreview;
