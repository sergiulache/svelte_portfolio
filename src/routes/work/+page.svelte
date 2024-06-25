<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import white_logo from '$lib/assets/white_logo.png';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import SveltePortofolioProject from '$lib/components/custom/svelte-portofolio-project.svelte';
	import NextSaasProject from '$lib/components/custom/next-saas-project.svelte';
	import AuctionPlatformProject from '$lib/components/custom/auction-platform-project.svelte';
	import TanstackSaasProject from '$lib/components/custom/tanstack-saas-project.svelte';
</script>

<main class="min-h-full pb-12">
	<p class="mb-9 text-center text-4xl text-primary-foreground md:text-start lg:text-start">
		My Work
	</p>
	<p class="my-4 text-background">
		I love helping people build ambitious projects with new and exciting technologies. Below are
		some of my most recent projects.
	</p>
	<div class="mt-12 flex flex-col gap-8">
		<NextSaasProject />
		<Separator class="bg-muted-foreground" />
		<TanstackSaasProject />
		<Separator class="bg-muted-foreground" />
		<AuctionPlatformProject />
		<Separator class="bg-muted-foreground" />
		<SveltePortofolioProject />
	</div>
</main>
