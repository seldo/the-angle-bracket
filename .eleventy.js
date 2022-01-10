const pluginSass = require("eleventy-plugin-sass");
const sassPluginOptions = {
  outputDir: '_site/css',
  remap: true
}

module.exports = function eleventyConfig(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/images');

  eleventyConfig.addPlugin(pluginSass, sassPluginOptions);

  // eleventyConfig.addWatchTarget('./src/js/')

  return {
    dir: {
      input: 'src'
    },
    templateFormats: ['html', 'ejs', '11ty.js']
  }
}
