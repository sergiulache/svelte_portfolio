<script lang="ts">
	/** @type {import('./$types').PageData} */
	import * as Avatar from '$lib/components/ui/avatar';
	import avatar from '$lib/assets/avatar.jpg';
	import Icon from '@iconify/svelte';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import CalendarDays from 'lucide-svelte/icons/calendar-days';

	export let data;
</script>

<main class="text-primary-foreground">
	<p class="mb-8 text-4xl tracking-wider">Sergiu Batrînac</p>
	<div class="flex flex-col gap-8">
		<p>
			Hello, I'm Sergiu, a web developer based in Romania. I have a passion for web development and
			creating digital experiences. I'm currently working on a B2B SaaS project with one of my
			university colleagues.
		</p>
		<div>
			<div class="flex flex-row items-center gap-6">
				<Avatar.Root>
					<Avatar.Image src={avatar} alt="avatar" />
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex flex-col gap-1">
					<div class="flex flex-row items-center gap-2 underline-offset-4 hover:underline">
						<Icon icon="mdi-instagram" width="2rem" color="#8a8a8a" />
						<a class="text-[#8a8a8a]" href="https://www.instagram.com/serghei.atentat/"
							>8 total posts</a
						>
					</div>
					<div class="flex flex-row items-center gap-2 underline-offset-4 hover:underline">
						<Icon icon="mdi-github" width="2rem" color="#8a8a8a" />
						<a class="text-[#8a8a8a]" href="https://github.com/sergiulache"
							>{data.props.contributions} contributions in the last year</a
						>
					</div>
					<div class="flex flex-row items-center gap-2 underline-offset-4 hover:underline">
						<Icon icon="mdi:calendar-check" width="2rem" color="#8a8a8a" />
						<a class="text-[#8a8a8a]" href="https://github.com/sergiulache">5 finished projects</a>
					</div>
				</div>
			</div>
		</div>
		<p>
			I love to work with modern technologies and frameworks such as

			<HoverCard.Root>
				<HoverCard.Trigger
					href="https://github.com/sveltejs"
					target="_blank"
					rel="noreferrer noopener"
					class="rounded-sm text-[#8a8a8a] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
				>
					@sveltejs
				</HoverCard.Trigger>
				<HoverCard.Content class="w-80 bg-primary">
					<div class="flex justify-between space-x-4">
						<Avatar.Root>
							<Avatar.Image src="https://github.com/sveltejs.png" />
							<Avatar.Fallback>SK</Avatar.Fallback>
						</Avatar.Root>
						<div class="space-y-1">
							<h4 class="text-sm font-semibold text-primary-foreground">@sveltejs</h4>
							<p class="text-sm text-primary-foreground">Cybernetically enhanced web apps.</p>
							<div class="flex items-center pt-2">
								<CalendarDays class="mr-2 h-4 w-4 text-white opacity-70" />
								<span class="text-xs text-muted"> Created November 2016 </span>
							</div>
						</div>
					</div>
				</HoverCard.Content>
			</HoverCard.Root>
			and SvelteKit, but most of my projects are built with
			<HoverCard.Root>
				<HoverCard.Trigger
					href="https://github.com/vercel/next.js"
					target="_blank"
					rel="noreferrer noopener"
					class="rounded-sm text-[#8a8a8a] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
				>
					@next.js
				</HoverCard.Trigger>
				<HoverCard.Content class="w-80 bg-primary">
					<div class="flex justify-between space-x-4">
						<Avatar.Root>
							<Avatar.Image src="https://github.com/nextjs.png" />
							<Avatar.Fallback>Next</Avatar.Fallback>
						</Avatar.Root>
						<div class="space-y-1">
							<h4 class="text-sm font-semibold text-primary-foreground">@next.js</h4>
							<p class="text-sm text-primary-foreground">The React framework for the web.</p>
							<div class="flex items-center pt-2">
								<CalendarDays class="mr-2 h-4 w-4 text-white opacity-70" />
								<span class="text-xs text-muted"> Created October 2016 </span>
							</div>
						</div>
					</div>
				</HoverCard.Content>
			</HoverCard.Root> and React. Amongst my projects, you can find a variety of web applications, from simple landing pages
			to complex e-commerce platforms. I was always more passionate about the smaller projects, as
			they allow me to experiment with new technologies and ideas.
		</p>
	</div>
</main>
