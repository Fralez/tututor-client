import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import { EmojiObjects } from "@material-ui/icons";

const RankingUserPreview = ({
  user: { id, email, name, reputation },
  index,
}) => {
  return (
    <UserPreviewContainer>
      <Ranking>{index + 1}</Ranking>
      <UserInfo>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
      </UserInfo>
      <Reputation>
        <LightBulbIcon />
        <div>{reputation}</div>
      </Reputation>
    </UserPreviewContainer>
  );
};

export default RankingUserPreview;

const UserPreviewContainer = styled.div`
  ${tw`w-4/5 md:w-1/2 h-12 flex items-center mb-4 relative rounded-md border-solid border border-gray-300`}
`;

const Ranking = styled.div`
  ${tw`ml-6 flex justify-center font-extrabold mr-6 items-center`}
  color: ${(props) => {props.theme.colors.violetBlue.normal}};
  font-size: 1.125rem;
`;

const UserInfo = styled.div`
  ${tw`w-full flex items-center`}
`;

const UserName = styled.div`
  ${tw`mr-8`}
`;

const UserEmail = styled.div`
  ${tw`text-gray-600 hidden md:block`}
`;

const Reputation = styled.div`
  ${tw`ml-auto mr-8 flex items-center`}
` 

const LightBulbIcon = styled(EmojiObjects)`
  ${tw``}
  color: ${(props) => props.theme.colors.yellowMustard.normal};
  width: 2rem !important;
  height: 2rem !important;
`;
