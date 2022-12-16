/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  basePath: process.env.BASE_PATH,
  experimental: {
    urlImports: [
      "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js",
      "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js",
    ],
  },
};
