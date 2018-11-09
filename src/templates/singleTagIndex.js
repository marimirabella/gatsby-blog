import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

const SingleTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.1rem;
`;

const TagsList = styled.ul`
  padding: 0;
`;

const TagItem = styled.li`
  height: 35px;
`;

const TagLink = styled(Link)`
  color: #da00ff;
`;

const SingleTagTemplate = ({pageContext}) => {
  const { posts, tagName } = pageContext;
  
  return (
    <Layout>
      <SingleTag>
        <h2>Posts about {`${tagName}`}</h2>
        <TagsList>
          {posts.map((post, index) => {
            return(
              <TagItem key={index}>
                <TagLink to={`pages/${post.frontmatter.path}`}>
                  {post.frontmatter.title}
                </TagLink>
              </TagItem>
            );
          })}
        </TagsList>
      </SingleTag>
    </Layout>
  );
};

export default SingleTagTemplate;