/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src')],
      },
    images: {
        domains: ['cdn.rebrickable.com']
    }
}

module.exports = nextConfig
