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
      this.setState({ currentUser: null });
      Router.reload();
    };

    fetchUser = () => {
      const token = localStorage.getItem("user-jwt");
      if (!this.currentUser && token) {
        const { users } = api();
        const payload = jwtDecode(token);
        users.show(token, payload.user_id).then((res) => {
          if (res.status == 200) {
            this.setState({ currentUser: res.data.user });
          } else {
            logout();
          }
        });
      }
    };

    componentDidMount() {
      this.fetchUser();
    }

    componentDidUpdate() {
      this.fetchUser();
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
