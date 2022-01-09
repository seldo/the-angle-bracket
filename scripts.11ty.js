const esbuild = require('esbuild')
const { NODE_ENV = 'production' } = process.env

const isProduction = NODE_ENV === 'production'

module.exports = class {
  data() {
    return {
      permalink: false,
      eleventyExcludeFromCollections: true
    }
  }

  async render() {
    await esbuild.build({
      entryPoints: ['src/js/app.js'],
      bundle: true,
      minify: isProduction,
      outdir: '_site/js',
      sourcemap: !isProduction,
      target: isProduction ? 'es6' : 'esnext'
    })
  }
}
