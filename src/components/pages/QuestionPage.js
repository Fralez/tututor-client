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
  AddCircleOutlined
} from "@material-ui/icons";
import AnswersList from "../common/answer/AnswersList";
import Moment from 'react-moment';

const QuestionPage = (id) => {

  const [questioneses, setQuestioneses] = useState([
    {
      id: 1,
      title: "tu",
      description: "isjhiuerthu",
      votes: 300,
      created_at: new Date,
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
            <Name>{questioneses[0].name}</Name>
            {/* <Subtitle>ÁNIMA - Bachillerato tecnológico</Subtitle> */}
          </UserInfo>
          <DateView to={questioneses[0].created_at}></DateView>
          {/* <DropdownButton>
            <DropdownIcon />
          </DropdownButton> */}
        </User>
        <Title>{questioneses[0].title}</Title>
        <Description>
          {questioneses[0].description}
        </Description>
        <IconsCon>
          <Punctuation>
            <ArrowLeft onClick={less} />
            <StarIcon />
            <Score>{questioneses[0].votes}</Score>
            <ArrowRight onClick={more} />
          </Punctuation>
          {/* <CommentButton>
            <CommentIcon />
          </CommentButton>
          <SaveButton onClick={handleSaveButton}>
            {saveClciked ? <SaveIconOn /> : <SaveIconOff />}
          </SaveButton> */}
        </IconsCon>
      </Question>
      <AnswerTitle>Answers</AnswerTitle>
      <AnswersList />
      {/* <AddAnswer>
        <AddIcon/>
        Add Answer
      </AddAnswer> */}
    </Container>
  );
};

QuestionPage.getInitialProps = async ({query: {id}}) => {
  console.log(`hola ${ctx.query}`)
  return { id: id }
}

export default QuestionPage;

const Container = styled.div`
  ${tw`w-full`}
`;

const Question = styled.div`
  ${tw`w-11/12 rounded-md p-6 mt-6 md:mt-8 mx-auto border-solid border border-gray-300 flex flex-col justify-center`}
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
  ${tw`ml-16 text-bold text-gray-800 text-2xl mt-4`}
`;

const AddAnswer = styled.button`
  ${tw`w-3/4 h-12 flex justify-center items-center rounded-md mx-auto my-8 font-semibold`}
  border: 2px solid ${(props) => props.theme.colors.pinkCyclamen.light};
  color: ${(props) => props.theme.colors.pinkCyclamen.light};
`

const AddIcon = styled(AddCircleOutlined)`
  ${tw`text-white mr-2`}
  color: ${(props) => props.theme.colors.pinkCyclamen.light};
`