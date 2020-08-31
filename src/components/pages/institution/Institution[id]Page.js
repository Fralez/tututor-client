import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import Layout from "../../layout/Layout";

import { AlternateEmail, LocationOn, Info, Apartment } from "@material-ui/icons";

const InstitutionIdPage = () => {
  return (
      <Layout>
        <InstitutionContainer>
          <InstitutionPerfil>
            <ProfilePic />
              <Name>ÁNIMA - Bachillerato tecnológico</Name>
          </InstitutionPerfil>
          <InstitutionInfo>
            <EmailContainer>
              <EmailIcon />
              admin@anima.edu.uy
            </EmailContainer>
            <LocationContainer>
              <LocationIcon />
              Canelones 1162
            </LocationContainer>
            <DescriptionContainer>
              <DescriptionIcon />
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </Description>
            </DescriptionContainer>
          </InstitutionInfo>
        </InstitutionContainer>
      </Layout>
  );
};

export default InstitutionIdPage;

const InstitutionContainer = styled.div`
  ${tw`flex flex-col px-4 w-full md:w-2/6 border-r border-solid border-gray-300 overflow-scroll h-screen shadow-lg`}
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
  ${tw`flex mt-2`}
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
