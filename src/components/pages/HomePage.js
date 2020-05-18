import React, { useState, useEffect } from "react";
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
    console.log(res);
    if (res.status == 200) {
      setQuestionFeed(res.data);
    }
  };

  return (
    <>
      {questionFeed.map((question) => (
        <QuestionPreview key={question.id} question={question} />
      ))}
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
