// use createPages API from gatsby
// actions - where the createPage exist
const path = require('path');

const createTagPages = (createPage, posts) => {
  const allTagsTemplate = path.resolve('src/templates/allTagsindex.js');
  const singleTagTemplate = path.resolve('src/templates/singleTagindex.js');

  const postsByTag = {};

  posts.forEach(({node}) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = [];
        }

        postsByTag[tag] = [...postsByTag[tag], node];
      });
    }
  });

  const tags = Object.keys(postsByTag);

  createPage({
    path: '/tags',
    component: allTagsTemplate,
    context: {
      tags: tags.sort()
    }
  });

  tags.forEach(tagName => {
    const posts = postsByTag[tagName];

    createPage({
      path: `/tags/${tagName}`,
      component: singleTagTemplate,
      context: {
        posts,
        tagName
      }
    });
  });
};

exports.createPages = (({graphql, actions}) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogPost.js');

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___date]}) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const posts = result.data.allMarkdownRemark.edges;

        createTagPages(createPage, posts);

        posts.forEach(({node}, index) => {
          const nodePath = node.frontmatter.path;

          createPage({
            path: `pages/${nodePath}`,
            component: blogPostTemplate,
            context: {
              pagePath: nodePath,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node
            }
          });

          resolve();
        });
      })
    );
  });
});