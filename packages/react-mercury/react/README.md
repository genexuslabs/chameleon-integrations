# Chameleon Integrations - React

The React package contains the Front-end application using the custom elements from the web-components package and the Mercury implementation from `@genexus/mercury`.

## Getting Started

```bash
npm i pnpm -g
```

## Local development

```bash
pnpm i
pnpm start
```

## Building the package

1. Ensure the web-components packages was previously build. Consult the [web-components Readme](./../web-components/README.md) if not.

2. To build the design for production, run:
   ```bash
   pnpm build
   ```

## Preview production mode

This mode uses the optimizations from the build command to run a local server:

```bash
pnpm preview
```
