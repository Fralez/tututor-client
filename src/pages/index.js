import React from "react";
import { NextSeo } from "next-seo";
import Layout from "../layout/Layout";
import IndexPage from "../components/site/IndexPage";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <NextSeo
          title="Home"
          description="¡Bienvenido a TuTutor! Una plataforma donde podrás realizar intercambios educativos con personas de todas partes."
        />
        <IndexPage />
      </Layout>
    );
  }
}

export default Index;
