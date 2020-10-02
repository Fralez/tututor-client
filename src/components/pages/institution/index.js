import React from "react";

const InstitutionHome = ({ institutions }) => {
  return (
    <>
      {institutions.map((institution) => (
        <div key={institution.id}>{institution.name}</div>
      ))}
    </>
  );
};

export default InstitutionHome;
