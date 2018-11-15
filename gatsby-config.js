module.exports = {
  siteMetadata: {
    title: 'My Blog',
    description: 'This is my cool blog.'
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src`
      }
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 300,
      }
    },
    `gatsby-plugin-styled-components`
  ],
  pathPrefix: "/gatsby-blog-demo"
}