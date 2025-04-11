/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next",
  images: {
    domains: [
      's3.twcstorage.ru',
    ]
  }
};

export default nextConfig;
