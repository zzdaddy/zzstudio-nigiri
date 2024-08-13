/** @type {import('next').NextConfig} */

module.exports = {
    output: "standalone",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });
    return config;
  },
};
