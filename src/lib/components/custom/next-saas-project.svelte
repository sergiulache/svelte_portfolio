<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import white_logo from '$lib/assets/white_logo.png';
	import Icon from '@iconify/svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import next_saas from '$lib/assets/nextjs_saas/next_saas.png';
</script>

<main class="w-full max-w-full">
	<div class="flex w-full flex-col">
		<div class="flex w-full flex-col gap-4 lg:grid lg:grid-cols-3">
			<div
				class="flex w-full max-w-[350px] flex-row self-start justify-self-center rounded-md border-2 shadow-lg lg:self-center"
			>
				<Dialog.Root>
					<Dialog.Trigger class="w-full p-2">
						<img
							alt="logo"
							src={next_saas}
							class="logo w-full max-w-full rounded-lg object-contain blur-[1px] grayscale duration-500 hover:cursor-zoom-in hover:blur-0 hover:grayscale-0 md:block lg:block"
						/>
					</Dialog.Trigger>
					<Dialog.Content class="flex w-full py-6">
						<img
							src={next_saas}
							class="rounded-lg object-contain"
							style="max-width: 100%; max-height: 100%;"
							alt="zoomed"
						/>
					</Dialog.Content>
				</Dialog.Root>
			</div>
			<div class="col-span-3 ml-0 flex w-full flex-col gap-2 md:col-span-2 lg:col-span-2 lg:ml-4">
				<h3 class="mb-4 text-2xl text-white">Next.js SaaS for handling warranty tickets</h3>
				<p class="text-white">
					This is a B2B SaaS aimed at big companies that need to handle warranty tickets in an
					efficient manner. The tech stack includes Next.js with server actions, Lucia Auth v3,
					Drizzle ORM for handling the Zod schemas, Supabase with Postgres for the database,
					Cloudflare R2 for file uploads, Redis and Bullmq for background jobs and Nodemailer for
					SMTP emails.
				</p>
				<p class="text-white">
					The project is currently private, but a demo is available and the live version is for
					sale.
				</p>
				<div class="mt-4 flex flex-row flex-wrap gap-2">
					<a
						href="https://service.alexambrinos.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="link-cover"
					>
						<Button class="bg-accent hover:bg-muted-foreground">Live Demo</Button>
					</a>
					<Button
						class="bg-foreground hover:bg-foreground/50 hover:ring-1 hover:ring-white"
						href="/contact">Subscribe to the live version</Button
					>
				</div>
			</div>
		</div>
	</div>
</main>
