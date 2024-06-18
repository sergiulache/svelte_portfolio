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
					<h3 class="mb-4 text-2xl text-white">Next.js SaaS for handling warranty tickets</h3>
					<p class="text-white">
						This is a B2B SaaS aimed at big companies that need to handle warranty tickets in an efficient manner. The tech stack includes Next.js with server actions, Lucia Auth v3, Drizzle ORM for handling the Zod schemas, Supabase with Postgres for the database, Cloudflare R2 for file uploads, Redis and Bullmq for background jobs and Nodemailer for SMTP emails.
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