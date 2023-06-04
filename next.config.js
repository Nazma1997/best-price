/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    appDir: true
  },
  reactStrictMode: true,
  swcMinify:true,
  optimizeFonts:true,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'api.priceinkenya.com'
      }
    ]
  }
}

module.exports = nextConfig
