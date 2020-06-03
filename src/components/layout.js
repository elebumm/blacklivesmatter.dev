/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import styled, { createGlobalStyle } from "styled-components";
import Header from "./header";
import "normalize.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Main>
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
          siteUrl={data.site.siteMetadata.siteUrl}
        />
        {children}
        <footer>
          <center ya-i-used-a-center-tag="sue me">
            <p>
              Made by <a href="https://lewismenelaws.com">Lewis Menelaws</a>{" "}
              with <a href="https://www.gatsbyjs.org">Gatsby</a>. Forked from
              /uses by <a href="https://wesbos.com">Wes Bos</a>
            </p>
            <p>
              Source on{" "}
              <a href="https://github.com/elebumm/blacklivesmatter.dev/">
                GitHub
              </a>
            </p>
            <p>
              Hosted on <a href="https://netlify.com">Netlify</a>
            </p>
          </center>
        </footer>
      </Main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

// Global Styles
const GlobalStyle = createGlobalStyle`
  html {
    --purple: #b066ff;
    --blue: #203447;
    --lightblue: #1f4662;
    --blue2: #1C2F40;
    --yellow: #ffc600;
    --pink: #EB4471;
    --vape: #d7d7d7;
    background: white;
    color: black;
    font-family: 'Roboto Condensed', monospace;
    font-weight: 100;
    font-size: 10px;
    scroll-behavior: smooth;
    background-color: #fff;
  }
  body {
    font-size: 2rem;
    overflow-y: scroll;
    background-color: #fff;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: 500;
  }
  a {
    color: #000;
    font-family: 'IBM Plex';
    font-weight: 500;
  }
  code {
    background: var(--lightblue);
  }
  

  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: black white;
  }
  body::-webkit-scrollbar-track {
    background: white;
  }
  body::-webkit-scrollbar-thumb {
    background-color: black ;
    border-radius: 6px;
    
  }
`;

// Component Styles
const Main = styled.main`
  display: grid;
  grid-gap: 3rem;
  max-width: 1900px;
  padding: 0 3rem;
  margin: 5rem auto;
`;
