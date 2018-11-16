import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ name }) => (
  <StaticQuery
    query={query}
    render={data => {
      const { fixed, fluid } = data[name].childImageSharp;
      const { originalName } = fixed || fluid;
      console.log(fixed, 'fluied', fluid, originalName);
      const title = originalName[0].toUpperCase() + originalName.substr(1, originalName.indexOf('.') - 1);
      return fixed ? <Img fixed={fixed} alt={title} /> : <Img fluid={fluid} alt={title} />;
    }}
  />
);

const query = graphql`
  query {
    logoImage: file (relativePath: {eq: "images/logo.jpg"}) {
      childImageSharp {
        fixed (width: 250) {
          ...GatsbyImageSharpFixed
          originalName
        }
      }
    }
    MainImage: file (relativePath: {eq: "images/gatsby.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 800) {
          ...GatsbyImageSharpFluid
          originalName
        }
      }
    }
  }
`;

export default Image;