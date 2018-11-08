import React from 'react';
import { graphql } from 'gatsby';

import Header from './../components/Header';
import BlogPosts from '../components/BlogPosts';
import Layout from '../components/Layout';

const App = ({ data }) => (
  <Layout>
    <Header />
    <BlogPosts edges={data.allMarkdownRemark.edges} />
  </Layout>
);

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

export default App;