import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Dropdown from "react-dropdown";

const Filter = () => {
  
  const ops = [{ value: 0, label: "Más Reciente" }];

  const [showMe, setShowMe] = useState(false);
  const [selected, setSelected] = useState(ops[0]);

  return (
    <ContainerDropdown>
      <CustomDropdown
        value={selected}
        placeholder="Filtro"
        options={ops}
        onChange={(selected) => setSelected(selected)}
      />
    </ContainerDropdown>
  );
};

export default Filter;

const ContainerDropdown = styled.div`
  ${tw`relative text-right m-4`}
`;

const CustomDropdown = styled(Dropdown)`
  .Dropdown-control {
    ${tw`w-40 pr-8 border-none block relative rounded-md sm:text-sm sm:leading-5 shadow-none`}
  }

  .Dropdown-menu {
    ${tw`rounded-b-md border border-gray-300 sm:text-sm`}
  }
`;
