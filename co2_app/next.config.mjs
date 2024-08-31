/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
                port: '',
                pathname: '/40x30/**',
            },
        ],
    },
};

export default nextConfig;
