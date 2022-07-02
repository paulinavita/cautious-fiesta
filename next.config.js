/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/type',
        destination: '/type/normal'
      }
    ]
  },
  images: {
    domains: [
      'i.ibb.co', 
      'pokeapi.co',
      'via.placeholder.com', 
      'media.giphy.com',
      'raw.githubusercontent.com'
    ],
  },
}

module.exports = nextConfig
