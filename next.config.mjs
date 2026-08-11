/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'github.skelvric.com',
          },
        ],
        destination: 'https://github.com/Skelvric',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'linkedin.skelvric.com',
          },
        ],
        destination: 'https://www.linkedin.com/company/Skelvric/',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
