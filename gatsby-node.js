const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })

  if (stage === 'build-javascript') {
    // Turn off source maps
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path === `/` || page.path === `/*`) {
    page.matchPath = `/*`

    createPage({
      ...page,
      component: path.resolve(`src/pages/index.js`),
    })
  }
}
