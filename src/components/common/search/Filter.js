import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Dropdown from "react-dropdown";

const Filter = ({onFilterSelection}) => {

  const ops = [{ value: 0, label: "Más Reciente" }, { value: 1, label: "Menos Reciente" } ];

  const [selected, setSelected] = useState(ops[0]);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    onFilterSelection(selectedOption);
  }

  return (
    <ContainerDropdown>
      <CustomDropdown
        value={selected}
        placeholder="Filtro"
        options={ops}
        onChange={handleChange}
      />
    </ContainerDropdown>
  );
};

export default Filter;

const ContainerDropdown = styled.div`
  ${tw`flex w-10/12`}
`;

const CustomDropdown = styled(Dropdown)`
  ${tw`ml-auto`}
  .Dropdown-control {
    ${tw`border-none rounded-md text-xs md:text-sm leading-5 shadow-none`}
  }

  .Dropdown-menu {
    ${tw`rounded-b-md border border-gray-300 text-sm md:text-base mr-3`}
  }
`;
