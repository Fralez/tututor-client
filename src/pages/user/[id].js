import React, { useState, useEffect } from "react";
import Error from "next/error";
import { NextSeo } from "next-seo";
import Layout from "../../layout/Layout";
import UserIdPage from "../../components/pages/user/User[id]Page";
import { useRouter } from "next/router"

import api from "@/src/api";

const User = ({ errorCode, user }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  const { name } = user;
  return (
    <Layout>
      <NextSeo title={name} description={`Perfil de usuario de ${name}.`} />
      <UserIdPage user={user}/>
    </Layout>
  );
};

export default User;

export async function getServerSideProps(context) {
  const { users } = api();

  // Fetch question
  let user = null;
  let errorCode = false;
  try {
    const id = context.params.id;
    const res = await users.show(id);

    user = res.data.user;
  } catch (error) {
    errorCode = error.response.status;
  }

  return {
    props: {
      errorCode,
      user,
    }, // Will be passed to the page component as props
  };
}
