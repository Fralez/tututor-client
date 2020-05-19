import React /* , { useState, useEffect } */ from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Moment from 'react-moment';

import { Star, /* BookmarkBorder, Bookmark, */  } from "@material-ui/icons";


const descript =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const QuestionPreview = ({
  question: {
    title,
    description,
    votes,
    created_at,
    creator: { name },
  },
}) => {
  // const [saveClciked, setSaveClciked] = useState(false);

  // const handleSaveButton = () => {
  //   saveClciked ? setSaveClciked(false) : setSaveClciked(true);
  // };

  return (
    <Preview>
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
      </User>
      <InfoCon>
        <Title>{title}</Title>
        <Description>
          {description}
        </Description>
        <SaveVotesCon>
          <VotesCon>
            <StarIcon />
            <Votes>{votes}</Votes>
          </VotesCon>
          {/* <SaveButton onClick={handleSaveButton}>
            {saveClciked ? <SaveIconOn /> : <SaveIconOff />}
          </SaveButton> */}
        </SaveVotesCon>
      </InfoCon>
    </Preview>
  );
};

export default QuestionPreview;

const Preview = styled.div`
  ${tw`cursor-pointer w-4/5 rounded-md p-6 my-4 md:my-6 border-solid border border-gray-300 flex flex-col justify-center`}
  max-width: 80%;
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

/* const SaveButton = styled.div`
  ${tw`ml-4`}
`;

const SaveIconOff = styled(BookmarkBorder)`
  ${tw`text-2lg cursor-pointer`}
  transform: scale(1.5);
  color: ${(props) => props.theme.colors.pinkCyclamen.light};
`;

const SaveIconOn = styled(Bookmark)`
  ${tw`text-2lg cursor-pointer`}
  transform: scale(1.5);
  color: ${(props) => props.theme.colors.pinkCyclamen.light};
`; */

const Votes = styled.div`
  ${tw`text-xl text-gray-800 font-semibold`}
`;
const StarIcon = styled(Star)`
  color: ${(props) => props.theme.colors.yellowMustard.normal};
`;

const VotesCon = styled.div`
  ${tw`flex`}
`;