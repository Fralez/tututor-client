import React, { useEffect, useState } from "react";
import { Link } from "@/config/routes";
import QuestionList from '../common/question/QuestionList'

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
      <QuestionList/>

    </div>
  );
};

export default HomePage;
