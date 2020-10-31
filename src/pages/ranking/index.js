import React from "react"
import Error from "next/error";
import { NextSeo } from "next-seo";
import Layout from "../../layout/Layout";
import RankingView from "../../components/pages/ranking";

import api from "@/src/api";

const Ranking = ({users, errorCode}) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <Layout>
      <NextSeo
        title="Ranking"
        description="¡Descubre el ranking de usuarios de TuTutor!"
      />
      <RankingView users={users}/>
    </Layout>
  );
}

export default Ranking

export async function getServerSideProps(context) {
  const { users } = api();

  // Fetch institutions
  let allUsers = null;
  let errorCode = false;
  try {
    const res = await users.usersByRanking();

    allUsers = res.data;
  } catch (error) {
    errorCode = error.response.status;
  }

  return {
    props: {
      errorCode,
      users: allUsers,
    }, // Will be passed to the page component as props
  };
}