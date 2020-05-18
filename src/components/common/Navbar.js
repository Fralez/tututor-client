import React, { useState } from "react";
import { Link } from "@/config/routes";
import withCurrentUser from "@/lib/withCurrentUser";
import styled from "styled-components";
import tw from "tailwind.macro";

import { Menu, Close } from "@material-ui/icons";

import Sidebar from "./Sidebar";
// import CreateQuestionModal from "./CreateQuestionModal";

const Navbar = ({ currentUser, logout }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  // const [showCreateQuestionModal, setShowCreateQuestionModal] = useState(false);

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
            </NavContent>
            <UserZone>
              {currentUser ? (
                <>
                  <CreateContentButton
                    className="transition duration-150 ease-in-out"
                    onClick={() => setShowCreateQuestionModal(true)}
                  >
                    Crear pregunta
                  </CreateContentButton>
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
          <NavMobileMenu className="block sm:hidden">
            <MobileMenuArea>
              {currentUser ? (
                <CreateContentButton
                  className="transition duration-150 ease-in-out"
                  isMobile
                  onClick={() => setShowCreateQuestionModal(true)}
                >
                  Crear pregunta
                </CreateContentButton>
              ) : (
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
      {/* {currentUser && (
        <CreateQuestionModal
          isOpen={showCreateQuestionModal}
          onRequestClose={() => setShowCreateQuestionModal(false)}
        />
      )} */}
    </>
  );
};

export default withCurrentUser(Navbar);

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
`;

const RegisterButton = styled.button`
  ${tw`px-2 py-2 text-sm font-semibold text-gray-300 hover:text-white rounded-md`}
  ${(props) => (props.isMobile ? tw`block w-full my-2` : tw`ml-4`)}

  background-color: ${(props) => props.theme.colors.pinkCyclamen.normal};
`;

const UserZone = styled.div`
  ${tw`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0`}
`;

const CreateContentButton = styled.button`
  ${tw`hidden sm:block mr-3 px-4 py-2 font-semibold text-sm text-white hover:bg-white rounded-lg border-solid border border-gray-200 hover:border-white`}
  :hover {
    color: ${(props) => props.theme.colors.violetBlue.normal};
  }

  /* If is mobile resolution */
  ${(props) => props.isMobile && tw`mb-2 w-full block`}
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
