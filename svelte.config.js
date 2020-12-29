// svelte.config.js
const sveltePreprocess = require('svelte-preprocess');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  
    preprocess : sveltePreprocess({
      sourceMap : !production,
      defaults : {
        style : 'scss',
        script: 'typescript',
      },
      scss: {
        prependData : `@import 'src/styles/variables.scss';`
      },
      postcss : {
        plugins : [require('autoprefixer')()]
      },
    }),
    compilerOptions: {
      // enable run-time checks when not in production
      dev: !production
    }
  // ...other svelte options
};
