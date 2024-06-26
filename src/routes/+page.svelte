<script lang="ts">
	/** @type {import('./$types').PageData} */
	import * as Avatar from '$lib/components/ui/avatar';
	import avatar from '$lib/assets/avatar.jpg';
	import Icon from '@iconify/svelte';
	import SvelteHover from '$lib/components/custom/svelte-hover.svelte';
	import NextjsHover from '$lib/components/custom/nextjs-hover.svelte';

	export let data;
</script>

<svelte:head>
	<meta
		name="description"
		content="Homepage of Sergiu Batrinac, a web developer based in Romania."
	/>
</svelte:head>

<main class="text-primary-foreground">
	<p class="mb-9 text-center text-4xl tracking-wider md:text-start lg:text-start">
		Sergiu Batrînac
	</p>
	<div class="flex flex-col gap-8">
		<p>
			Hello, I'm Sergiu, a web developer based in Romania. I have a passion for web development and
			creating digital experiences. I'm currently working on a B2B SaaS project with one of my
			university colleagues.
		</p>
		<div>
			<div class="flex flex-col items-center gap-6 md:flex-row lg:flex-row">
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
						<a class="text-[#8a8a8a]" href="/work">3 finished projects</a>
					</div>
				</div>
			</div>
		</div>
		<div>
			<p>
				I love to work with modern technologies and frameworks such as
				<SvelteHover />
				and SvelteKit, but most of my projects are built with
				<NextjsHover />
				and React. Amongst my projects, you can find a variety of web applications, from simple landing
				pages to complex SaaS platforms. I was always more passionate about the smaller projects, as
				they allow me to experiment with new technologies and ideas.
			</p>
		</div>
	</div>
</main>
