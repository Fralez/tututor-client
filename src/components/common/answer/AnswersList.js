import React from "react";
import AnswerPreview from "./AnswerPreview";
import styled from "styled-components";
import tw from "tailwind.macro";

const QuestionList = () => {
  return (
    <Container>
      <AnswerPreview />
      <AnswerPreview />
      <AnswerPreview />
    </Container>
  );
};

export default QuestionList;

const Container = styled.div`
  ${tw`w-full`}
`;
