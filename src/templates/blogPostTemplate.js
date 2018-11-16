import React from 'react'; 
// import React, { lazy, Suspense } from 'react'; 
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
// let PostTemplate = lazy(() => import('./post'));

const BlogWrapper = styled.div`
  padding: 0 30px;
  font-size: 1.1rem;
`;

const BlogHeader = styled.h2`
  text-align: center;
`;

const FluidImageWrapper = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
`;

const BlogPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50%;
  }
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
  const { title, alt } = markdownRemark.frontmatter;

  return (
    // <Suspense fallback="Loading...">
    // <PostTemplate html={markdownRemark.html} />
    <Layout>
        <BlogWrapper>
          <BlogHeader>{title}</BlogHeader>
            <FluidImageWrapper>
              <Img fluid={markdownRemark.frontmatter.cover_image.childImageSharp.fluid} alt={alt} />
            </FluidImageWrapper>
            <BlogPost dangerouslySetInnerHTML={{__html: markdownRemark.html}} />
          <Links>
            {next &&
              <PostLink to={`pages/${next.frontmatter.path}`}>
                Next
              </PostLink>
            }
            {prev &&
              <PostLink to={`pages/${prev.frontmatter.path}`}>
                Previous
              </PostLink>
            }
          </Links>
        </BlogWrapper>
    </Layout>
    // </Suspense>
  );
};

export const query = graphql`
  query($pagePath: String!) {
    markdownRemark (frontmatter: {path: {eq: $pagePath}}) {
      html
      frontmatter {
        title
        path
        alt
        cover_image {
          childImageSharp {
            fluid(quality: 100, maxWidth: 550) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Template;