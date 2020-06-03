import React, { useContext } from "react";
import styled from "styled-components";
import FilterContext from "../context/FilterContext";
import * as icons from "../util/icons";

export default function Topics() {
  const { tags, currentTag, setCurrentTag } = useContext(FilterContext);

  return (
    <Tags>
      {tags.map((tag) => (
        <Tag
          currentTag={tag.name === currentTag}
          htmlFor={`filter-${tag.name}`}
          key={`filter-${tag.name}`}
          clickable
        >
          <input
            type="radio"
            name="tag"
            id={`filter-${tag.name}`}
            value={tag.name}
            checked={tag.name === currentTag}
            onChange={(e) => setCurrentTag(e.currentTarget.value)}
          />
          {tag.name}
          <TagCount>{tag.count}</TagCount>
        </Tag>
      ))}
    </Tags>
  );
}

// Component Styles
const Tags = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.label`
  background: black;
  margin: 2px;
  border-radius: 3px;
  font-size: ${(props) => (props.small ? `1.2rem;` : `1.7rem;`)};
  padding: 5px;
  color: hsla(0, 100%, 100%, 0.8);
  transition: background-color 0.2s;
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  input {
    display: none;
  }
  ${(props) =>
    props.currentTag &&
    `
    background: white;
    color: hsla(0, 100%, 0%, 0.8);
    border: 1px solid black;
  `}
`;

const TagEmoji = styled.span`
  transform: scale(1.45);
`;

const TagCount = styled.span`
  background: var(--blue);
  font-size: 1rem;
  color: white;
  padding: 2px;
  border-radius: 2px;
  margin-left: 5px;
`;

export { Tag, Tags };
