import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import api from "@/src/api";

import QuestionPreview from "@/src/components/common/question/QuestionPreview";
import SearchBar from "../../common/search/SearchBar";

import {
  AlternateEmail,
  LocationOn,
  Info,
  Apartment,
} from "@material-ui/icons";

const InstitutionIdPage = ({
  institution: { id, name, email, description, address },
}) => {
  const { questions } = api();

  const [questionFeed, setQuestionFeed] = useState([]);

  const getQuestionFeed = async () => {
    try {
      const res = await questions.index(id);
      if (res.status == 200) {
        setQuestionFeed(res.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getQuestionFeed();
  }, []);

  return (
    <>
      <Container>
        <InstitutionContainer>
          <InstitutionPerfil>
            <ProfilePic />
            <Name>{name}</Name>
          </InstitutionPerfil>
          <InstitutionInfo>
            <EmailContainer>
              <EmailIcon />
              {email}
            </EmailContainer>
            <LocationContainer>
              <LocationIcon />
              {address}
            </LocationContainer>
            <DescriptionContainer>
              <DescriptionIcon />
              <Description>
                {description ? description : "Sin descripción"}
              </Description>
            </DescriptionContainer>
          </InstitutionInfo>
        </InstitutionContainer>
        <SearchBarQuestionsContainer>
          <SearchBar />
          <QuestionContainer>
            {questionFeed.map((question) => (
              <QuestionPreview key={question.id} question={question} />
            ))}
          </QuestionContainer>
        </SearchBarQuestionsContainer>
      </Container>
    </>
  );
};

export default InstitutionIdPage;

const Container = styled.div`
${tw`flex md:flex-row flex-col md:items-center md:h-full`}
`;

const InstitutionContainer = styled.div`
  ${tw`flex flex-col px-4 w-full border-r border-solid border-gray-300 overflow-scroll pb-4 md:w-2/6 md:h-full`}
`;

const InstitutionPerfil = styled.div`
  ${tw`flex flex-col items-center mb-4 mt-4`}
`;

const ProfilePic = styled(Apartment)`
  ${tw``}
  color: ${(props) => props.theme.colors.blueBaby.normal};
  width: 130px !important;
  height: 130px !important;
`;

const Name = styled.h5`
  ${tw`text-xl mt-2 font-semibold text-center`}
  color: ${(props) => props.theme.colors.violetBlue.light};
`;

const EmailIcon = styled(AlternateEmail)`
  ${tw`mr-2`}
  color: ${(props) => props.theme.colors.violetBlue.light};
`;

const LocationContainer = styled.div`
  ${tw`flex mt-2`}
`;

const LocationIcon = styled(LocationOn)`
  ${tw`mr-2`}
  color: ${(props) => props.theme.colors.violetBlue.light};
`;

const DescriptionContainer = styled.div`
  ${tw`flex mt-2 italic`}
`;

const DescriptionIcon = styled(Info)`
  ${tw`mr-2`}
  color: ${(props) => props.theme.colors.violetBlue.light};
`;

const Description = styled.h3`
  ${tw`text-justify`}
`;

const InstitutionInfo = styled.div`
  ${tw`w-full`}
`;

const EmailContainer = styled.div`
  ${tw`flex`}
`;

const QuestionContainer = styled.div`
  ${tw`flex items-center w-4/5 flex-col`}
`;

const SearchBarQuestionsContainer = styled.div`
  ${tw`flex flex-col items-center w-full md:h-full`}
`;
