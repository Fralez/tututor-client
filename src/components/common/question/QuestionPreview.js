import React /* , { useState, useEffect } */ from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Moment from "react-moment";
import { useRouter } from "next/router";

import { Star } from "@material-ui/icons";

const QuestionPreview = ({
  question: { id, title, description, votes, created_at, creator, category },
}) => {
  const Router = useRouter();

  // const [saveClciked, setSaveClciked] = useState(false);

  // const handleSaveButton = () => {
  //   saveClciked ? setSaveClciked(false) : setSaveClciked(true);
  // };

  return (
    <QuestionPrevContainer>
      <User onClick={() => Router.push(`/user/${creator.id}`)}>
        <PorfileImgCon>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
            alt="Profile img"
          ></img>
        </PorfileImgCon>
        <UserInfo>
          <Name>{creator.name}</Name>
          {/* <Subtitle>ÁNIMA - Bachillerato tecnológico</Subtitle> */}
        </UserInfo>
      </User>
      <Preview onClick={() => Router.push(`/question/${id}`)}>
        <DateView to={created_at} />
        <InfoCon>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <SaveVotesCon>
            <VotesCon>
              <StarIcon />
              <Votes>{votes}</Votes>
            </VotesCon>
          </SaveVotesCon>
          {category && (
            <ContainerCategory>
              <Category>{category.title}</Category>
            </ContainerCategory>
          )}
        </InfoCon>
      </Preview>
    </QuestionPrevContainer>
  );
};

export default QuestionPreview;

const QuestionPrevContainer = styled.div`
  ${tw`w-full flex flex-col items-center relative`}
  max-width: 100%;
`;

const Preview = styled.div`
  ${tw`cursor-pointer w-full rounded-md p-6 my-4 md:my-6 border-solid border border-gray-300 flex flex-col justify-center`}
`;

const PorfileImgCon = styled.div`
  ${tw`h-8 w-8 md:w-10 md:h-10`}
`;

const User = styled.div`
  ${tw`cursor-pointer flex absolute mt-8 md:mt-12 ml-8 left-0`}
`;

const UserInfo = styled.div`
  ${tw`ml-2 flex flex-col justify-center mt-2`}
`;

const Name = styled.div`
  ${tw`text-sm text-gray-700`}
`;

// const Subtitle = styled.div`
//   ${tw`text-xs text-gray-500 mt-1`}
// `;

const DateView = styled(Moment)`
  ${tw`text-xs w-auto ml-auto text-right text-gray-700`}
`;

const InfoCon = styled.div`
  ${tw`flex flex-col`}
  margin-top: 2%;
`;

const Title = styled.div`
  ${tw`text-xl md:text-2xl mb-2 mt-2 md:mt-4 font-medium w-5/6`}
  color: ${(props) => props.theme.colors.violetBlue.normal}
`;

const Description = styled.div`
  ${tw`text-sm w-11/12 text-gray-800 truncate max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl`}
`;

const SaveVotesCon = styled.div`
  ${tw`ml-auto flex`}
`;

const Votes = styled.div`
  ${tw`text-xl text-gray-800 font-semibold`}
`;
const StarIcon = styled(Star)`
  color: ${(props) => props.theme.colors.yellowMustard.normal};
`;

const VotesCon = styled.div`
  ${tw`flex`}
`;

const ContainerCategory = styled.div`
  ${tw`inline-block  ml-auto`}
  width: fit-content;
`;

const Category = styled.div`
  ${tw`p-2 border-solid border-2 rounded-full h-6 text-xs md:text-sm flex justify-center items-center mt-2`}
  border-color: ${(props) => props.theme.colors.violetBlue.normal};
  color: ${(props) => props.theme.colors.violetBlue.normal};
`;
