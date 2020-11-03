import React, { useState, useEffect } from "react";
import Link from "next/link";
import withCurrentUser from "@/lib/withCurrentUser";
import styled from "styled-components";
import tw from "tailwind.macro";

import api from "@/src/api";

import {
  Menu,
  Close,
  Notifications,
  NotificationsActive,
} from "@material-ui/icons";

import Sidebar from "./Sidebar";
import InstitutionInvitationModal from "./institution/InstitutionInvitationsModal";

const Navbar = ({ currentUser, logout }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [
    showInstitutionInvitationModal,
    setShowInstitutionInvitationModal,
  ] = useState(false);
  const [invitations, setInvitations] = useState([]);

  const { users } = api();

  const populateList = async () => {
    if (currentUser) {
      const res = await users.showUserInvitations(currentUser.id);
      setInvitations(res.data);
    }
  };

  useEffect(() => {
    populateList();
  }, [currentUser])

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
              <Link passHref href="/">
                <LogoContainer>
                  <Logo src="/img/logos/tututor.svg" alt="TuTutor logo" />
                  <LogoText className="transition duration-150 ease-in-out">
                    TuTutor
                  </LogoText>
                </LogoContainer>
              </Link>
              <NavItems>
                <div className="flex">
                  <Link passHref href="/">
                    <NavItem>Inicio</NavItem>
                  </Link>
                  <Link passHref href="/institution">
                    <NavItem>Instituciones</NavItem>
                  </Link>
                  <Link passHref href="/ranking">
                    <NavItem>Ranking</NavItem>
                  </Link>
                </div>
              </NavItems>
            </NavContent>
            <UserZone>
              {currentUser ? (
                <>
                  <NotificationsIcon
                    onClick={() => {
                      populateList();
                      setShowInstitutionInvitationModal(true);
                    }}
                  />
                  <UserImageButton onClick={toggleSidebar}>
                    <UserImage
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
                      alt="User Image"
                    />
                  </UserImageButton>
                </>
              ) : (
                <UserButtonsContainer>
                  <Link passHref href="/login">
                    <a>
                      <LoginButton>Ingresar</LoginButton>
                    </a>
                  </Link>
                  <Link passHref href="/register">
                    <a>
                      <RegisterButton>Registrarse</RegisterButton>
                    </a>
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
                  <Link passHref href="/login">
                    <a>
                      <LoginButton isMobile>Ingresar</LoginButton>
                    </a>
                  </Link>
                  <Link passHref href="/register">
                    <a>
                      <RegisterButton isMobile>Registrarse</RegisterButton>
                    </a>
                  </Link>
                </>
              )}

              <Link passHref href="/">
                <MobileNavItem>Inicio</MobileNavItem>
              </Link>
              <Link passHref href="/institution">
                <MobileNavItem>Instituciones</MobileNavItem>
              </Link>
            </MobileMenuArea>
          </NavMobileMenu>
        )}
      </CustomNav>
      {currentUser && (
        <InstitutionInvitationModal
          currentUser={currentUser}
          showInstitutionInvitationModal={showInstitutionInvitationModal}
          toggleModal={() =>
            setShowInstitutionInvitationModal(!showInstitutionInvitationModal)
          }
          invitations={invitations}
        />
      )}
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
  ${tw`px-2 py-2 text-sm font-semibold text-white rounded-md`}
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
  ${tw`mt-1 block px-3 py-2 text-base font-medium text-gray-300 hover:text-white focus:text-white flex justify-center`}
`;

const NotificationsIcon = styled(Notifications)`
  ${tw`mr-4 cursor-pointer`}
  color: white;
`;
