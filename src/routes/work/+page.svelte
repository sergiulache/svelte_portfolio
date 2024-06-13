<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import white_logo from '$lib/assets/white_logo.png';
    	import Icon from '@iconify/svelte';
		import {goto} from '$app/navigation';
</script>

<main>
	<p class="mb-9 text-4xl text-primary-foreground">My Work</p>
    <p class="text-background max-w-screen-sm my-4">
       I love helping people build ambitious projects with new and exciting technologies. Below are some of my most recent projects. 
    </p>
	<div class="flex flex-col gap-8 mt-12">
		<div class="flex flex-col">
			<div class="grid grid-cols-3 gap-4">
				<div class="self-center">
					<img alt="logo" src={white_logo} class="logo hidden md:block lg:block" style="width: 250px;" />
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
						<Button class="bg-accent hover:bg-muted-foreground">Live Demo</Button>
					</div>
				</div>
			</div>
		</div>
		<Separator class="bg-muted-foreground" />
		<div class="flex flex-col">
			<div class="grid grid-cols-3 gap-4">
				<div class="self-center">
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
		<Separator class="bg-muted-foreground" />
		<div class="flex flex-col">
			<div class="grid grid-cols-3 gap-4">
				<div class="self-center">
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
		<Separator class="bg-muted-foreground" />
		<div class="flex flex-col">
			<div class="grid grid-cols-3 gap-4">
				<div class="self-center">
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
						<Button class="bg-accent hover:bg-muted-foreground">Live Demo</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
