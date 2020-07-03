import React from "react";

const Question = ({ id }) => {
  return <p>Question id: {id}</p>;
};

export default Question;

export async function getServerSideProps(context) {
  const questionId = context.params.id;
  // TODO: Fetch question data here
  return {
    props: {
      id: questionId,
    }, // will be passed to the page component as props
  };
}
