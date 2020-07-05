import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import api from "@/src/api";
import { CurrentUserProvider } from "@/lib/CurrentUserContext";
import { withRouter } from "next/router";

export default function withSiteLayout(ChildComponent) {
  return withRouter(({ router, ...rest }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const logout = () => {
      localStorage.removeItem("user-jwt");
      setCurrentUser(null);
      router.reload();
    };

    const fetchUser = () => {
      const token = localStorage.getItem("user-jwt");
      if (!currentUser && token) {
        const { users } = api();
        const payload = jwtDecode(token);
        users.show(token, payload.user_id).then((res) => {
          if (res.status == 200) {
            setCurrentUser(res.data.user);
          } else {
            logout();
          }
        });
      }
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
