<style lang="scss">
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;

		figcaption {
			text-transform: capitalize;
		}
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
	<link rel="stylesheet" href="css/fontawesome/pro/duotone.css">
</svelte:head>

<h1><i class="fad fa-acorn"></i> Great success! <i class="fad fa-acorn"></i></h1>

<figure>
	<img alt='Borat' src='assets/images/great-success.png'>
	<figcaption>high five!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
