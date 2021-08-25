const fetch = require('node-fetch')
const url = 'http://technomad.media:1337/todos'

module.exports = async ()=> await fetch(url)
	.then( res => res.json() )
