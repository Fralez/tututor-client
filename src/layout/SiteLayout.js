import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import api from "@/src/api";
import { CurrentUserProvider } from "@/lib/CurrentUserContext";
import { withRouter } from "next/router";

export default function withSiteLayout(ChildComponent) {
  return withRouter(({ router, ...rest }) => {
    const { sessions } = api();
    const [currentUser, setCurrentUser] = useState(null);

    const logout = async () => {
      try {
        sessions.logout();
      } catch (error) {}
      router.reload();
    };

    const fetchUser = async () => {
      // TODO: Request logged-in
      try {
        const res = await sessions.loggedIn();
        if ((res.status = 200)) {
          setCurrentUser(res.data.user);
        } else {
          await logout();
        }
      } catch (error) {}
    };

    useEffect(() => {
      fetchUser();
    });

    return (
      <CurrentUserProvider
        value={{
          currentUser: currentUser,
          logout: logout,
        }}
      >
        <ChildComponent {...rest} />
      </CurrentUserProvider>
    );
  });
}
