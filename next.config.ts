/** @type {import('next').NextConfig} */

const nextConfig= {
  /* config options here */
  experimental: {
    allowedDevOrigins: [
      'http://localhost:3000',
      'http://localhost:5000',
    ]
  }
}

module.exports = nextConfig;