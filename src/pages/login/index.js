import React from "react";
import { NextSeo } from "next-seo";
import Layout from "../../layout/Layout";
import LoginPage from "../../components/pages/LoginPage";

class Login extends React.Component {
  render() {
    return (
      <Layout>
        <NextSeo
          title="Iniciar sesión"
          description="¡Inicia sesión y empieza a navegar en la mejor red de tutorías!"
        />
        <LoginPage />
      </Layout>
    );
  }
}

export default Login;
