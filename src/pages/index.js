import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import FilterContext from "../context/FilterContext";

import Layout from "../components/layout";
import Person from "../components/Person";
import Topics from "../components/Topics";
import BackToTop from "../components/BackToTop";

function IndexPage() {
  const { currentTag } = useContext(FilterContext);
  const { allPerson } = useStaticQuery(graphql`
    query People {
      allPerson {
        nodes {
          description

          id
          name

          tags
          twitter
          url
        }
      }
    }
  `);
  const people = allPerson.nodes.filter(
    (person) => currentTag === "all" || person.tags.includes(currentTag)
  );
  return (
    <Layout>
      <Topics />
      <People>
        {people.map((person) => (
          <Person key={person.name} person={person} currentTag={currentTag} />
        ))}
      </People>
      <BackToTop />
    </Layout>
  );
}

export default IndexPage;

// Component Styles
const People = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 5rem;
  @media all and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
