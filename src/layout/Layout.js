import React from "react";
import PropTypes from "prop-types";
import NextNprogress from "nextjs-progressbar";
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
    <div
      style={{
        gridArea: "content / content / content / content",
        overflowX: "hidden",
      }}
    >
      {props.children}
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default Layout;
