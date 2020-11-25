const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const { createRequestHandler } = require("@remix-run/express");

let app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static("public"));

// Sessions are optional. If you don't want them, just remove this middleware.
// Otherwise, you should configure it with a session store other than the memory
// store so they persist. See https://www.npmjs.com/package/express-session
app.use(
  session({
    secret: "r3mixR0x",
    resave: false,
    saveUninitialized: true,
    sameSite: true
  })
);

app.all(
  "*",
  createRequestHandler({
    // Uncomment the following line if you don't want sessions. This will
    // disable the warning message when no session middleware is present.
    //enableSessions: false,
    getLoadContext() {
      // Whatever you return here will be passed as `context` to your loaders
      // and actions.
    }
  })
);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express server started on http://localhost:${port}`);
});
