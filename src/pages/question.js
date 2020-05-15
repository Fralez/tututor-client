import React from 'react'
import QuestionPage from '../components/pages/QuestionPage'
import { NextSeo } from "next-seo";
import Layout from "../layout/Layout";

class Question extends React.Component {
    render() {
      return (
        <Layout>
          <NextSeo
            title="Ver Pregunta"
            description="¡Ve más información de la pregunta que más te interesó!"
          />
          <QuestionPage />
        </Layout>
      );
    }
  }
  
  export default Question;