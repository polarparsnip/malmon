/** @type {import('next').NextConfig} */

const nextConfig = {
  devIndicators: {
    buildActivity: false,
  },
};

// module.exports = nextConfig;

module.exports = {
  ...nextConfig,

  images: {
    domains: [],
  },
};
