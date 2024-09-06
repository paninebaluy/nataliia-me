module.exports = function(eleventyConfig) {
    // This will copy these folders to the output without modifying them at all
    eleventyConfig.addPassthroughCopy("vendor");
    eleventyConfig.addPassthroughCopy("css");
    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "pug"
    }
}