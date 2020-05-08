import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const Preview = styled.div`
    ${tw`w-4/5`}
`;

const QuestionPreview = () => {
  return (
    <Preview>
      <div className="user">
        <div className="pic">
          <img></img>
        </div>
        <div className="info">
          <div>Pepe Perez</div>
          <div>ÁNIMA - Bachillerato tecnológico</div>
        </div>
      </div>
      <div className="date">{`${new Date()}`}</div>
      <div className="title">How do I create a HTML page?</div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </Preview>
  );
};

export default QuestionPreview;
