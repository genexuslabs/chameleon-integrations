import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import terser from "@rollup/plugin-terser";
import summary from "rollup-plugin-summary";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  server: {
    fs: { strict: false },
  },

  esbuild: {
    // drop: ["console", "debugger"], // Removes console and debugger statements
    format: "esm",
    target: "esnext",
    legalComments: "none",
  },

  build: {
    minify: "terser", // When downloading the bundles in the browser this compression is better than ESBuild
    target: "esnext", // Necessary to force the ECMA script target version

    // rollupOptions: {
    //   output: {

    //   }
    // }
  },

  plugins: [
    react(),

    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@genexus/mercury/dist/assets",
          dest: "/",
        },
      ],
    }),

    // Minify JS
    terser({
      ecma: 2022 as 2020,
      module: true,
      compress: true,
      // format: {
      //   comments: false, // TODO: Check if we can do this due to license
      // },
    }),

    // Print bundle summary
    summary({
      // Each bundle
      warnHigh: 120000, // RED >= 120KB
      warnLow: 55000, // GREEN < 55KB,

      // Bundle summary
      totalHigh: 600000, // RED >= 600KB
      totalLow: 250000, // GREEN < 250KB,

      // Different compress methods
      showGzippedSize: true,
      showBrotliSize: true,
    }),
  ],
});
