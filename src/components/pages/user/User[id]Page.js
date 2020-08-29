import React from "react"
import { useRouter } from "next/router";

const UserIdPage = ({ user }) => {
  const Router = useRouter();
  return (
    <div>
      {user.name}
    </div>
  )
}

export default UserIdPage