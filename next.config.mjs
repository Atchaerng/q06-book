/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'api.chulabook.com',
          },
        ],
      }, 
};

export default nextConfig;
