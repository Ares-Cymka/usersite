/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stealthemoon0331-tatusya.vercel.app',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
