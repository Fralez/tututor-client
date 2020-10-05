import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

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
    </List>
  );
};

export default UserList;

const List = styled.div`
  ${tw`w-10/12 md:w-1/4 overflow-y-scroll`}
  background: ${(props) => props.theme.colors.whiteLavander.normal};
`;
