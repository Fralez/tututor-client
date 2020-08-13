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

const CategoryBar = ({ selected, setSelected }) => {
  const categoriesList = [
    { title: "Matemáticas", icon: <Functions /> },
    { title: "Ciencias Sociales", icon: <People /> },
    { title: "Historia", icon: <AccountBalance /> },
    { title: "Geografía", icon: <Public /> },
    { title: "Administración", icon: <AccountBalanceWallet /> },
    { title: "TIC", icon: <Devices /> },
    { title: "Biología", icon: <Eco /> },
    { title: "Derecho", icon: <Gavel /> },
    { title: "Lengua", icon: <Message /> },
  ];
  return (
    <CategoriesContainer>
      {categoriesList.map((category, i) => {
        return (
          <Category
            key={i}
            onClick={() => setSelected(category.title)}
            isSelected={selected == category.title}
          >
            <Clickable>
              {category.icon}
              <NameCategory>{category.title}</NameCategory>
            </Clickable>
          </Category>
        );
      })}
    </CategoriesContainer>
  );
};

export default CategoryBar;

const Category = styled.div`
  ${tw`w-32 h-full md:mx-2 flex justify-center items-center rounded`}
  min-width: 7rem;
  transition: 0.5s;
  /* min-width: 8rem; */
  &:hover {
    ${tw`bg-gray-100`}
  }
  ${(props) =>
    props.isSelected &&
    css`
      background: #edf2f7;
    `}
  ${({ active }) =>
    active &&
    `
    bg-gray-100
    `}
`;

const CategoriesContainer = styled.div`
  ${tw`ml-8 md:ml-0 relative w-full md:w-11/12 md:h-16 h-12 flex mb-2 overflow-x-auto overflow-y-hidden lg:justify-center`}
`;

const NameCategory = styled.p`
  ${tw`md:text-sm text-xs tracking-wide md:tracking-wider md:font-medium`}
`;

const Clickable = styled.button`
    ${tw`justify-center w-full h-full`}
    color: ${(porps) => porps.theme.colors.blueBaby.normal}
`;
