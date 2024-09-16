import { Config } from "@stencil/core";
import { CopyTask, OutputTarget } from "@stencil/core/internal";
import { sass } from "@stencil/sass";
import { reactOutputTarget } from "@stencil/react-output-target";

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
        componentCorePackage: "@genexus/chameleon-integrations-web-components",
        proxiesFile: "../react/src/lib/components/stencil-generated/index.ts",

        // All Web Components will automatically be registered with the Custom
        // Elements Registry. This can only be used when lazy loading Web
        // Components and will not work when includeImportCustomElements is true.
        includeDefineCustomElements: true,

        excludeComponents: [
          // chameleon-controls-library
          "ch-accordion",
          // "ch-accordion-render",
          "ch-action-group",
          "ch-action-group-item",
          "ch-action-group-render",
          "ch-action-list-group",
          "ch-action-list-item",
          // "ch-action-list-render",
          "ch-alert",
          // "ch-barcode-scanner",
          // "ch-chat",
          // "ch-checkbox",
          // "ch-combo-box-render",
          // "ch-code",
          // "ch-code-diff-editor",
          // "ch-code-editor",
          // "ch-dialog",
          "ch-dropdown",
          "ch-dropdown-item-separator",
          "ch-dropdown-render",
          // "ch-edit",
          "ch-flexible-layout",
          // "ch-flexible-layout-render",
          "ch-form-checkbox",
          "ch-grid",
          "ch-grid-action-refresh",
          "ch-grid-action-settings",
          "ch-grid-actionbar",
          "ch-grid-column",
          "ch-grid-column-display",
          "ch-grid-column-resize",
          "ch-grid-column-settings",
          "ch-grid-columnset",
          "ch-grid-infinite-scroll",
          "ch-grid-row-actions",
          "ch-grid-rowset-empty",
          "ch-grid-rowset-legend",
          "ch-grid-settings",
          "ch-grid-settings-columns",
          "ch-grid-virtual-scroller",
          "ch-icon",
          // "ch-image",
          "ch-infinite-scroll",
          "ch-intersection-observer",
          // "ch-layout-splitter",
          "ch-markdown",
          // "ch-markdown-viewer",
          "ch-navigation-list-render",
          "ch-navigation-list-item",
          "ch-next-data-modeling",
          "ch-next-data-modeling-item",
          "ch-next-data-modeling-render",
          "ch-next-progress-bar",
          "ch-notifications",
          "ch-notifications-item",
          // "ch-paginator",
          // "ch-paginator-navigate",
          // "ch-paginator-pages",
          // "ch-popover",
          // "ch-qr",
          "ch-radio-group-render",
          "ch-select",
          "ch-select-option",
          "ch-segmented-control-item",
          // "ch-segmented-control-render",
          "ch-shortcuts",
          "ch-showcase",
          // "ch-slider",
          // "ch-sidebar",
          "ch-sidebar-menu",
          "ch-sidebar-menu-list",
          "ch-sidebar-menu-list-item",
          "ch-step-list",
          "ch-step-list-item",
          "ch-radio-group-render",
          "ch-style",
          "ch-smart-grid",
          "ch-smart-grid-cell",
          "ch-smart-grid",
          // "ch-switch",
          "ch-suggest",
          "ch-suggest-list",
          "ch-suggest-list-item",
          // "ch-tab-render",
          // "ch-tabular-grid",
          // "ch-tabular-grid-action-refresh",
          // "ch-tabular-grid-action-settings",
          // "ch-tabular-grid-actionbar",
          // "ch-tabular-grid-column",
          // "ch-tabular-grid-column-display",
          // "ch-tabular-grid-column-resize",
          // "ch-tabular-grid-column-settings",
          // "ch-tabular-grid-columnset",
          // "ch-tabular-grid-infinite-scroll",
          // "ch-tabular-grid-row-actions",
          // "ch-tabular-grid-rowset-empty",
          // "ch-tabular-grid-rowset-legend",
          // "ch-tabular-grid-settings",
          // "ch-tabular-grid-settings-columns",
          // "ch-tabular-grid-virtual-scroller",
          "ch-test-flexible-layout",
          "ch-test-suggest",
          // "ch-textblock",
          // "ch-theme",
          "ch-timer",
          "ch-tooltip",
          "ch-tree",
          "ch-tree-item",
          "ch-tree-view",
          "ch-tree-view-drop",
          "ch-tree-view-item",
          // "ch-tree-view-render",
          "ch-virtual-scroller",
          "ch-window",
          "ch-window-close",
        ],
        loaderDir: "dist/loader",
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
          ...commonCopyTasks,
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
  bundles: [
  ]
};
