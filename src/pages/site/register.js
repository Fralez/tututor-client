import React from "react";
import { NextSeo } from "next-seo";
import Layout from "../../layout/Layout";
import RegisterPage from "../../components/site/RegisterPage";

class Register extends React.Component {
  render() {
    return (
      <Layout>
        <NextSeo
          title="Registro"
          description="¡Registrate y empieza a navegar en la mejor red de tutorías!"
        />
        <RegisterPage />
      </Layout>
    );
  }
}

export default Register;
