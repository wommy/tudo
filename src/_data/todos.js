const fetch = require('node-fetch')

module.exports = async function() {
	return await fetch('http://technomad.media:1337/todos')
		.then( res => res.json() )
}
