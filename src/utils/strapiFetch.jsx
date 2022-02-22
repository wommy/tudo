import fetch from 'node-fetch'

const url = 'http://technomad.media:1337/todos'

export default async () => await fetch(url).then(res => res.json())
