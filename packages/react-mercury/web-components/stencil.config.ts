import { Config } from "@stencil/core";
import { CopyTask, OutputTarget } from "@stencil/core/internal";
import { sass } from "@stencil/sass";
import { reactOutputTarget } from "@stencil/react-output-target";
import { reactOutputExcludedComponents } from "@genexus/chameleon-controls-library/dist/collection/framework-integrations.ts";

const argv = process.argv;

const isBuildMode = !argv.includes("--serve");

/**
 * Useful for optimizing pipeline and normal builds by not regenerating the
 * React output.
 *
 * This is achieved since we track the generated output for React.
 */
const generateReactOutput =
  isBuildMode && argv.includes("--docs") && !argv.includes("--dev");

const commonCopyTasks = [
  // {
  //   src: "assets",
  //   dest: "assets"
  // },
  // {
  //   src: "../node_modules/@genexus/unanimo/dist/assets",
  //   dest: "assets"
  // },
  // // Styles for the scrollbars
  // {
  //   src: "globals/theme",
  //   dest: "assets/css"
  // },
  // // Styles for the ch-markdown-viewer
  // {
  //   src: "../node_modules/@genexus/unanimo/dist/bundles/css/components",
  //   dest: "assets/css"
  // }
] as const satisfies CopyTask[];

const outputTargets: OutputTarget[] = generateReactOutput
  ? [
      reactOutputTarget({
        stencilPackageName: "@genexus/chameleon-controls-library",
        outDir: "../react/src/chameleon-wrappers",
        esModules: true,
        excludeComponents: reactOutputExcludedComponents,
        customElementsDir: "dist/components"
      }),
      {
        type: "dist-custom-elements",
        customElementsExportBehavior: "single-export-module",
        empty: true
      } as const // Necessary to avoid a build error due to type inference
    ]
  : [];

outputTargets.push(
  isBuildMode
    ? {
        type: "dist",
        copy: commonCopyTasks
      }
    : {
        type: "www",
        serviceWorker: null,
        copy: [
          ...commonCopyTasks
          // {
          //   src: "../node_modules/@genexus/unanimo/dist/assets",
          //   dest: "build/assets"
          // },
          // {
          //   src: "assets",
          //   dest: "build/assets"
          // }
        ]
      }
);

export const config: Config = {
  namespace: "chameleon-integrations-web-components",
  outputTargets: outputTargets,
  // globalStyle: "src/globals/globals.scss",
  // globalScript: "src/globals/initialize-app.ts",
  plugins: [sass()],
  extras: {
    // Enabling this flag will allow downstream projects that consume a Stencil
    // library and use a bundler such as Vite to lazily load the Stencil
    // library's components.
    enableImportInjection: true
  },
  bundles: []
};
