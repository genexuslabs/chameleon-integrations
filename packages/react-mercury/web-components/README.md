![ci status](https://github.com/genexuslabs/SaiaChat/actions/workflows/frontend-beta-push-docker.yaml/badge.svg)![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# GeneXus Enterprise AI - Web Components layer

The Web Components package is used to implement all SAIA UI related behavior. In general, this package contains the Design System and controls that implements the required UI and interactions.

- If a new UI exclusive requirement is needed in SAIA, we **MUST** update this package to implement the corresponding TypeScript, SCSS, or Web Component needed.

- This package does not implement any router or service controller layer.

Technologies used in this package:

- TypeScript (strict)
- StencilJS (web components compiler)
- Sass (CSS preprocessor)
- Jest and puppeteer for testing.
- ESLint for static syntax analisis.
- Prettier for code styling.

## Getting Started

```bash
npm i pnpm -g
pnpm i
pnpm start
```

## Running the tests

To run the unit tests for the custom elements, run:

```bash
pnpm test
```

## Building for production

To build the design for production, run:

```bash
pnpm build
```

## Updating the React output

When a new component is added in this package or the component's interface is updated, the following command must be exectued (updating the `excludeComponents` in the [stencil.config.ts file](./stencil.config.ts) if necessary):

```bash
pnpm build.react
```

## Using this library

There are three strategies we recommend for using these web components.

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/@genexus/saia-web-components@latest/dist/saia-web-components/saia-web-components.esm.js'></script>` in the head of your index.html
- Then you can use the web components anywhere in your template, JSX, html etc

### Node Modules

- Run `pnpm install @genexus/saia-web-components --save`
- Put a script tag similar to this `<script src='node_modules/@genexus/saia-web-components/dist/saia-web-components/saia-web-components.esm.js'></script>` in the head of your index.html
- Then you can use the web components anywhere in your template, JSX, html etc

### In a Stencil project

- Run `pnpm install @genexus/saia-web-components --save`
- Add an import to the library inside `src/index.ts`: `import "@genexus/saia-web-components";`
- Then you can use the web components anywhere in your template, JSX, html etc
