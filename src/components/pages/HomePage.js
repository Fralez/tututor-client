import React, { useEffect, useState } from "react";
import { Link } from "@/config/routes";
import withCurrentUser from "@/lib/withCurrentUser";

const HomePage = ({ currentUser, logout }) => {
  return (
    <div>
      <Link route="register">
        <a>Goto Register</a>
      </Link>
      <Link route="login">
        <a>Goto Login</a>
      </Link>
      <button onClick={logout}>Logout</button>
      <div>User: {currentUser.email}</div>
    </div>
  );
};

export default withCurrentUser(HomePage);
