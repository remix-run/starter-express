# Remix Starter for Express

Welcome to Remix!

This is a starter repo for using [Remix](https://remix.run) with
[Express](http://expressjs.com/).

## Development

After cloning the repo, update `.npmrc` with the license key you get from
[logging in to your account at remix.run](https://remix.run).

> Note: if this is a public repo, you'll probably want to move the line with
> your key into `~/.npmrc` to keep it private.

Then, install all dependencies using `npm`:

```sh
$ npm install
```

Your `@remix-run/*` dependencies will come from the Remix package registry.

Once everything is installed, start the app with the following command:

```sh
$ npm start
```

## Documentation

Detailed documentation for Remix [is available at
`https://remix.run`](https://remix.run/dashboard/docs).

## Project Structure

There are 2 main directories you will want to be familiar with: `app` and
`loaders`.

- The `app` directory contains the major pieces that make up the frontend of
  your application. These include the entry points, routes, and CSS files.
  Most of the code in this directory runs both on the server _and_ in the
  browser.
- The `loaders` directory contains functions that supply data to the frontend.
  These functions run only in node.js.

Remix is responsible for compiling everything in your `app` directory so that it
can run both on the server (to render the HTML needed for the page, aka
server-side rendering or "SSR") and in the browser. It's your responsibility to
compile the code in `loaders`, if needed.

This project uses TypeScript for type safety. There are two main TypeScript
configs in `app/tsconfig.json` and `loaders/tsconfig.json`. The `tsconfig.json`
in the project root is a "solution" file that just contains
[references](https://www.typescriptlang.org/docs/handbook/project-references.html)
to the other two configs.

## Don't want TypeScript?

This project uses TypeScript, but it's easy enough to remove if you don't want
to use it. Just remove the `tsconfig.json` files and rename all `.ts` and `.tsx`
files to `.js` (or `.jsx`, depending on your preference). Then, remove any type
information from your files.

For example, in `entry-server.js` you should change the `handleRequest` function
signature from this:

```tsx
export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  // ...
}
```

to this:

```js
export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  // ...
}
```

After this is done, you'll also be able to remove the `typescript` dependency:

```sh
$ npm uninstall typescript
```

You should also remove all `tsc` commands from the `scripts` in `package.json`.
