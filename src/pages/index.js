import React from "react";
import { NextSeo } from "next-seo";
import Layout from "../layout/Layout";
import HomePage from "../components/pages/HomePage";

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <NextSeo
          title="Home"
          description="¡Bienvenido a TuTutor! Una plataforma donde podrás realizar intercambios educativos con personas de todas partes."
        />
        <HomePage />
      </Layout>
    );
  }
}

export default Home;
