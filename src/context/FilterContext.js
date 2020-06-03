import React, { createContext, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

const FilterContext = createContext();

const FilterProvider = function({ children }) {
  const [currentTag, setCurrentTag] = useState("all");

  const { allTag } = useStaticQuery(graphql`
    query FilterQuery {
      allTag {
        nodes {
          name
          count
        }
      }
    }
  `);
  return (
    <FilterContext.Provider
      value={{
        tags: allTag.nodes,
        currentTag,
        setCurrentTag,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.element,
};

export default FilterContext;
export { FilterProvider };
