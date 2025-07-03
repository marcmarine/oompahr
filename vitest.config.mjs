import * as path from 'node:path'
import packageJson from './package.json'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    root: import.meta.dirname,
    name: packageJson.name,
    environment: 'jsdom',

    globals: true,
    setupFiles: ['./tests/setup.ts'],
  },
})
