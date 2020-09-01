import React from "react";
import Error from "next/error";
import { NextSeo } from "next-seo";
import Layout from "../../layout/Layout";
import InstitutionIdPage from "../../components/pages/institution/Institution[id]Page";

import api from "@/src/api";

const Institution = ({ institution, errorCode }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  const { name, description } = institution;
  return (
    <Layout>
      <NextSeo title={name} description={description} />
      <InstitutionIdPage institution={institution} />
    </Layout>
  );
};

export default Institution;

export async function getServerSideProps(context) {
  const { institutions } = api();

  // Fetch institutions
  let institution = null;
  let errorCode = false;
  try {
    const id = context.params.id;
    const res = await institutions.show(id, context.req.headers.cookie);

    institution = res.data.institution;
  } catch (error) {
    errorCode = error.response.status;
  }

  return {
    props: {
      errorCode,
      institution,
    }, // Will be passed to the page component as props
  };
}
