import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { useRouter } from "next/router";

import api from "@/src/api";

import { Person, Star } from "@material-ui/icons";

const UserTile = ({
  user,
  institutionId,
  isCreator = false,
  showMakeCreator = false,
}) => {
  const Router = useRouter();

  const { institutions } = api();

  const makeCreator = async () => {
    try {
      const res = await institutions.updateCreator(institutionId, user.id);
      if (res.status == 201) {
        Router.reload();
      }
    } catch (error) {}
  };

  return (
    <Container>
      <div>
        <PersonIcon />
        {user.name}
        {isCreator && <AdminIdentifier> (Admin)</AdminIdentifier>}
      </div>
      {showMakeCreator && (
        <MakeCreatorButton onClick={makeCreator}>
          <ContainerFlat>
            <StarIcon />
            Hacer Admin
          </ContainerFlat>
        </MakeCreatorButton>
      )}
    </Container>
  );
};

export default UserTile;

const Container = styled.div`
  ${tw`flex mt-2 items-center justify-between flex-wrap`}
`;

const ContainerFlat = styled.div`
  ${tw`flex items-center justify-center`}
`;

const PersonIcon = styled(Person)`
  ${tw`mr-2`}
  color: ${(props) => props.theme.colors.violetBlue.light};
`;

const StarIcon = styled(Star)`
  color: white;
`;

const AdminIdentifier = styled.span`
  ${tw`font-bold`}
`;

const MakeCreatorButton = styled.button`
  ${tw`bg-yellow-500 hover:bg-yellow-600 text-white text-center font-bold py-2 px-4 rounded my-2`}
`;
