// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    experimental: {
        urlImports: ['https://themer.sanity.build/'],
        taint: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
}

module.exports = nextConfig
