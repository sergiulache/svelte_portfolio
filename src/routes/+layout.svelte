<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import white_logo from '$lib/assets/white_logo.png';
	import '../app.css';
	import * as Sheet from '$lib/components/ui/sheet';
	import Icon from '@iconify/svelte';
	import Footer from '$lib/components/custom/footer.svelte';
</script>

<div class="page-wrapper">
	<div class="content-wrapper">
		<main class="wrapper">
			<div class="container">
				<Sheet.Root>
					<Sheet.Trigger class="text-white md:hidden">
						<Icon icon="mdi:menu" width="2rem" />
					</Sheet.Trigger>
					<Sheet.Content class="navigation gap-2 bg-primary" side="top">
						<img alt="logo" src={white_logo} class="logo" style="width: 100px;" />
						<div class="ml-1 flex flex-row gap-4">
							<Button href="/" class="text-md {$page.url.pathname === '/' ? 'bg-accent' : ''}"
								>home</Button
							>
							<Button
								href="/work"
								class="text-md {$page.url.pathname === '/work' ? 'bg-accent' : ''}">work</Button
							>
							<Button
								href="/contact"
								class="text-md {$page.url.pathname === '/contact' ? 'bg-accent' : ''}"
								>contact</Button
							>
						</div>
					</Sheet.Content>
				</Sheet.Root>
				<div class="hidden gap-2 md:flex md:flex-col lg:flex lg:flex-col">
					<img alt="logo" src={white_logo} class="logo" style="width: 100px;" />
					<Button href="/" class="text-md {$page.url.pathname === '/' ? 'bg-accent' : ''}"
						>home</Button
					>
					<Button href="/work" class="text-md {$page.url.pathname === '/work' ? 'bg-accent' : ''}"
						>work</Button
					>
					<Button
						href="/contact"
						class="text-md {$page.url.pathname === '/contact' ? 'bg-accent' : ''}">contact</Button
					>
				</div>
				<div class="content mt-4 w-full">
					<slot></slot>
				</div>
			</div>
		</main>
	</div>

	<Footer />
</div>

<style>
	:global(body) {
		@apply bg-primary;
		margin: 0;
		padding: 0;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		overflow-y: scroll; /* Always show vertical scrollbar */
	}
	.page-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.content-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.wrapper {
		flex: 1;
		display: flex;
		width: 100%;
		max-width: 1800px;
		margin: 0 auto;
	}
	.container {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		padding: 2rem 1rem 1rem;
		width: 100%;
	}
	.content-area {
		flex: 1;
		overflow-y: auto;
		margin-right: calc(100vw - 100%); /* Compensate for scrollbar width */
	}
	.content {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		padding: 0 2rem;
		max-width: 1200px;
		width: 100%;
	}
	@media (min-width: 1024px) {
		.container {
			padding: 4rem 4rem 2rem 4rem;
		}
		.navigation {
			display: none;
		}
	}
</style>
