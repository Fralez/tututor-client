import React from "react";
import App from "next/app";
import { DefaultSeo } from "next-seo";
import moment from "moment";
import "moment/locale/es";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import tw from "tailwind.macro"
import withSiteLayout from "@/src/layout/SiteLayout";
import THEME from "@/src/styles/Theme.js";

import "@/src/styles/tailwind.css"; // Tailwind CSS
import "react-datepicker/dist/react-datepicker.css"; // react-datepicker CSS
import "react-dropdown/style.css"; // react-dropdown CSS

const GlobalStyle = createGlobalStyle`
  #__next {
    height:100%;
    width: 100%;
    display: grid;
    grid-template-rows: 4rem auto;
    grid-template-areas:
        "navbar"
        "content";
    grid-auto-rows: minmax(min-content, max-content);
  }

  html {
    height: 100%;
    overflow-y: auto;
    font-family: ${(props) => props.theme.fonts.raleway};
  }

  body {
    font-family: ${(props) => props.theme.fonts.raleway};
    font-size: 16px;
    line-height: 1.2;
    height: 100%;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    
    button {
      background: none;
      border: none;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      &:hover {
          text-decoration: none;
      }
    }
    div {
      box-sizing: border-box;
    }
    img {
      max-width: 100%;
    }
    i {
      font-style: italic;
    }
    b {
      font-weight: bold;
    }
    *:focus {
      outline: none;
    } 
  }
  
  /* ScrollBars */
  ::-webkit-scrollbar {
    ${tw`w-1 md:w-2 h-1`}
  }

  ::-webkit-scrollbar-track {
    ${tw`bg-white`}
  }

  ::-webkit-scrollbar-thumb {
    ${tw`bg-gray-400 rounded-full`}
  }
`;

class MyApp extends App {
  render() {
    // Set moment locale to Spanish
    moment.locale("es");

    const { Component, pageProps } = this.props;
    return (
      <>
        <DefaultSeo
          titleTemplate="%s | TuTutor"
          openGraph={{
            type: "website",
            locale: "es_ES",
            site_name: "TuTutor.uy",
          }}
        />
        <ThemeProvider theme={THEME}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default withSiteLayout(MyApp);
