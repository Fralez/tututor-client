import React from "react"
import { useRouter } from "next/router";
import withCurrentUser from "@/lib/withCurrentUser";

const UserIdPage = ({ currentUser }) => {
    const Router = useRouter();
    return (
        <div>
            Holaaa
        </div>
    )
}

export default withCurrentUser(UserIdPage)