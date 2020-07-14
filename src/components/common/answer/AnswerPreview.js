import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import api from "@/src/api";

import Moment from "react-moment";
import {
  Star,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  CheckCircle,
} from "@material-ui/icons";

const AnswerPreview = ({
  currentUser,
  answer: {
    id,
    description,
    votes,
    created_at,
    user_vote,
    creator: { name },
  },
  handleMarkCorrectAnswerButton,
  showMarkCorrectAnswerButton = false,
  isCorrectAnswer = false,
}) => {
  const { answers } = api();

  const [votesCounter, setVotes] = useState(votes);
  const [currentVoteStatus, setCurrentVoteStatus] = useState(
    user_vote ? (user_vote.negative ? -1 : 1) : 0
  );

  const handleDownvote = async () => {
    const res = await answers.voteAnswer(id, true);
    setVotes(res.data.votes);
    setCurrentVoteStatus(currentVoteStatus - 1);
    try {
    } catch (error) {}
  };

  const handleUpvote = async () => {
    try {
      const res = await answers.voteAnswer(id);
      setVotes(res.data.votes);
      setCurrentVoteStatus(currentVoteStatus + 1);
    } catch (error) {}
  };

  return (
    <Preview isCorrectAnswer={isCorrectAnswer}>
      <User>
        <PorfileImgCon>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
            alt="Profile img"
          ></img>
        </PorfileImgCon>
        <UserInfo>
          <Name>{name}</Name>
          {/* <Subtitle>ÁNIMA - Bachillerato tecnológico</Subtitle> */}
        </UserInfo>
        <DatePreview to={created_at} />
      </User>
      <InfoCon>
        {showMarkCorrectAnswerButton &&
          (isCorrectAnswer ? (
            <CorrectAnswerOn onClick={handleMarkCorrectAnswerButton} />
          ) : (
            <CorrectAnswerOff onClick={handleMarkCorrectAnswerButton} />
          ))}
        <Description>{description}</Description>
        <Punctuation>
          {currentUser && currentVoteStatus >= 0 && (
            <ArrowLeft onClick={handleDownvote} />
          )}
          <StarIcon />
          <Score>{votesCounter}</Score>
          {currentUser && currentVoteStatus <= 0 && (
            <ArrowRight onClick={handleUpvote} />
          )}
        </Punctuation>
      </InfoCon>
    </Preview>
  );
};

export default AnswerPreview;

const Preview = styled.div`
  ${tw`w-4/5 rounded-md p-6 mb-6 flex flex-col justify-center`}
  border-left: 0.5rem solid ${(props) =>
    props.isCorrectAnswer ? props.theme.colors.green.normal : "#A0AEC0"};
`;

const PorfileImgCon = styled.div`
  ${tw`h-6 w-6 md:w-8 md:h-8`}
`;

const User = styled.div`
  ${tw`flex w-full items-center`}
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

const DatePreview = styled(Moment)`
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

const CorrectAnswerOn = styled(CheckCircle)`
  ${tw`text-2xl mb-2 mt-4 cursor-pointer ml-auto`}
  transform: scale(1.4);
  color: ${(props) => props.theme.colors.green.normal};
`;

const CorrectAnswerOff = styled(CheckCircle)`
  ${tw`text-2xl mb-2 mt-4 cursor-pointer ml-auto`}
  transform: scale(1.4);
  color: #A0AEC0;
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
  color: ${(props) => props.theme.colors.pinkCyclamen.light};
`;
