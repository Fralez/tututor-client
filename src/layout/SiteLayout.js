import React from "react";
import jwtDecode from "jwt-decode";
import api from "@/src/api";
import { CurrentUserProvider } from "@/lib/CurrentUserContext";

export default function withSiteLayout(ChildComponent) {
  return class SiteLayout extends React.Component {
    state = {
      currentUser: {},
    };

    logout = () => {
      localStorage.removeItem("user-jwt");
      this.setState({ currentUser: {} });
    };

    componentDidMount() {
      const token = localStorage.getItem("user-jwt");
      if (token) {
        const { users } = api();
        const payload = jwtDecode(token);
        users.show(token, payload.user_id).then((res) => {
          this.setState({ currentUser: res.data.user });
        });
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
