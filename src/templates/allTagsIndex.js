import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Tags = styled.ul`
  width: 30%;
  margin: 0 auto;
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
    <Layout>
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
    </Layout>
  );
};

export default AllTagsTemplate;