module.exports = todo => `
	<li class="my-4">
		<a${ todo.link ? ' href="'+ todo.link + '" target="blank"' : '' }>${ todo.name }</a>
		<div>${ todo.category }</div>
	</li>
`
