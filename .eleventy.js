module.exports = function ( c ){
	// c.addPassthroughCopy({ "src/public": "/" })
	return {
		dir: {
			input: "src",
			includes: "components",
		},
		htmlTemplateEngine: "njk",
	};
};
