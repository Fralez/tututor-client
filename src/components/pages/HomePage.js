import React, { useEffect, useState } from "react";
import { Link } from "@/config/routes";

const HomePage = () => {
  const [jwt, setJwt] = useState("");
  useEffect(() => {
    setJwt(localStorage.getItem("user-jwt"));
  });

  return (
    <div>
      <Link route="register">
        <a>Goto Register</a>
      </Link>
      <Link route="login">
        <a>Goto Login</a>
      </Link>
      <div>JWT: {jwt}</div>
    </div>
  );
};

export default HomePage;
