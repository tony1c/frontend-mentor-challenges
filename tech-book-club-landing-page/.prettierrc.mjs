// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSameLine: true,
  tabWidth: 2,
  arrowParens: 'avoid',
  astroAllowShorthand: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tailwindFunctions: ['cn'],
};
