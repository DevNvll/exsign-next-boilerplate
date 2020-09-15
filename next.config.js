const withImages = require('next-images')

// Remove if not using netlify
module.exports = withImages({
  target: 'serverless'
})
