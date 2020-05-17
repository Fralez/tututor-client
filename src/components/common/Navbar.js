import React, { useState } from "react";
import { Link } from "@/config/routes";
import styled from "styled-components";
import tw from "tailwind.macro";

import { Menu, Close } from "@material-ui/icons";

import Sidebar from "./Sidebar";

const Navbar = ({ currentUser }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = (state) => {
    /**
     * Got the cases:
     * 1 - Open sidebar from image
     *  -> state.isOpen === undefined
     *  -> showSidebar == false
     *   Effect -> showSidebar = true
     *
     * 2 - Closing sidebar
     *  -> state.isOpen === false
     *  -> showSidebar == true
     *   Effect -> showSidebar = false
     */
    if (state.isOpen === undefined && !showSidebar) {
      // Opening sidebar from image
      setShowSidebar(true);
    } else if (state.isOpen === false && showSidebar) {
      // Closing sidebar
      setShowSidebar(false);
    }
  };

  return (
    <>
      <Sidebar
        currentUser={currentUser}
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
      />
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
              <Link route="/">
                <LogoContainer>
                  <Logo src="/img/logos/tututor.svg" alt="TuTutor logo" />
                  <LogoText className="transition duration-150 ease-in-out">
                    TuTutor
                  </LogoText>
                </LogoContainer>
              </Link>
              <NavItems>
                <div class="flex">
                  <Link route="/">
                    <NavItem>Inicio</NavItem>
                  </Link>
                  <Link route="/">
                    <NavItem>Explorar</NavItem>
                  </Link>
                  <Link route="/">
                    <NavItem>Ranking</NavItem>
                  </Link>
                </div>
              </NavItems>
            </NavContent>
            <UserZone>
              <UserImageButton onClick={toggleSidebar}>
                <UserImage
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
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
              <Link route="/">
                <MobileNavItem>Inicio</MobileNavItem>
              </Link>
              <Link route="/">
                <MobileNavItem>Explorar</MobileNavItem>
              </Link>
              <Link route="/">
                <MobileNavItem>Ranking</MobileNavItem>
              </Link>
            </MobileMenuArea>
          </NavMobileMenu>
        )}
      </CustomNav>
    </>
  );
};

export default Navbar;

const CustomNav = styled.nav`
${tw`w-full absolute z-10`}
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
  ${tw`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:text-white`}
`;

const NavContent = styled.div`
  ${tw`flex-1 flex items-center justify-center sm:items-stretch sm:justify-start`}
`;

const LogoContainer = styled.a`
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
  ${tw`mr-4 px-3 py-2 text-sm font-medium leading-5 text-gray-300 hover:text-white no-underline focus:text-white`}
`;

const UserZone = styled.div`
  ${tw`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`}
`;

const UserImageButton = styled.button`
  ${tw`flex text-sm border-2 border-transparent rounded-full`}
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
  ${tw`mt-1 block px-3 py-2 text-base font-medium text-gray-300 hover:text-white focus:text-white`}
`;
