<script>
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import white_logo from '$lib/assets/white_logo.png'
	import '../app.css';
</script>

<style>
	:global(body) {
		@apply bg-primary;
	}

	.container {
		display: flex;
		min-height: 100vh;
		align-items: flex-start; /* Schimbat de la 'center' la 'flex-start' */
		justify-content: center;
		padding: 2rem 1rem 1rem; /* Adaugat padding top pentru spațiu */
	}

	.navigation {
		display: flex;
		flex-direction: column;
		justify-content: flex-start; /* Asigurați că logo-ul și butoanele încep de sus */
	}

	.content {
		flex-grow: 1;
		display: flex;
		align-items: flex-start; /* Aliniere la top pentru conținut */
		justify-content: flex-start; /* Centrare eliminată, pentru aliniere la stânga */
		padding: 0 2rem;
		max-width: 1200px;
	}

	.wrapper {
		display: flex;
		width: 100%;
		max-width: 1800px;
		margin: 0 auto;
	}

	.active-button {
		background-color: #4CAF50; /* Un verde pentru exemplu */
		color: white;
	}

	@media (min-width: 1024px) {
		.container {
			padding: 18rem 12rem 8rem 4rem; /* Ajustat padding */
		}
	}
</style>

<main class="wrapper">
	<div class="container">
		<div class="navigation gap-2">
			<img alt="logo" src={white_logo} class="logo" style="width: 100px;"> <!-- Ajustat width-ul pentru logo -->
			<Button href="/" class="text-md {($page.url.pathname === '/') ? 'bg-accent' : ''}">home</Button>
			<Button href="/about" class="text-md {($page.url.pathname === '/about') ? 'bg-accent' : ''}">about</Button>
			<Button href="/contact" class="text-md {($page.url.pathname === '/contact') ? 'bg-accent' : ''}">contact</Button>
		</div>

		<div class="content mt-4">
			<slot></slot>
		</div>
	</div>
</main>
