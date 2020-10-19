import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Moment from "react-moment";
import Link from "next/link";

import { Apartment } from "@material-ui/icons";

const InstitutionPreview = ({
  institution: { id, name, email, description, created_at, address, creator },
}) => {
  return (
    <InstitutionPrevContainer>
      <Link passHref href={`/user/${creator}`}>
        <Institution>
          <PorfileImgCon>
            <ProfilePic />
          </PorfileImgCon>
          <InstitutionInfo>
            <Name>{email}</Name>
          </InstitutionInfo>
        </Institution>
      </Link>
      <Link passHref href={`/institution/${id}`}>
        <Preview>
          <DateView to={created_at} />
          <InfoCon>
            <Title>{name}</Title>
            <Description>{description}</Description>
          </InfoCon>
          <ContainerCategory>
            <Category>{address}</Category>
          </ContainerCategory>
        </Preview>
      </Link>
    </InstitutionPrevContainer>
  );
};

export default InstitutionPreview;

const InstitutionPrevContainer = styled.div`
  ${tw`w-4/5 flex flex-col items-center relative`}
  max-width: 80%;
`;

const Preview = styled.a`
  ${tw`cursor-pointer w-full rounded-md p-6 my-4 md:my-6 border-solid border border-gray-300 flex flex-col justify-center`}
`;

const PorfileImgCon = styled.div`
  ${tw`h-8 w-8 md:w-10 md:h-10`}
`;

const Institution = styled.a`
  ${tw`cursor-pointer flex items-center absolute mt-8 md:mt-12 ml-5 left-0`}
`;

const InstitutionInfo = styled.div`
  ${tw`ml-2 flex flex-col justify-center mt-2`}
`;

const Name = styled.div`
  ${tw`text-sm text-gray-700`}
`;

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

const ProfilePic = styled(Apartment)`
  color: ${(props) => props.theme.colors.blueBaby.normal};
  width: 45px !important;
  height: 45px !important;
`;

const ContainerCategory = styled.div`
  ${tw`inline-block  ml-auto`}
  width: fit-content;
`;

const Category = styled.div`
  ${tw`p-2 h-6 text-xs md:text-sm flex justify-center items-center mt-2`}
  border-color: ${(props) => props.theme.colors.violetBlue.normal};
  color: ${(props) => props.theme.colors.violetBlue.normal};
`;
