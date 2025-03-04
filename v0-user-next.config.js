/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'portfolio'

const userConfig = {
  output: 'export',
  assetPrefix: isProd ? `/portfolio` : '',
  basePath: isProd ? `/portfolio` : '',
  trailingSlash: true,
  distDir: 'out',
}

export default userConfig