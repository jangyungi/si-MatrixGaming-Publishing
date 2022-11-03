const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    loader: "akamai",
    path: "./",
  },
  assetPrefix: "",
  trailingSlash: true,
};

module.exports = nextConfig;
