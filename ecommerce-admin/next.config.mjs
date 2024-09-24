/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '', // You can specify a port if needed, or leave it empty
          pathname: '/**', // Path pattern to match any image from Cloudinary
        },
      ],
    },
  };
  
  export default nextConfig;