import React from "react";
import { CurrentUserConsumer } from "./CurrentUserContext";

const withCurrentUser = (Component) => (props) => (
  <CurrentUserConsumer>
    {({ currentUser, logout }) => (
      <Component
        {...props}
        currentUser={currentUser}
        logout={logout}
      />
    )}
  </CurrentUserConsumer>
);

export default withCurrentUser;
