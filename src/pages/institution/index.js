import React from "react";
import Error from "next/error";
import { NextSeo } from "next-seo";
import Layout from "../../layout/Layout";
import InstitutionHome from "../../components/pages/institution";

import api from "@/src/api";

const InstitutionsPage = ({ institutions, errorCode }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <Layout>
      <NextSeo
        title="Instituciones"
        description="¡Descubre las instituciones que forman parte de TuTutor!"
      />
      <InstitutionHome institutions={institutions} />
    </Layout>
  );
};

export default InstitutionsPage;

export async function getServerSideProps(context) {
  const { institutions } = api();

  // Fetch institutions
  let allInstitutions = null;
  let errorCode = false;
  try {
    const res = await institutions.index();

    allInstitutions = res.data;
  } catch (error) {
    errorCode = error.response.status;
  }

  return {
    props: {
      errorCode,
      institutions: allInstitutions,
    }, // Will be passed to the page component as props
  };
}
