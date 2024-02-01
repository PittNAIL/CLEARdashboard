/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    DB_URI: "mongodb://localhost:27017/cleardashboard",
    DB_URL: "mongodb+srv://cdash:clEARdashboard2024@atlascluster.hrctky4.mongodb.net/cleardashboard", 

    CLOUD_NAME: "",
    CLOUDINARY_API_KEY: "",
    CLOUDINARY_API_SECRET: "",

    STRIPE_PUBLIC_KEY: "",
    STRIPE_PRIVATE_KEY: "",

    STRIPE_WEBHOOK_SECRET: "",

    NEXTAUTH_SECRET: "codingwithabbas",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
