module.exports = function ( c ){
	// c.addPassthroughCopy({ "src/public": "/" })
	c.addShortcode("todoItem", require('./src/components/todo-item.11ty.js'))
	return {
		dir: {
			input: "src",
			includes: "components",
		},
		htmlTemplateEngine: "njk",
	};
};
