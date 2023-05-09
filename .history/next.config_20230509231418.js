/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    customKey: "my-value",
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  // Thay đổi cổng 3000 thành cổng khác
  server: {
    port: 4000,
  },
};
