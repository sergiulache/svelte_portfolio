<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import white_logo from '$lib/assets/white_logo.png';
    import boat from '$lib/assets/boat.jpg';
    import Icon from '@iconify/svelte';
</script>

<main>
    <div class="flex flex-col">
			<div class="grid grid-cols-3 gap-4">
				<div class="self-center border-2 rounded-xl justify-self-center shadow-lg">
					<img alt="logo" src={boat} class="logo hidden md:block lg:block grayscale blur-[2px] object-contain p-0.5 rounded-xl hover:grayscale-0 hover:blur-0 duration-300" style="width: 350px;" />
				</div>
				<div class="flex flex-col gap-2 col-span-3 md:col-span-2 lg:col-span-2">
					<h3 class="mb-4 text-2xl text-white">SvelteKit Auction Platform</h3>
					<p class="text-white">
						This is a project featuring a custom Python API with FastAPI, SvelteKit and AWS integration. The winner of each auction is determined by a custom AI model that was tweaked with Weka.
					</p>
					<p class="text-white">
						After the winner of an auction is chosen, the user has to verify their identity against a valid document using AWS Rekognition. Furthermore, there is digital signature verification for extra security. The code is available on GitHub.
					</p>
					<div class="mt-4 flex flex-row gap-2">
						<Button class="hover:underline hover:bg-primary underline-offset-4 " href=https://github.com/sergiulache/licentav2>
							<Icon icon="mdi-github" class="mr-2" width="2rem" color="#8a8a8a" />
							View Code
						</Button>
						<!-- <Button class="bg-accent hover:bg-muted-foreground">Live Demo</Button> -->
					</div>
				</div>
			</div>
		</div>
</main>