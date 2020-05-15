import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import {
  Star,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@material-ui/icons";

const descript =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  
  const AnswerPreview = () => {
    const more = () => {
      setScore(score + 1);
    };
    
    const less = () => {
      setScore(score - 1);
    };
    const [score, setScore] = useState(200);

  return (
    <Preview>
      <User>
        <PorfileImgCon>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
            alt="Profile img"
          ></img>
        </PorfileImgCon>
        <UserInfo>
          <Name>Pepe Perez</Name>
          <Subtitle>ÁNIMA - Bachillerato tecnológico</Subtitle>
        </UserInfo>
        <Date>25th October, 2019</Date>
      </User>
      <InfoCon>
        <Description>{descript}</Description>
        <Punctuation>
          <ArrowLeft onClick={less} />
          <StarIcon />
          <Score>{score}</Score>
          <ArrowRight onClick={more} />
        </Punctuation>
      </InfoCon>
    </Preview>
  );
};

export default AnswerPreview;

const Preview = styled.div`
  ${tw`cursor-pointer w-4/5 rounded-md p-6 mt-6 md:mt-8 ml-16 md:ml-24 border-solid border border-gray-300 flex flex-col justify-center`}
`;

const PorfileImgCon = styled.div`
  ${tw`h-8 w-8 md:w-10 md:h-10`}
`;

const User = styled.div`
  ${tw`flex w-full`}
`;

const UserInfo = styled.div`
  ${tw`ml-2 flex flex-col justify-center`}
`;

const Name = styled.div`
  ${tw`text-sm text-gray-700`}
`;

const Subtitle = styled.div`
  ${tw`text-xs text-gray-500 mt-1`}
`;

const Date = styled.div`
  ${tw`text-xs w-auto ml-auto text-right text-gray-700`}
`;

const InfoCon = styled.div`
  ${tw`flex flex-col`}
`;

const Description = styled.div`
  ${tw`mt-2 w-5/6 text-gray-800`}
`;

const Punctuation = styled.div`
  ${tw`ml-auto flex`}
`;

const Score = styled.div`
  ${tw`text-xl text-gray-800 font-semibold`}
`;

const StarIcon = styled(Star)`
  color: ${(props) => props.theme.colors.yellowMustard.normal};
`;

const ArrowLeft = styled(KeyboardArrowLeft)`
  ${tw`text-2lg cursor-pointer`}
  transform: scale(1.3);
  color: ${(props) => props.theme.colors.pinkCyclamen.light};
`;

const ArrowRight = styled(KeyboardArrowRight)`
  ${tw`text-2lg cursor-pointer`}
  transform: scale(1.3);
  color: ${(props) => props.theme.colors.pinkCyclamen.light};`