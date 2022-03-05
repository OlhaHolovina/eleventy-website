module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy('./src/img');
  const handlebars = require('handlebars')
  eleventyConfig.setLibrary('hbs', handlebars)

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
