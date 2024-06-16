<script>
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import white_logo from '$lib/assets/white_logo.png'
	import '../app.css';
	import * as Sheet from '$lib/components/ui/sheet';
	import Icon from '@iconify/svelte';
</script>

<style>
	:global(body) {
		@apply bg-primary;
		overflow-y: scroll;
	}

	.container {
		display: flex;
		min-height: 100vh;
		align-items: flex-start; 
		justify-content: center;
		padding: 2rem 1rem 1rem; 
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

	@media (min-width: 1024px) {
		.container {
			padding: 14rem 12rem 8rem 4rem; 
		}
		.navigation {
    display: none;
  }
	}
</style>

<main class="wrapper">
  <div class="container">
    <Sheet.Root>
      <Sheet.Trigger class="md:hidden text-white">
		<Icon icon="mdi:menu" width="2rem" />
	  </Sheet.Trigger>
      <Sheet.Content class="navigation gap-2 bg-primary" side="top">
        <img alt="logo" src={white_logo} class="logo" style="width: 100px;">
		<div class="flex flex-row gap-4 ml-1">
<Button href="/" class="text-md {($page.url.pathname === '/') ? 'bg-accent' : ''}">home</Button>
        <Button href="/work" class="text-md {($page.url.pathname === '/work') ? 'bg-accent' : ''}">work</Button>
        <Button href="/contact" class="text-md {($page.url.pathname === '/contact') ? 'bg-accent' : ''}">contact</Button>

		</div>
        
      </Sheet.Content>
    </Sheet.Root>

    <div class="gap-2 hidden md:flex lg:flex md:flex-col lg:flex-col">
      <img alt="logo" src={white_logo} class="logo" style="width: 100px;">
      <Button href="/" class="text-md {($page.url.pathname === '/') ? 'bg-accent' : ''}">home</Button>
      <Button href="/work" class="text-md {($page.url.pathname === '/work') ? 'bg-accent' : ''}">work</Button>
      <Button href="/contact" class="text-md {($page.url.pathname === '/contact') ? 'bg-accent' : ''}">contact</Button>
    </div>

    <div class="content mt-4 w-full">
      <slot></slot>
    </div>
  </div>
</main>
