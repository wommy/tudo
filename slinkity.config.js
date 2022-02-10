import { defineConfig } from 'slinkity'
import reactRenderer from '@slinkity/renderer-react'

export default defineConfig({
  renderers: [reactRenderer],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
