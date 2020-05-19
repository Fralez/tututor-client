import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import withCurrentUser from "@/lib/withCurrentUser";

import api from "@/src/api";

import CreateQuestion from "../common/CreateQuestion";
import QuestionPreview from "../common/question/QuestionPreview";

const HomePage = ({ currentUser }) => {
  const { questions } = api();

  const [showCreateQuestionModal, setShowCreateQuestionModal] = useState(false);
  const [questionFeed, setQuestionFeed] = useState([]);

  useEffect(() => {
    getQuestionFeed();
  }, []);

  const getQuestionFeed = async () => {
    const res = await questions.index();
    if (res.status == 200) {
      setQuestionFeed(res.data);
    }
  };

  return (
    <>
      <QuestionContainer>
        {questionFeed.map((question) => (
          <QuestionPreview key={question.id} question={question} />
        ))}
      </QuestionContainer>
      {currentUser && (
        <CreateQuestion
          currentUser={currentUser}
          showCreateQuestionModal={showCreateQuestionModal}
          toggleModal={() =>
            setShowCreateQuestionModal(!showCreateQuestionModal)
          }
        />
      )}
    </>
  );
};

export default withCurrentUser(HomePage);

const QuestionContainer = styled.div`
  ${tw`flex flex-col items-center`}
`;
