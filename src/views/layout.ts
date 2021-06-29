import { html, HTML } from "@leafac/html"

const sqlForm = html`<form action="" method="post">
	<textarea name="sql" id="" cols="30" rows="10"></textarea>
	<button type="submit">run query</button>
</form>`

export default (): HTML => html`
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>todo | technomad</title>
</head>

<body>
	<header>
		<h1>todos</h1>
	</header>
	<main>
		$${sqlForm}
	</main>
</body>

</html>
`.trim()