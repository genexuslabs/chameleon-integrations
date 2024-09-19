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
          dest: "./assets",
        },
      ],
    }),

    // Minify JS
    terser({
      ecma: 2022 as 2020,
      module: true,
      compress: true,
      format: {
        comments: false, // TODO: Check if we can do this due to license
      },
    }),

    // Print bundle summary
    summary({
      // Each bundle
      warnHigh: 100000, // RED >= 100KB
      warnLow: 30000, // GREEN < 30KB,

      // Bundle summary
      totalHigh: 400000, // RED >= 400KB
      totalLow: 200000, // GREEN < 200KB,

      // Different compress methods
      showGzippedSize: true,
      showBrotliSize: true,
    }),
  ],
});
