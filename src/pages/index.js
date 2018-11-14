import React, { lazy, Suspense } from 'react';
import { graphql } from 'gatsby';

import Header from './../components/Header';
import Layout from '../components/Layout';
const BlogPosts = lazy(() => import('../components/BlogPosts'));

const App = ({ data }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Layout>
      <Header />
      <BlogPosts edges={data.allMarkdownRemark.edges} />
    </Layout>
  </Suspense>
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