<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import white_logo from '$lib/assets/white_logo.png';
	import Icon from '@iconify/svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import svelte_portofolio from '$lib/assets/svelte_portofolio/svelte_portofolio.png';

	function openInNewTab(url: string | URL | undefined) {
		window.open(url, '_blank', 'noopener,noreferrer');
	}
</script>

<main>
	<div class="flex flex-col">
		<div class="flex flex-col gap-4 lg:grid lg:grid-cols-3">
			<div
				class="flex flex-row self-start justify-self-center rounded-md border-2 shadow-lg lg:self-center"
			>
				<Dialog.Root>
					<Dialog.Trigger class="p-2">
						<img
							alt="logo"
							src={svelte_portofolio}
							class="logo rounded-lg object-contain blur-[1px] grayscale duration-500 hover:cursor-zoom-in hover:blur-0 hover:grayscale-0 md:block lg:block"
							style="width: 350px;"
						/>
					</Dialog.Trigger>
					<Dialog.Content class="flex">
						<img
							src={svelte_portofolio}
							class="rounded-lg object-scale-down"
							style="max-width: 100%; max-height: 100%;"
							alt="zoomed"
						/>
					</Dialog.Content>
				</Dialog.Root>
			</div>
			<div class="col-span-3 ml-0 flex flex-col gap-2 md:col-span-2 lg:col-span-2 lg:ml-4">
				<h3 class="mb-4 text-2xl text-white">SvelteKit Portofolio</h3>
				<p class="text-white">
					This is the portofolio you are currently viewing. It is built with SvelteKit, TailwindCSS
					and Shadcn components.
				</p>
				<p class="text-white">The project is open-source and available on GitHub.</p>
				<div class="mt-4 flex flex-row gap-2">
					<a
						href="https://github.com/sergiulache/svelte_portofolio"
						target="_blank"
						rel="noopener noreferrer"
						class="link-cover"
					>
						<Button class="underline-offset-4 hover:bg-primary hover:underline">
							<Icon icon="mdi-github" class="mr-2" width="2rem" color="#8a8a8a" />
							View Code
						</Button>
					</a>
					<!-- <Button class="bg-accent hover:bg-muted-foreground">Live Demo</Button> -->
				</div>
			</div>
		</div>
	</div>
</main>
