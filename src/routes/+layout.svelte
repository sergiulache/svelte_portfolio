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
		align-items: flex-start; 
		justify-content: center;
		padding: 2rem 1rem 1rem; 
	}

	.navigation {
		display: flex;
		flex-direction: column;
		justify-content: flex-start; 
	}

	.content {
		flex-grow: 1;
		display: flex;
		align-items: flex-start; 
		justify-content: flex-start;
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
		background-color: #4CAF50; 
		color: white;
	}

	@media (min-width: 1024px) {
		.container {
			padding: 14rem 12rem 8rem 4rem; 
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
