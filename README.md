# Remix Starter for Express

Welcome to Remix!

This is a starter repo for using [Remix](https://remix.run) with
[Express](http://expressjs.com/).

## Development

After cloning the repo, rename `.npmrc.example` to `.npmrc` and insert the
license key you get from [logging in to your dashboard at
remix.run](https://remix.run).

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
remix.run](https://remix.run/dashboard/docs).

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

## Prefer TypeScript?

The [default branch of this repo](https://github.com/remix-run/starter-express) does the same thing, but using TypeScript.
