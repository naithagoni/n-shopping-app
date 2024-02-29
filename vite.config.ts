import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // In addition, you can also use esbuild.jsxInject to automatically inject JSX helper imports for every file transformed by esbuild:
  // esbuild: {
  //   jsxInject: `import React from 'react'`
  // },
  logLevel: "info",
  appType: "spa"
})
