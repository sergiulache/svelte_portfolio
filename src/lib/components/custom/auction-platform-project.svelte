<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import white_logo from '$lib/assets/white_logo.png';
	import boat from '$lib/assets/boat.jpg';
	import auction_page from '$lib/assets/auction_platform/auction_page.png';
	import Icon from '@iconify/svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import AuctionPlatformGallery from './image-galleries/auction-platform-gallery.svelte';
</script>

<main>
	<div class="flex flex-col">
		<div class="flex flex-col gap-4 lg:grid lg:grid-cols-3">
			<div
				class="flex flex-row self-start justify-self-center rounded-md border-2 shadow-lg lg:self-center"
			>
				<Dialog.Root>
					<Dialog.Trigger class="p-0">
						<img
							alt="logo"
							src={auction_page}
							class="logo rounded-none object-contain blur-[1px] grayscale duration-500 hover:cursor-zoom-in hover:blur-0 hover:grayscale-0 md:block lg:block"
							style="width: 350px;"
						/>
					</Dialog.Trigger>
					<Dialog.Content class="flex p-0">
						<img
							src={auction_page}
							class="rounded-lg object-scale-down"
							style="max-width: 100%; max-height: 100%;"
							alt="zoomed"
						/>
					</Dialog.Content>
				</Dialog.Root>
			</div>
			<div class="col-span-3 ml-0 flex flex-col gap-2 md:col-span-2 lg:col-span-2 lg:ml-4">
				<h3 class="mb-4 text-2xl text-white">SvelteKit Auction Platform</h3>
				<p class="text-white">
					This is a project featuring a custom Python API with FastAPI, SvelteKit and AWS
					integration. The winner of each auction is determined by a custom AI model that was
					tweaked with Weka.
				</p>
				<p class="text-white">
					After the winner of an auction is chosen, the user has to verify their identity against a
					valid document using AWS Rekognition. Furthermore, there is digital signature verification
					for extra security. The code is available on GitHub.
				</p>
				<div class="mt-4 flex flex-row gap-2">
					<!-- <Button class="bg-accent hover:bg-muted-foreground">Live Demo</Button> -->
					<a
						href="https://github.com/sergiulache/licentav2"
						target="_blank"
						rel="noopener noreferrer"
						class="link-cover"
					>
						<Button class="underline-offset-4 hover:bg-primary hover:underline">
							<Icon icon="mdi-github" class="mr-2" width="2rem" color="#8a8a8a" />
							View Code
						</Button>
					</a>
				</div>
			</div>
		</div>
	</div>
</main>
