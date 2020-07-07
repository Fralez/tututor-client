import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { useRouter } from "next/router";
import withCurrentUser from "@/lib/withCurrentUser";

import api from "@/src/api";

import SimpleReactValidator from "simple-react-validator";

import AnswerPreview from "../../common/answer/AnswerPreview";

import {
  BookmarkBorder,
  Bookmark,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowDown,
  ModeCommentOutlined,
  Star,
} from "@material-ui/icons";
import Moment from "react-moment";

const QuestionIdPage = ({
  currentUser,
  question: {
    id,
    title,
    description,
    votes,
    created_at,
    creator: { name },
    user_vars: { vote, is_saved },
  },
  questionAnswers,
}) => {
  const Router = useRouter();
  const validator = new SimpleReactValidator();

  const { questions, answers } = api();

  const [votesCounter, setVotes] = useState(votes);
  const [currentVoteStatus, setCurrentVoteStatus] = useState(
    vote ? (vote.negative ? -1 : 1) : 0
  );
  const [isSaved, setIsSaved] = useState(is_saved);

  const [answerTextfield, setAnswerTextfield] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSaveButton = () => {
    try {
      questions.saveQuestion(id);
      setIsSaved(!isSaved);
    } catch (error) {}
  };

  const handleDownvote = async () => {
    const res = await questions.voteQuestion(id, true);
    setVotes(res.data.votes);
    setCurrentVoteStatus(currentVoteStatus - 1);
    try {
    } catch (error) {}
  };

  const handleUpvote = async () => {
    try {
      const res = await questions.voteQuestion(id);
      setVotes(res.data.votes);
      setCurrentVoteStatus(currentVoteStatus + 1);
    } catch (error) {}
  };

  const handleAnswerQuestion = async () => {
    try {
      if (!validator.allValid())
        throw new Error("Validations not totally passed");
      setShowErrorMessage(false);

      const res = await answers.create({
        description: answerTextfield,
        question_id: id,
      });
      if (res.status == 201) {
        Router.reload();
      }
    } catch (error) {
      setShowErrorMessage(true);
    }
  };

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
            <Name>{name}</Name>
            {/* <Subtitle>ÁNIMA - Bachillerato tecnológico</Subtitle> */}
          </UserInfo>
          <DateView to={created_at}></DateView>
          {/* <DropdownButton>
            <DropdownIcon />
          </DropdownButton> */}
        </User>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <IconsCon>
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
          {/* <CommentButton>
            <CommentIcon />
          </CommentButton> */}
          {currentUser && (
            <SaveButton onClick={handleSaveButton}>
              {isSaved ? <SaveIconOn /> : <SaveIconOff />}
            </SaveButton>
          )}
        </IconsCon>
      </Question>
      <ContainerCategory>
        <Category>Ciencias Sociales</Category>
      </ContainerCategory>
      <AnswersContainer>
        <AnswerTitle>Respuestas</AnswerTitle>
        {currentUser && (
          <>
            <DescriptionField
              rows="5"
              placeholder="Escriba tu respuesta..."
              value={answerTextfield}
              onChange={(e) => setAnswerTextfield(e.target.value)}
            />
            {validator.message("answerTextfield", answerTextfield, "required")}
            <Actions>
              <CreateButton
                onClick={handleAnswerQuestion}
                className="transition duration-150 ease-in-out"
              >
                Crear respuesta
              </CreateButton>
            </Actions>
            {showErrorMessage && (
              <ErrorText>
                ¡Oops! Revisa que hayas escrito una descripción 🧐
              </ErrorText>
            )}
          </>
        )}
        {questionAnswers.map((answer) => (
          <AnswerPreview
            key={answer.id}
            currentUser={currentUser}
            answer={answer}
          />
        ))}
      </AnswersContainer>
    </Container>
  );
};

export default withCurrentUser(QuestionIdPage);

const Container = styled.div`
  ${tw`w-full`}
`;

const Question = styled.div`
  ${tw`w-11/12 rounded-md p-6 mt-6 md:mt-8 mx-auto border-solid border border-gray-300 flex flex-col justify-center`}
`;

const AnswersContainer = styled.div`
  ${tw`flex flex-col justify-center items-center`};
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
  ${tw`text-gray-700 text-sm`}
`;

const Subtitle = styled.div`
  ${tw`text-xs text-gray-500 mt-1`}
`;

const DateView = styled(Moment)`
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

const DescriptionField = styled.textarea`
  ${tw`m-4 px-3 py-2 text-sm leading-5 text-gray-900 border border-solid border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300`}
  width: 90%;
`;

const Actions = styled.div`
  ${tw`flex justify-end mb-4`}
  width: 90%;
`;

const ErrorText = styled.span`
  ${tw`text-red-600 text-sm font-medium mb-4`}
`;

const CreateButton = styled.button`
  ${tw`ml-4 px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white rounded-md`}
  background-color: ${(props) => props.theme.colors.pinkCyclamen.normal};
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
  ${tw`text-bold text-gray-800 text-2xl mt-4`}
  margin-left: 4%;
  align-self: flex-start;
`;

const ContainerCategory = styled.div`
  ${tw`inline-block mr-8 md:mr-12 absolute right-0`}
  
` 
const Category = styled.div`
  ${tw`p-2 border-solid border-2 rounded-full w-auto h-6 text-xs md:text-sm flex justify-center items-center mt-2`}
  border-color: ${(props) => props.theme.colors.violetBlue.normal};
  color: ${(props) => props.theme.colors.violetBlue.normal};
`