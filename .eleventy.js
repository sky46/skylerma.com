const sass = require("sass");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function (inputContent) {
      let result = sass.compileString(inputContent);
      return async (data) => {
        return result.css;
      };
    },
  });
  
  eleventyConfig.addPassthroughCopy("assets/media");
  eleventyConfig.addPassthroughCopy("assets/js");
};
