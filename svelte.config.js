const sveltePreprocess = require('svelte-preprocess');
module.exports = {
  preprocess: sveltePreprocess({
    typescript: true,
    scss: {
      includePaths: ['src'],
    },
    postcss: {
      plugins: [require('autoprefixer')],
    },
  }),
};