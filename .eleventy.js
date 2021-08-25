module.exports = function ( c ){
	c.addShortcode("todoItem", require('./_includes/todo-item.11ty.js'))
	return { htmlTemplateEngine: "njk" };
};
