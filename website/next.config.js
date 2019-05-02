const withCSS = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  // eslint-disable-next-line
  require.extensions['.css'] = file => {}
}

module.exports = withCSS(withSourceMaps())