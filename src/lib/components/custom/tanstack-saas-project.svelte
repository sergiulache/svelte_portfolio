<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import white_logo from '$lib/assets/white_logo.png';
	import Icon from '@iconify/svelte';
	import tanstack_saas from '$lib/assets/tanstack_saas/tanstack_saas.png';
	import * as Dialog from '$lib/components/ui/dialog';
</script>

<main>
	<div class="flex flex-col">
		<div class="flex flex-col gap-4 lg:grid lg:grid-cols-3">
			<div
				class="flex flex-row self-start justify-self-center rounded-xl border-2 shadow-lg lg:self-center"
			>
				<Dialog.Root>
					<Dialog.Trigger class="p-0">
						<img
							alt="logo"
							src={tanstack_saas}
							class="logo rounded-lg object-contain blur-[1px] grayscale duration-500 hover:cursor-zoom-in hover:blur-0 hover:grayscale-0 md:block lg:block"
							style="width: 350px;"
						/>
					</Dialog.Trigger>
					<Dialog.Content class="flex h-5/6 w-full items-center justify-center">
						<img
							src={tanstack_saas}
							class="rounded-lg object-scale-down"
							style="max-width: 100%; max-height: 100%;"
							alt="zoomed"
						/>
					</Dialog.Content>
				</Dialog.Root>
			</div>
			<div class="col-span-3 ml-0 flex flex-col gap-2 md:col-span-2 lg:col-span-2 lg:ml-4">
				<h3 class="mb-4 text-2xl text-white">Improved version of the Next.js SaaS</h3>
				<p class="text-white">
					This is the aforementioned SaaS, but migrated to newer technologies with security and
					performance improvements. The tech stack is changed to HonoJS for the API and Tanstack
					Router for routing. The frontend is using vanilla React with TailwindCSS.
				</p>
				<p class="text-white">
					The project is currently being worked on, but a live demo is available upon request.
				</p>
				<div class="mt-4 flex flex-row gap-2">
					<Button class="bg-accent hover:bg-muted-foreground" href="/contact"
						>Request Live Demo</Button
					>
				</div>
			</div>
		</div>
	</div>
</main>
