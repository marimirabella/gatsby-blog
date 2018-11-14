import React, { lazy, Suspense } from 'react'; 
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
let PostTemplate = lazy(() => import('./post'));

const BlogWrapper = styled.div`
  padding: 0 30px;
  font-size: 1.1rem;
`;

const BlogHeader = styled.h2`
  text-align: center;
`;

const Links = styled.div`
  display: flex;
`;

const PostLink = styled(Link)`
  text-decoration: none;
  color: #c701c0;

  &:first-child {
    margin-right: 10px;
  }
`;

const Template = ({data, pageContext}) => {
  const { next, prev } = pageContext;
  
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;

  const updateComponent = () => {
    PostTemplate = lazy(() => import('./post'));
  };
  
  return (
    <Layout>
      <Suspense fallback="Loading...">
        <BlogWrapper>
          <BlogHeader>{title}</BlogHeader>
            <PostTemplate html={markdownRemark.html} />
          <Links>
            {next &&
              <PostLink to={`pages/${next.frontmatter.path}`} onClick={updateComponent}>
                Next
              </PostLink>
            }
            {prev &&
              <PostLink to={`pages/${prev.frontmatter.path}`} onClick={updateComponent}>
                Previous
              </PostLink>
            }
          </Links>
        </BlogWrapper>
      </Suspense>
    </Layout>
  );
};

export const query = graphql`
  query($pagePath: String!) {
    markdownRemark (frontmatter: {path: {eq: $pagePath}}) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`;

export default Template;