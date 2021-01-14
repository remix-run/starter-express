module.exports = {
  /**
   * The path to the `app` directory, relative to remix.config.js. Defaults to
   * "app". All code in this directory is part of your app and will be compiled
   * by Remix.
   *
   */
  appDirectory: "app",

  /**
   * A hook for defining custom routes based on your own file conventions. This
   * is not required, but may be useful if you have custom/advanced routing
   * requirements.
   */
  // routes(defineRoutes) {
  //   return defineRoutes(route => {
  //     route(
  //       // The URL path for this route.
  //       "/pages/one",
  //       // The path to this route's component file, relative to `appDirectory`.
  //       "pages/one",
  //       // Options:
  //       {
  //         // The path to this route's data module, relative to `dataDirectory`.
  //         loader: "...",
  //         // The path to this route's styles file, relative to `appDirectory`.
  //         styles: "..."
  //       }
  //     );
  //   });
  // },

  /**
   * The path to the browser build, relative to remix.config.js. Defaults to
   * `public/build`. The browser build contains all public JavaScript and CSS
   * files that are created when building your routes.
   */
  browserBuildDirectory: "public/build",

  /**
   * The URL prefix of the browser build with a trailing slash. Defaults to
   * `/build/`.
   */
  publicPath: "/build/",

  /**
   * The path to the server build directory, relative to remix.config.js.
   * Defaults to `build`. The server build is a collection of JavaScript modules
   * that are created from building your routes. They are used on the server to
   * generate HTML.
   */
  serverBuildDirectory: "build",

  /**
   * The port to use when running `remix run`. Defaults to 8002.
   */
  devServerPort: 8002
};
