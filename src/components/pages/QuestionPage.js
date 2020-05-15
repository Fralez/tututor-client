import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import {
  BookmarkBorder,
  Bookmark,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowDown,
  ModeCommentOutlined,
  Star,
} from "@material-ui/icons";
import AnswersList from "../common/answer/AnswersList";

const QuestionPage = () => {
  const handleSaveButton = () => {
    saveClciked ? setSaveClciked(false) : setSaveClciked(true);
  };

  const more = () => {
    setScore(score + 1);
  };

  const less = () => {
    setScore(score - 1);
  };

  const [saveClciked, setSaveClciked] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <Container>
      <Question>
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
          <DropdownButton>
            <DropdownIcon />
          </DropdownButton>
        </User>
        <Title>How do I create an HTML page?</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Description>
        <IconsCon>
          <Punctuation>
            <ArrowLeft onClick={less} />
            <StarIcon />
            <Score>{score}</Score>
            <ArrowRight onClick={more} />
          </Punctuation>
          <CommentButton>
            <CommentIcon />
          </CommentButton>
          <SaveButton onClick={handleSaveButton}>
            {saveClciked ? <SaveIconOn /> : <SaveIconOff />}
          </SaveButton>
        </IconsCon>
      </Question>
      <AnswerTitle>Answers</AnswerTitle>
      <AnswersList />
    </Container>
  );
};

export default QuestionPage;

const Container = styled.div`
  ${tw`w-screen`}
`;

const Question = styled.div`
  ${tw`w-11/12 rounded-md p-6 mt-6 md:mt-8 mx-auto border-solid border border-gray-300 flex flex-col justify-center`}
`;

const PorfileImgCon = styled.div`
  ${tw`h-10 w-10 md:w-12 md:h-12`}
`;

const User = styled.div`
  ${tw`flex w-full`}
`;

const UserInfo = styled.div`
  ${tw`ml-2 flex flex-col justify-center`}
`;

const Name = styled.div`
  ${tw`text-gray-700`}
`;

const Subtitle = styled.div`
  ${tw`text-sm text-gray-500 mt-1`}
`;

const Date = styled.div`
  ${tw`text-sm w-auto ml-auto text-right text-gray-700`}
`;

const Title = styled.div`
  ${tw`text-2xl md:text-3xl mb-2 mt-2 md:mt-4 font-medium w-5/6`}
  color: ${(props) => props.theme.colors.violetBlue.normal}
`;

const Description = styled.div`
  ${tw`text-gray-800`}
`;

const IconsCon = styled.div`
  ${tw`flex mt-4 ml-auto`}
`;

const SaveButton = styled.div`
  ${tw`ml-4`}
`;

const SaveIconOff = styled(BookmarkBorder)`
  ${tw`text-2xl cursor-pointer`}
  transform: scale(1.4);
  color: ${(props) => props.theme.colors.pinkCyclamen.light};
`;

const SaveIconOn = styled(Bookmark)`
  ${tw`text-2xl cursor-pointer`}
  transform: scale(1.4);
  color: ${(props) => props.theme.colors.pinkCyclamen.light};
`;

const CommentButton = styled.div`
  ${tw`ml-4`}
`;

const CommentIcon = styled(ModeCommentOutlined)`
  ${tw`text-2xl cursor-pointer`}
  transform: scale(1.3);
  color: ${(props) => props.theme.colors.pinkCyclamen.light};
`;

const Punctuation = styled.div`
  ${tw`flex font-semibold items-center`}
`;

const ArrowLeft = styled(KeyboardArrowLeft)`
  ${tw`text-2lxl cursor-pointer`}
  transform: scale(1.3);
  color: ${(props) => props.theme.colors.pinkCyclamen.light};
`;

const ArrowRight = styled(KeyboardArrowRight)`
  ${tw`text-2xl cursor-pointer`}
  transform: scale(1.3);
  color: ${(props) => props.theme.colors.pinkCyclamen.light};
`;

const Score = styled.div`
  ${tw`text-lg h-full`}
`;

const DropdownButton = styled.div`
  ${tw`ml-4 text-gray-800`}
`;

const DropdownIcon = styled(KeyboardArrowDown)`
  ${tw`text-2xl cursor-pointer text-gray-600`}
  transform: scale(1.4);
`;

const StarIcon = styled(Star)`
  color: ${(props) => props.theme.colors.yellowMustard.normal};
`;

const AnswerTitle = styled.div`
  ${tw`ml-4 text-bold text-gray-800 text-2xl mt-4`}
`;
