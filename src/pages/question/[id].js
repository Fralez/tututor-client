import React, { useState, useEffect } from "react";
import Error from "next/error";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Layout from "../../layout/Layout";
import QuestionIdPage from "../../components/pages/question/Question[Id]Page";

import api from "@/src/api";

const Question = ({ currentUser }) => {
  // TODO: Fix all of this
  // What must be accomplished: Get `show` sending currentUser.id

  // const router = useRouter();
  const [errorCode, setErrorCode] = useState(false);
  const [question, setQuestion] = useState(null);
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");

  // useEffect(() => {
  //   if (errorCode) {
  //     return <Error statusCode={errorCode} />;
  //   }
  //   async function fetchData() {
  //     const questionId = router.query.id;

  //     const { questions } = api();

  //     // Fetch question
  //     let question = null;
  //     let errorCode = false;
  //     try {
  //       const res = await questions.show(currentUser.id, questionId);

  //       question = res.data.question;
  //       setQuestion(question);
  //       setQuestionTitle(question.title);
  //       setQuestionDescription(question.description);
  //     } catch (error) {
  //       console.log(error);
  //       // setErrorCode(error.response.status);
  //     }
  //   }
  //   fetchData();
  // });

  return (
    <Layout>
      <NextSeo title={questionTitle} description={questionDescription} />
      <QuestionIdPage question={question} />
    </Layout>
  );
};

export default Question;
