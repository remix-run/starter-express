module.exports = {
  apps: [
    {
      name: "Express",
      script: "server.js",
      watch: ["build/assets.json"],
      watch_options: {
        followSymlinks: false
      },
      env: {
        NODE_ENV: "development"
      }
    },
    {
      name: "Remix",
      script: "remix run2",
      ignore_watch: ["."],
      env: {
        NODE_ENV: "development"
      }
    }
  ]
};
