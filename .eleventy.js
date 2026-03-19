const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {

    const { DateTime } = require("luxon");

    // This will copy these folders to the output without modifying them at all
    eleventyConfig.addPassthroughCopy("vendor");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addCollection("blog", function (collectionApi) {
        return collectionApi.getFilteredByTag("blog").sort((a, b) => {
            return b.date - a.date; // newest first
        });
    });

    eleventyConfig.addPlugin(pluginRss, {
		posthtmlRenderOptions: {
			closingSingleTag: "default", // opt-out of <img/>-style XHTML single tags
		},
	});

    eleventyConfig.addFilter("date", (dateObj, format = "yyyy-MM-dd") => {
        return DateTime.fromJSDate(dateObj).toFormat(format);
    });

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
        }
    };
}