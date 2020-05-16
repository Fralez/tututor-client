import React, { useState } from "react";
import { Link } from "@/config/routes";
import styled from "styled-components";
import tw from "tailwind.macro";

import { Menu, Close } from "@material-ui/icons";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleSidebar = () => {

  }

  return (
    <CustomNav>
      <NavArea>
        <Container>
          <HamburguerButtonContainer>
            {/* Mobile menu button */}
            <HamburguerButton
              className="transition duration-150 ease-in-out"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {/* Icons when menu is closed (Close icon) or open (Menu icon) */}
              {showMobileMenu ? <Close /> : <Menu />}
            </HamburguerButton>
          </HamburguerButtonContainer>
          <NavContent>
            <LogoContainer>
              <Logo src="/img/logos/tututor.svg" alt="TuTutor logo" />
              <LogoText className="transition duration-150 ease-in-out">
                TuTutor
              </LogoText>
            </LogoContainer>
            <NavItems>
              <div class="flex">
                <NavItem className="transition duration-150 ease-in-out">
                  Inicio
                </NavItem>
                <NavItem className="transition duration-150 ease-in-out">
                  Explorar
                </NavItem>
                <NavItem className="transition duration-150 ease-in-out">
                  Ranking
                </NavItem>
              </div>
            </NavItems>
          </NavContent>
          <UserZone>
            {/* Profile dropdown */}
            <UserImageButton onClick={toggleSidebar}>
              <UserImage
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User Image"
              />
            </UserImageButton>
          </UserZone>
        </Container>
      </NavArea>

      {/*
        Mobile menu, toggle classes based on menu state.
    
        Menu open: "block", Menu closed: "hidden"
      */}
      {showMobileMenu && (
        <NavMobileMenu class="block sm:hidden">
          <MobileMenuArea>
            <MobileNavItem>Inicio</MobileNavItem>
            <MobileNavItem>Explorar</MobileNavItem>
            <MobileNavItem>Ranking</MobileNavItem>
          </MobileMenuArea>
        </NavMobileMenu>
      )}
    </CustomNav>
  );
};

export default Navbar;

const CustomNav = styled.nav`
  background-color: ${(props) => props.theme.colors.violetBlue.normal};
`;

const NavArea = styled.div`
  ${tw`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8`}
`;
const Container = styled.div`
  ${tw`relative flex items-center justify-between h-16`}
`;

const HamburguerButtonContainer = styled.div`
  ${tw`absolute inset-y-0 left-0 flex items-center sm:hidden`}
`;

const HamburguerButton = styled.button`
  ${tw`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:text-white`}
`;

const NavContent = styled.div`
  ${tw`flex-1 flex items-center justify-center sm:items-stretch sm:justify-start`}
`;

const LogoContainer = styled.div`
  ${tw`flex-shrink-0 flex`}
`;

const Logo = styled.img`
  ${tw`h-8 w-auto`}
`;

const LogoText = styled.span`
  ${tw`font-bold text-2xl pl-3 py-2 leading-5 text-gray-200 hover:text-white no-underline focus:text-white`}
  cursor: pointer;
`;

const NavItems = styled.div`
  ${tw`hidden sm:block sm:ml-6`}
`;

const NavItem = styled.a`
  ${tw`mr-4 px-3 py-2 text-sm font-medium leading-5 text-gray-300 hover:text-white no-underline focus:outline-none focus:text-white`}
`;

const UserZone = styled.div`
  ${tw`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`}
`;

const UserImageButton = styled.button`
  ${tw`flex text-sm border-2 border-transparent rounded-full focus:outline-none`}
`;

const UserImage = styled.img`
  ${tw`h-8 w-8 rounded-full`}
`;

const NavMobileMenu = styled.div`
  ${tw`block sm:hidden`}
`;

const MobileMenuArea = styled.div`
  ${tw`px-2 pt-2 pb-3`}
`;

const MobileNavItem = styled.a`
  ${tw`mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white`}
`;
