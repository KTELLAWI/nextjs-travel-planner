/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: false,
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: "pk_test_xeqIPdYS2PpKbHmKG4gJqpde",
    NEXT_PUBLIC_APTIBLE_DOMAIN: "https://fuzzy-fishstick-gw75gp6qrwh6j5-3000.app.github.dev",
    
  },
  images: {
    remotePatterns: [
      {
        hostname: "imgcld.yatra.com",
      },
      {
        hostname: "content.r9cdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
