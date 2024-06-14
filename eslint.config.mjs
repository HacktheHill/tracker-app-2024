import antfu from '@antfu/eslint-config'
// import next from 'next/core-web-vitals/'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  // Enable stylistic formatting rules, acts as a performant alternative to Prettier
  stylistic: true,

  // Use Prettier to format files that cannot be formatted by ESLint
  formatters: true,

  // Enable TypeScript and React support
  typescript: {
    tsconfigPath: "tsconfig.json",
  },
  react: true,

  // `.eslintignore` is no longer supported in flat config, use `ignores` instead
  ignores: [
    "**/fixtures",
    "eslint.config.mjs"
    // ...globs
  ],

  // Legacy config
  ...compat.config({
    extends: [
      // "eslint:recommended",
      // Other extends...
    ],
  }),
})
