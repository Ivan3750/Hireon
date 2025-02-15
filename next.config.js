/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['flagsapi.com'],
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: process.env.NODE_ENV === "development"
              ? "script-src 'self' 'unsafe-eval' 'unsafe-inline';"
              : "script-src 'self';"
          },
        ],
      },
    ];
  },
};



module.exports = nextConfig;
