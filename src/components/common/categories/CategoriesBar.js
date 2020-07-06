import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "tailwind.macro";
import {
  Functions,
  People,
  AccountBalance,
  Public,
  AccountBalanceWallet,
  Devices,
  Eco,
  Gavel,
  Message,
} from "@material-ui/icons";

const Categories = () => {
  const [selected, setSelected] = useState("");
  const categoriesList = [
    { name: "Matemáticas", icon: <Functions /> },
    { name: "Ciencia Sociales", icon: <People /> },
    { name: "Historia", icon: <AccountBalance /> },
    { name: "Geografía", icon: <Public /> },
    { name: "Administración", icon: <AccountBalanceWallet /> },
    { name: "TIC", icon: <Devices /> },
    { name: "Biología", icon: <Eco /> },
    { name: "Derecho", icon: <Gavel /> },
    { name: "Lengua", icon: <Message /> },
  ];
  return (
    <CategoriesContainer>
      {categoriesList.map((category, iconIndex) => {
        return (
          <Category
            onClick={() => setSelected(category.name)}
            isSelected={selected == category.name}
          >
            <Clickable>
              {category.icon}
              <NameCategory>{category.name}</NameCategory>
            </Clickable>
          </Category>
        );
      })}
    </CategoriesContainer>
  );
};

export default Categories;

const Category = styled.div`
  ${tw`w-32 h-16 flex justify-center items-center rounded`}
  transition: 0.5s;
  min-width: 8rem;
  &:hover {
    ${tw`bg-gray-100`}
  }
  ${(props) =>
    props.isSelected &&
    css`
      background: #EDF2F7
    `}
  ${({ active }) =>
    active &&
    `
    bg-gray-100
    `}
`;

const CategoriesContainer = styled.div`
  ${tw`w-11/12 md:h-8 h-6 flex justify-around mb-8`}
`;

const NameCategory = styled.p`
  ${tw`md:text-sm text-xs tracking-wide md:tracking-wider md:font-medium`}
`;

const Clickable = styled.button`
    ${tw`justify-center w-full h-full`}
    color: ${(porps) => porps.theme.colors.blueBaby.normal}
`;
