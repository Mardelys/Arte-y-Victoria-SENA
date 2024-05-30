/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// next.config.js
module.exports = {
   reactStrictMode: true,
   jsc: {
     transform: {
       react: {
         throwIfNamespace: false,
       },
     },
   },
 };
 