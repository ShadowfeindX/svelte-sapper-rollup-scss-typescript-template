# svelte-sapper-rollup-scss-typescript-template#now

This is a modification of the default [Sapper](https://github.com/sveltejs/sapper) rollup template.
It includes support for typescript and scss/sass inside your `.svelte` files.
This also allows you to write your server routes in typescript and include typescript and scss files directly in your svelte components.

This branch supports deployment to Zeit Now v2.

## Getting started

### Using `create-sapper-now`

If you have `yarn` installed you can copy my short script. [create-sapper-now](https://gist.github.com/ShadowfeindX/fd14a0b649fe31a58876df169c232e9e).
Once you've saved it into your path, you can run `create-sapper-now my-app` and it will clone and install the template for you.
Or, if you prefer to use it in a more portable manner, you can copy it anywhere on your pc and run it with `./path/to/create-sapper-now my-app`.

The script will also prompt you to initialize the project as a git repo, open the folder in VS Code, and/or start the development server.
You can bypass these prompts by pass `-y` or `-n` after your project name.

### Using `degit`

[`degit`](https://github.com/Rich-Harris/degit) is a scaffolding tool that lets you create a directory from a branch in a repository.

```bash
npx degit "ShadowfeindX/svelte-sapper-rollup-scss-typescript-template#now" my-app
cd my-app
yarn install # or npm install
```

### Running the project

However you get the code, you can run the project in development mode with `yarn dev` (or `npm run dev`).

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help with svelte/sapper templating.


## Structure

Sapper expects to find two directories in the root of your project —  `src` and `static`.


### src

The [src](src) directory contains the entry points for your app — `client.js`, `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a `routes` directory.


#### src/routes

This is the heart of your Sapper app. There are two kinds of routes — *pages*, and *server routes*.

**Pages** are Svelte components written in `.svelte` files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.)

**Server routes** are modules written in `.ts` files, that export functions corresponding to HTTP methods. Each function receives Express `request` and `response` objects as arguments, plus a `next` function. This is useful for creating a JSON API, for example.

There are three simple rules for naming the files that define your routes:

* A file called `src/routes/about.svelte` corresponds to the `/about` route. A file called `src/routes/blog/[slug].svelte` corresponds to the `/blog/:slug` route, in which case `params.slug` is available to the route
* The file `src/routes/index.svelte` (or `src/routes/index.ts`) corresponds to the root of your app. `src/routes/about/index.svelte` is treated the same as `src/routes/about.svelte`.
* Files and directories with a leading underscore do *not* create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called `src/routes/_helpers/datetime.js` and it would *not* create a `/_helpers/datetime` route


### static

The [static](static) directory contains any static assets that should be available. These are served using [sirv](https://github.com/lukeed/sirv).

In your [service-worker.js](src/service-worker.js) file, you can import these as `files` from the generated manifest...

```js
import { files } from '@sapper/service-worker';
```

...so that you can cache them (though you can choose not to, for example if you don't want to cache very large files).


## Bundler config

This template uses Rollup  to provide code-splitting and dynamic imports, as well as compiling your Svelte components. As long as you don't do anything daft, you can edit the configuration files to add whatever plugins you'd like.


## Production mode and deployment

To build and deploy your finished app on Zeit Now v2, make sure you are logged into Now then run the `deploy` or `deploy-prod` command to deploy to either a development or production domain:

```bash
yarn now login # or npx now login
yarn deploy-prod # or npm run deploy-prod
```

To start a local production version of your app, run `yarn build && yarn start` (or `npm run build && npm start`). This will disable live reloading, and activate the appropriate bundler plugins.

If you want to export your app in a static format to support distribution from a CDN, run `yarn export` (or `npm run export`).


## Using external components

When using Svelte components installed from npm, such as [@sveltejs/svelte-virtual-list](https://github.com/sveltejs/svelte-virtual-list), Svelte needs the original component source (rather than any precompiled JavaScript that ships with the component). This allows the component to be rendered server-side, and also keeps your client-side app smaller.

Because of that, it's essential that the bundler doesn't treat the package as an *external dependency*. You can modify the `external` option under `server` in [rollup.config.js](rollup.config.js) or simply install the package to `devDependencies` rather than `dependencies`, which will cause it to get bundled (and therefore compiled) with your app:

```bash
yarn add -D @sveltejs/svelte-virtual-list # or npm install -D @sveltejs/svelte-virtual-list
```


## Bugs and feedback

Sapper is in early development, and may have the odd rough edge here and there. Please be vocal over on the [Sapper issue tracker](https://github.com/sveltejs/sapper/issues).
