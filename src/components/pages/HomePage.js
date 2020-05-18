import React, { useState } from "react";
import withCurrentUser from "@/lib/withCurrentUser";
import CreateQuestion from "../common/CreateQuestion";

const HomePage = ({ currentUser }) => {
  const [showCreateQuestionModal, setShowCreateQuestionModal] = useState(false);

  return (
    <>
      {currentUser && (
        <CreateQuestion
          currentUser={currentUser}
          showCreateQuestionModal={showCreateQuestionModal}
          toggleModal={() =>
            setShowCreateQuestionModal(!showCreateQuestionModal)
          }
        />
      )}
    </>
  );
};

export default withCurrentUser(HomePage);
