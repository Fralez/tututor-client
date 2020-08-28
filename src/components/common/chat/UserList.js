import React, { useState, useEffect } from "react";
import styled from "styled-components";

import api from "@/src/api";

import ChatUser from "./ChatUser";

const UserList = ({ currentUser, selectedUserId, setSelectedUserId }) => {
  const [userList, setUserList] = useState([]);

  const { users } = api();

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    try {
      const res = await users.index();
      if (res.status == 200) {
        // Set user list
        setUserList(res.data);
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <List className=" divide-white">
      {userList.map(
        (user) =>
          currentUser.id != user.id && (
            <ChatUser
              key={user.id}
              user={user}
              handleSelect={() => setSelectedUserId(user.id)}
              selectedUserId={selectedUserId}
            />
          )
      )}
      {/* <ChatUser
        name={"Frankito"}
        lastMessage={"Hola soy Frankito todo bien?"}
      />
      <ChatUser name={"Pepito"} lastMessage={"Hola soy Casuelita"} />
      <ChatUser
        name={"Casuelita"}
        lastMessage={"Hola Casuelitaa, me escribiste por Pepito?"}
      /> */}
    </List>
  );
};

export default UserList;

const List = styled.div`
  flex: 2;
  background: ${(props) => props.theme.colors.whiteLavander.normal};
`;
