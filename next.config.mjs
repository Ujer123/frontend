/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "media.istockphoto.com",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "example.com", // Additional domains
          pathname: "**",
        },
      ],
    },   
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          path: false,
        };
      }
      return config;
    },    
  };
  
  export default nextConfig;
  