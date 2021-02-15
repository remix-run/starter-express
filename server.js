const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const session = require("express-session");
const { createRequestHandler } = require("@remix-run/express");

let app = express();

// Responses should be served with compression to minimize total network bytes.
// However, where this compression happens can vary wildly depending on your stack
// and infrastructure. Here we are compressing all our Express responses for the
// purpose of this starter repository, but feel free to (re)move it or change it.
app.use(compression());

app.use(express.static("public"));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.all(
  "*",
  createRequestHandler({
    // Uncomment the following line if you don't want sessions. This will
    // disable the warning message when no session middleware is present.
    //enableSessions: false,
    getLoadContext() {
      // Whatever you return here will be passed as `context` to your loaders
      // and actions.
    },
  })
);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express server started on http://localhost:${port}`);
});
