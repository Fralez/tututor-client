import React from "react";
import styled from "styled-components";

import ChatUser from "./ChatUser";

const UserList = () => {
  return (
    <List className=" divide-white">
      <ChatUser name={"Frankito"} lastMessage={"Hola soy Frankito todo bien?"} />
      <ChatUser name={"Pepito"} lastMessage={"Hola soy Casuelita"} />
      <ChatUser name={"Casuelita"} lastMessage={"Hola Casuelitaa, me escribiste por Pepito?"} />
    </List>
  );
};

export default UserList;

const List = styled.div`
  flex: 2;
  background: ${(props) => props.theme.colors.blueBaby.normal};
`;
