# GraphQl
in docs find site => siteMatadata

do the query and enter Ctr+Enter or execute btn:
{
  site {
    siteMetadata
  }
}

// edges like a file path
// get data from our src folder

{
  allMarkdownRemark {
    edges {
      node {
        frontmatter
      }
    }
  }
}

// if we need just title:

{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
        }
      }
    }
  }
}

# to bring data to react component we need
StaticQuery, graphQl import from gatsby

# create a query in the component and add data to render
<StaticQuery
  query={graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `}
  render={data => <div>{data.site.siteMatadata.title}</div>}
/>

# query in the variable, passed by props
export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark {
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

# add arguments to grapql params: fields
allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
  ) {}

# add Link from gatsby to navigate 

# create gatsby-node.js in main directory
  create folder: mkdir src/templates
  create touch src/templates/blogPost.js
  add template component
  fill gatsby-node.js with grapql query and createPage API

# query for a template page and html
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

# dangerouslySetInnerHTML React API for using html from graphgl query