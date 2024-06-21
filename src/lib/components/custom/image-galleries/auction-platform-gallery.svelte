<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import white_logo from '$lib/assets/white_logo.png';
	import boat from '$lib/assets/boat.jpg';
	import Icon from '@iconify/svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import auction_created from '$lib/assets/auction_platform/auction_created.png';
	import auction_details from '$lib/assets/auction_platform/auction_details.png';
	import auction_page from '$lib/assets/auction_platform/auction_page.png';
	import auctions_list  from '$lib/assets/auction_platform/auctions_list.png';
	import auctions_table from '$lib/assets/auction_platform/auctions_table.png';
	import bids_list from '$lib/assets/auction_platform/bids_list.png';
	import verification_photo from '$lib/assets/auction_platform/verification_photo.png';

	// create an array from the auction images
	const images = [auction_created, auction_details, auction_page, auctions_list, auctions_table, bids_list, verification_photo];
</script>

<main>
	<div class="grid lg:grid-cols-3 grid-cols-2 md:grid-cols-3 p-1">
		{#each images as image}
			<div class="m-3 flex flex-row rounded-xl border-2 shadow-lg">
				<img
					alt="logo"
					src={image}
					class="logo  rounded-xl object-contain duration-300 md:block lg:block"
					style="width: 350px;"
				/>
			</div>
		{/each}
	</div>
</main>
