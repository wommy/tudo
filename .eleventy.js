module.exports = (config) => {
	config.setTemplateFormats("njk,css,md")
	return {
		dir: {
			input: "11ty"
		}
	};
};
