import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import withCurrentUser from "@/lib/withCurrentUser";
import {Link} from '@/config/routes'

import api from "@/src/api";

import CreateQuestionModal from "../common/CreateQuestionModal";
import QuestionPreview from "../common/question/QuestionPreview";
import SearchBar from "../common/search/SearchBar";
import QuestionList from "../common/question/QuestionList";

const HomePage = ({ currentUser }) => {
  const [questioneses, setQuestioneses] = useState([
    {
      id: 1,
      title: "tu",
      description: "isjhiuerthu",
      votes: 300,
      created_at: new Date(),
      creator: { name: "Juan Perez" },
    },
    {
      id: 2,
      title: "Blabla",
      description:
        "sihiluthwouthuouhtisjhiuerthudftgerteiuhiwqhouqtwhoqiihuhuihtiertheoiurthi",
      votes: 201,
      created_at: new Date(),
      creator: { name: "Francisco Pancho" },
    },
    {
      id: 3,
      title: "Xdxd",
      description: "awoiwlojwwkisjhiuerthu",
      votes: 305,
      created_at: new Date(),
      creator: { name: "Juana de Arco" },
    },
  ]);

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
    <HomeContainer>
      <SearchBar />
      <QuestionContainer>
        {/* {questionFeed.map((question) => (
          <QuestionPreview key={question.id} question={question} />
        ))} */}
        <Link route='question' params={{id: questioneses[0].id.toString()}}>
          <QuestionPreview question={questioneses[0]} />
        </Link>
        <Link route='question' params={{id: questioneses[1].id.toString()}}>
          <QuestionPreview question={questioneses[1]} />
        </Link>
        <Link route='question' params={{id: questioneses[2].id.toString()}}>
          <QuestionPreview question={questioneses[2]} />
        </Link>
      </QuestionContainer>
      {currentUser && (
        <CreateQuestionModal
          currentUser={currentUser}
          showCreateQuestionModal={showCreateQuestionModal}
          toggleModal={() =>
            setShowCreateQuestionModal(!showCreateQuestionModal)
          }
        />
      )}
    </HomeContainer>
  );
};

export default withCurrentUser(HomePage);

const HomeContainer = styled.div`
  ${tw`flex flex-col items-center`}
`;

const QuestionContainer = styled.div`
  ${tw`flex flex-col items-center max-w-full`}
`;
