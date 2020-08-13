import React from "react";
import { CurrentUserConsumer } from "./CurrentUserContext";

const withCurrentUser = (Component) => (props) => (
  <CurrentUserConsumer>
    {({ currentUser, logout, setCurrentUser }) => (
      <Component
        {...props}
        currentUser={currentUser}
        logout={logout}
        setCurrentUser={setCurrentUser}
      />
    )}
  </CurrentUserConsumer>
);

export default withCurrentUser;
