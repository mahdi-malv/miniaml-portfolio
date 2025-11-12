/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment
  // If deploying to https://username.github.io/repo-name/
  // basePath: '/repo-name',
  // For custom domain (mahdi.wtf), no basePath needed
}

module.exports = nextConfig

