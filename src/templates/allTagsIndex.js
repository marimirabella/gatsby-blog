import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Tags = styled.ul`
  width: 30%;
  margin: 3rem auto 0;
  font-size: 1.2rem;
`;

const Tag = styled.li`
  height: 2rem;
  display: flex;
  align-items: center;
`;

const TagLink = styled(Link)`
  color: #c200ff;
`;

const AllTagsTemplate = ({pageContext}) => {
  const { tags } = pageContext;
  
  return (
    <Tags>
      <h2>Find post by tag</h2>
      {tags.map((tag, index) => {
        return (
          <Tag key={index}>
            <TagLink to={`/tags/${tag}`}>
              {tag}
            </TagLink>
          </Tag>
        );
      })}
    </Tags>
  );
};

export default AllTagsTemplate;