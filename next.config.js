/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            svgProps: {
              fill: 'currentColor',
            },
          },
        },
      ],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/ad/:word',
        destination: '/:word',
      },
    ];
  },
  images: {
    domains: ['dev.en-gage.net', 'image-dev.en-gage.net'],
  },
};

module.exports = nextConfig;
