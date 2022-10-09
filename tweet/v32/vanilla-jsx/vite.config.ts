import { defineConfig } from "vite";
const { resolve } = require('path');

export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    // emptyOutDir: true,
    rollupOptions: {
      input: {
        '': resolve(__dirname, 'index.html'),
        'admin': resolve(__dirname, 'admin/index.html'),
      },
    },
  },
});
