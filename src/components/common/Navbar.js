import React, { useState } from "react";
import { Link } from "@/config/routes";
import withCurrentUser from "@/lib/withCurrentUser";
import styled from "styled-components";
import tw from "tailwind.macro";

import { Menu, Close } from "@material-ui/icons";

import Sidebar from "./Sidebar";

const Navbar = ({ currentUser, logout }) => {
  // Hide and show a options dropdown
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  // 
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
      {currentUser && (
        <Sidebar
          currentUser={currentUser}
          logout={logout}
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
        />
      )}
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
                <div className="flex">
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
              <NavItems>
                <div class="relative inline-block text-left">
                  <div>
                    <span class="rounded-md shadow-sm">
                      <button onClick={toggle} type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150">
                        Options
                        <svg class="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                      </button>
                    </span>
                  </div>
                  <div style={{display: showMe?"block":"none"}} class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                    <div class="rounded-md bg-white shadow-xs">
                      <div class="py-1">
                      <button type="submit" class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                        Más reciente
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </NavItems>
            </NavContent>
            <UserZone>
              {currentUser ? (
                <>
                  <UserImageButton onClick={toggleSidebar}>
                    <UserImage
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
                      alt="User Image"
                    />
                  </UserImageButton>
                </>
              ) : (
                <UserButtonsContainer>
                  <Link route="login">
                    <LoginButton>Ingresar</LoginButton>
                  </Link>
                  <Link route="register">
                    <RegisterButton>Registrarse</RegisterButton>
                  </Link>
                </UserButtonsContainer>
              )}
            </UserZone>
          </Container>
        </NavArea>

        {showMobileMenu && (
          <NavMobileMenu>
            <MobileMenuArea>
              {!currentUser && (
                <>
                  <Link route="login">
                    <LoginButton isMobile>Ingresar</LoginButton>
                  </Link>
                  <Link route="register">
                    <RegisterButton isMobile>Registrarse</RegisterButton>
                  </Link>
                </>
              )}

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

export default withCurrentUser(Navbar);

const CustomNav = styled.nav`
${tw`w-full fixed z-10 inset-x-0.top-0`}
  background-color: ${(props) => props.theme.colors.violetBlue.normal};
  grid-area: navbar / navbar / navbar / navbar;
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
  ${tw`cursor-pointer font-bold text-2xl pl-3 py-2 leading-5 text-gray-200 hover:text-white focus:text-white`}
`;

const NavItems = styled.div`
  ${tw`hidden sm:block sm:ml-6`}
`;

const NavItem = styled.a`
  ${tw`mr-4 px-3 py-2 text-sm font-medium leading-5 text-gray-300 hover:text-white focus:text-white`}
`;

const UserButtonsContainer = styled.div`
  ${tw`hidden sm:block`}
`;

const LoginButton = styled.button`
  ${tw`px-2 py-2 text-sm font-semibold text-gray-300 hover:text-white`}
  ${(props) => props.isMobile && tw`block w-full my-2`}
`;

const RegisterButton = styled.button`
  ${tw`px-2 py-2 text-sm font-semibold text-gray-300 hover:text-white rounded-md`}
  ${(props) => (props.isMobile ? tw`block w-full my-2` : tw`ml-4`)}

  background-color: ${(props) => props.theme.colors.pinkCyclamen.normal};
`;

const UserZone = styled.div`
  ${tw`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0`}
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
