import React from 'react'; 
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

const BlogWrapper = styled.div`
  padding: 0 30px;
  font-size: 1.1rem;
`;

const BlogHeader = styled.h2`
  text-align: center;
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
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  
  return (
    <BlogWrapper>
      <BlogHeader>{title}</BlogHeader>
      <BlogPost
        className="blogpost"
        dangerouslySetInnerHTML={{__html: html}}
      />
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
  );
};

export const query = graphql`
  query($pagePath: String!) {
    markdownRemark (frontmatter: {path: {eq: $pagePath}}) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;