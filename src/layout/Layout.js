import React from "react";
import PropTypes from "prop-types";
import NextNprogress from "nextjs-progressbar";
import styled from "styled-components";
import Navbar from "@/src/components/common/Navbar";


const Layout = (props) => (
  <>
    <NextNprogress
      color="#FF66A7" // Pink Cyclamen
      startPosition={0.3}
      stopDelayMs={400}
      height="4"
    />
    <Navbar />
    <PageContainer>{props.children}</PageContainer>
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default Layout;

const PageContainer = styled.div`
  grid-area: content / content / content / content;
`;
