<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import white_logo from '$lib/assets/white_logo.png';
	import boat from '$lib/assets/boat.jpg';
	import Icon from '@iconify/svelte';
	import * as Dialog from '$lib/components/ui/dialog';

	// repeat the boat image 7 times
	const images = Array.from({ length: 7 }, (_, i) => boat);
</script>

<main>
	<div class="grid grid-cols-3">
		{#each images as image}
			<div class="m-3 flex flex-row rounded-xl border-2 shadow-lg">
				<img
					alt="logo"
					src={image}
					class="logo hidden rounded-xl object-contain duration-300 md:block lg:block"
					style="width: 350px;"
				/>
			</div>
		{/each}
	</div>
</main>
