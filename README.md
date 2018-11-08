### Blog with React, GraphQl and markdown using Gatsby v2.0.0 started from egghead.io

# instal gatsby and gatsby-cli
npm i --global gatsby@next gatsby-cli@next

# create new gatsby project from gatsby-starter-hello-world
Starter with the bare essentials needed for a [Gatsby](https://www.gatsbyjs.org/) site.
Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world
```
run yarn or npm install to install all dependencies

## Running in development
`gatsby develop`

# install plugins
npm i --save gatsby-source-filesystem@next gatsby-transformer-remark@next

# create configuration file for gatsby and add plugins there:
touch gatsby-config.js

# for using styled components install plugin and add it to gatsby-config.js:
npm i --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components

## Running in production
`gatsby build`
`gatsby serve`
