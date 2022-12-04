# Welcome to Astro Front-end demo project

This project will demostrate a simple, effective way of setting up a CMS Astro site
usign Strapi, GraphQL in the backend

It will use:

-   Tailwind
-   URQL

## Setup

> npx create-strapi-app@latest astrofrontend --quickstart

> npm i --save-dev prettier-plugin-astro prettier

> npx astro add tailwind

## Setting up Prettier

Add the following to the .vscode/setting.json

```
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.documentSelectors": ["**/*.astro"],
    "[astro]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```

Add the following to .prettierrc.cjs

```
module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
    astroAllowShorthand: false,
}
```

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |
