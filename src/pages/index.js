import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import Header from './../components/Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: avenir;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  font-size: 1.1rem;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlogPostsWrapper = styled.div`
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: #db1fde;
  }
`;

const TagsWrapper = styled.div`
  margin-top: 1.5rem;
`;

const TagLink = styled(Link)`
  color: #700875;
`;

const Layout = ({data}) => {
  const { edges } = data.allMarkdownRemark;
  
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Inner>
        {edges.map(({ node }) => {
          return(
            <BlogPostsWrapper key={node.frontmatter.path}>
              <Link to={`pages/${node.frontmatter.path}`}>
                {node.frontmatter.title}
              </Link>
            </BlogPostsWrapper>
          );
        })}

        <TagsWrapper>
          <TagLink to='/tags'>
            Browse by Tag
          </TagLink>
        </TagsWrapper>
      </Inner>
    </Container>
  )
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

export default Layout;