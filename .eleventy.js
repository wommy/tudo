module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('public')

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      layouts: '_layouts',
    },
  }
}
