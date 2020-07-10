import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Dropdown from "react-dropdown";

const Filter = () => {

  const ops = [{ value: 0, label: "Más Reciente" },{ value: 1, label: "menos Reciente" } ];

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
  ${tw`relative text-right md:mr-12`}
`;

const CustomDropdown = styled(Dropdown)`
  .Dropdown-control {
    ${tw`w-32 md:w-40 pr-8 border-none block relative rounded-md text-xs md:text-sm leading-5 shadow-none`}
  }

  .Dropdown-menu {
    ${tw`rounded-b-md border border-gray-300 text-sm md:text-base`}
  }
`;
