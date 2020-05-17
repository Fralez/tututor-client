import React from "react";
import jwtDecode from "jwt-decode";
import api from "@/src/api";
import { CurrentUserProvider } from "@/lib/CurrentUserContext";
import { Router } from "@/config/routes";

export default function withSiteLayout(ChildComponent) {
  return class SiteLayout extends React.Component {
    state = {
      currentUser: null,
    };

    logout = () => {
      localStorage.removeItem("user-jwt");
      localStorage.removeItem("user");
      this.setState({ currentUser: {} });
      Router.reload();
    };

    componentDidMount() {
      const user = localStorage.getItem("user");
      if (user) {
        this.setState({ currentUser: JSON.parse(user) });
      } else {
        const token = localStorage.getItem("user-jwt");
        if (token) {
          const { users } = api();
          const payload = jwtDecode(token);
          users.show(token, payload.user_id).then((res) => {
            this.setState({ currentUser: res.data.user });
            localStorage.setItem("user", JSON.stringify(res.data.user));
          });
        }
      }
    }

    render() {
      return (
        <CurrentUserProvider
          value={{
            currentUser: this.state.currentUser,
            logout: this.logout,
          }}
        >
          <ChildComponent {...this.props} />
        </CurrentUserProvider>
      );
    }
  };
}
