import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import UserPreview from "../../common/ranking/RankingUserPreview";

const Ranking = ({ users }) => {
  return (
    <RankignContainer>
      <TitleRanking>Ranking</TitleRanking>
      {users.map((user, index) => (
        <UserPreview key={user.id} user={user} index={index}/>
      ))}
    </RankignContainer>
  );
};

export default Ranking;

const RankignContainer = styled.div`
  ${tw`w-full flex flex-col items-center`}
`;

const TitleRanking = styled.h1`
  ${tw`text-3xl ml-8 mt-4 md:mt-8 font-medium w-5/6 mb-6`}
  color: ${(props) => props.theme.colors.violetBlue.normal}
`;