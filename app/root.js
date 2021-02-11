import { Meta, Links, Scripts, useRouteData } from "@remix-run/react";
import { Outlet } from "react-router-dom";

import styles from "url:./styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function loader() {
  return { date: new Date() };
}

export default function App() {
  let data = useRouteData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />

        <footer>
          <p>This page was rendered at {data.date.toLocaleString()}</p>
        </footer>
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Replace this UI with what you want users to see when your app throws
            uncaught errors. The file is at <code>app/App.tsx</code>.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
