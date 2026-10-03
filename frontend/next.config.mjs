/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  allowedDevOrigins: [
    "192.168.0.103",
    "192.168.0.103:3000",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
