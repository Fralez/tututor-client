import React from "react";
import PropTypes from "prop-types";
import { Router } from "@/config/routes";
import NProgress from "nprogress";

// Progress bar
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = (props) => (
  <div className="layout-container h-screen">{props.children}</div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default Layout;
