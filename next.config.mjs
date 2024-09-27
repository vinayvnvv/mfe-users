// remote/next.config.js
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "users",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./users": "./src/pages/users/index.js",
        },
        shared: {
          // specify shared dependencies
          // read more in Shared Dependencies section
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};
export default nextConfig;
