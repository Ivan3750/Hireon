/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['flagsapi.com'],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i, // Add support for media files
        type: 'asset/resource', // Uses Webpack's built-in asset module
        generator: {
          filename: 'static/media/[hash][ext][query]', // Controls output location
        },
      });
      return config
    }
  };
  export default nextConfig;
  