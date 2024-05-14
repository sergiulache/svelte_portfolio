<script>
	import * as Avatar from '$lib/components/ui/avatar';
	import avatar from '$lib/assets/avatar.jpg';
	import Icon from '@iconify/svelte';
</script>

<main class="text-primary-foreground">
	<p class="mb-8 text-4xl tracking-wider">Sergiu Batrînac</p>
	<div class="flex flex-col gap-8">
		<p>
			Hello, I'm Sergiu, a web developer based in Romania. I have a passion for web development and
			creating digital experiences. I'm currently working on a B2B SaaS project with one of my university colleagues.
		</p>
		<div>
			<div class="flex flex-row gap-6 items-center">
				<Avatar.Root>
					<Avatar.Image src={avatar} alt="avatar" />
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex flex-col gap-1">
					<div class="flex flex-row items-center gap-2">
						<Icon icon="mdi-instagram" width="2rem" color="#8a8a8a" />
						<a class="text-[#8a8a8a]" href="https://www.instagram.com/serghei.atentat/">8 total posts</a>
					</div>
                    <div class="flex flex-row items-center gap-2">
						<Icon icon="mdi-github" width="2rem" color="#8a8a8a" />
						<a class="text-[#8a8a8a]" href="https://github.com/sergiulache">339 contributions in the last year</a>
					</div>
                    <div class="flex flex-row items-center gap-2">
						<Icon icon="mdi:calendar-check" width="2rem" color="#8a8a8a"/>
						<a class="text-[#8a8a8a]" href="https://github.com/sergiulache">5 finished projects</a>
					</div>
				</div>
			</div>
		</div>
        <p>
			I love to work with modern technologies and frameworks such as Svelte and SvelteKit, but most of my projects are built with React and Next.js. Amongst my projects, you can find a variety of web applications, from simple landing pages to complex e-commerce platforms. I was always more passionate about the smaller projects, as they allow me to experiment with new technologies and ideas.
		</p>
	</div>
</main>
