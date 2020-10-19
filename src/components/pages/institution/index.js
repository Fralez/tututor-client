import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import InstitutionPreview from "../../common/institution/InstitutionPreview";

const InstitutionHome = ({ institutions }) => {
  return (
    <InstitutionContainer>
      <TitleInstitution>Instituciones</TitleInstitution>
      {institutions.map((institution) => (
        <InstitutionPreview key={institution.id} institution={institution} />
      ))}
    </InstitutionContainer>
  );
};

export default InstitutionHome;

const InstitutionContainer = styled.div`
  ${tw`w-full flex flex-col items-center`}
`;

const TitleInstitution = styled.h1`
  ${tw`text-3xl ml-8 mt-4 md:mt-8 font-medium w-5/6`}
  color: ${(props) => props.theme.colors.violetBlue.normal}
`;
