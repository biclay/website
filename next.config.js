// next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = '/website/out/'
let basePath = '/website/out'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  output: "export",
}

