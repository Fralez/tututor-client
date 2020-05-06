import React from "react";
import App from "next/app";
import { DefaultSeo } from "next-seo";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "@/src/styles/tailwind.css";
import THEME from "@/src/styles/Theme.js";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    overflow-y: auto;
    font-family: ${props => props.theme.fonts.raleway};
  }

  body {
    font-family: ${props => props.theme.fonts.raleway};
    font-size: 16px;
    line-height: 1.2;
    overflow-y: hidden;
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
          text-decoration: underline;
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
`;

class MyApp extends App {
  render() {
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

export default MyApp;
