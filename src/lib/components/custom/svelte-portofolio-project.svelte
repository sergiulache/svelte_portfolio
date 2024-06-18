<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import white_logo from '$lib/assets/white_logo.png';
    import Icon from '@iconify/svelte';
</script>

<main>
    <div class="flex flex-col">
			<div class="grid grid-cols-3 gap-4">
				<div class="self-center border-2 rounded-xl justify-self-center">
					<img alt="logo" src={white_logo} class="logo hidden md:block lg:block" style="width: 250px;" />
				</div>
				<div class="flex flex-col gap-2 col-span-3 md:col-span-2 lg:col-span-2">
					<h3 class="mb-4 text-2xl text-white">SvelteKit Portofolio</h3>
					<p class="text-white">
						This is the portofolio you are currently viewing. It is built with SvelteKit, TailwindCSS and Shadcn components.
					</p>
					<p class="text-white">
						The project is open-source and available on GitHub.
					</p>
					<div class="mt-4 flex flex-row gap-2">
						<Button class="hover:underline hover:bg-primary underline-offset-4 " href=https://github.com/sergiulache/svelte_portofolio>
							<Icon icon="mdi-github" class="mr-2" width="2rem" color="#8a8a8a" />
							View Code
						</Button>
						<!-- <Button class="bg-accent hover:bg-muted-foreground">Live Demo</Button> -->
					</div>
				</div>
			</div>
		</div>
</main>