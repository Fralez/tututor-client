import React, { useEffect, useState } from "react";
import { Link } from "@/config/routes";
import withCurrentUser from "@/lib/withCurrentUser";
import Navbar from "@/src/components/common/Navbar"


const HomePage = ({ currentUser, logout, ...props }) => {
  return (
    <>
      <Navbar currentUser={currentUser}/>
    </>
  );
};

export default withCurrentUser(HomePage);
