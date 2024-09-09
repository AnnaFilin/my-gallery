/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uevmwqosgfvckencvdee.supabase.co", // Add your Supabase hostname here
        port: "", // Leave empty if there’s no custom port
        pathname: "/storage/v1/object/public/artworks/**", // Adjust the path to match where your images are stored
      },
    ],
  },
};

export default nextConfig;
