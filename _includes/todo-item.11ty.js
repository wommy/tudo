module.exports = todo => `
	<li>
		<a${ todo.link ?` href="${ todo.link }" target="blank"`:`` }>
			${ todo.name }
		</a>
		<div>${ todo.category }</div>
	</li>
`
