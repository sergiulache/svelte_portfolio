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
					<h3 class="mb-4 text-2xl text-white">Improved version of the Next.js SaaS</h3>
					<p class="text-white">
						This is the aforementioned SaaS, but migrated to newer technologies with security and performance improvements. The tech stack is changed to HonoJS for the API and Tanstack Router for routing. The frontend is using vanilla React with TailwindCSS.
					</p>
					<p class="text-white">
						The project is currently private, but a live demo is available upon request.
					</p>
					<div class="mt-4 flex flex-row gap-2">
						<Button class="bg-accent hover:bg-muted-foreground" href="/contact">Request Live Demo</Button>
					</div>
				</div>
			</div>
		</div>
</main>