module.exports = function (eleventyConfig) {
  // Copy the CMS config file as-is (not processed as a template)
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");

  // Copy any uploaded images as-is
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
