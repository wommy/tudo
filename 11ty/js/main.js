const axios = require('axios');

async function getTodos() {
	try {
		const res = await axios.get('https://technomad-strapi.herokuapp.com/todos')
		console.log(res);
	} catch (error) {
		console.error(error);
	}
}
