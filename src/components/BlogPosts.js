import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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

const BlogPosts = ({ edges }) => (
  <React.Fragment>
    {edges.map(({ node }) => (
        <BlogPostsWrapper key={node.frontmatter.path}>
          <Link to={`pages/${node.frontmatter.path}`}>
            {node.frontmatter.title}
          </Link>
        </BlogPostsWrapper>
    ))}

    <TagsWrapper>
      <TagLink to='/tags'>
        Browse by Tag
      </TagLink>
    </TagsWrapper>
  </React.Fragment>
);

export default BlogPosts;