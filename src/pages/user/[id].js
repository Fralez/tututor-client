import React, { useState, useEffect } from "react";
import Error from "next/error";
import { NextSeo } from "next-seo";
import Layout from "../../layout/Layout";
import UserIdPage from "../../components/pages/user/User[id]Page";
import { useRouter } from "next/router"

import api from "@/src/api";

const User = ({ currentUser, errorCode }) => {

    let user = getUser()
    if (errorCode) {
        return <Error statusCode={errorCode} />;
    }

    const name = user.name;
    return (
        <Layout>
            <NextSeo title={name} description="{description}" />
            <UserIdPage />
        </Layout>
    );
};

export default User;

async function getUser() {
    const { users } = api();
    const Router = useRouter()
    const id = Router.query
    console.log(id)

    // Fetch user
    let user = null;
    let errorCode = false;
    try {
        const res = await users.show(id);

        user = res.data.question;
    } catch (error) {
        errorCode = error.response.status;
    }

    return user
};

