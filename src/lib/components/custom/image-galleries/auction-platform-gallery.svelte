<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import white_logo from '$lib/assets/white_logo.png';
	import boat from '$lib/assets/boat.jpg';
	import Icon from '@iconify/svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import auction_created from '$lib/assets/auction_platform/auction_created.png';
	import auction_details from '$lib/assets/auction_platform/auction_details.png';
	import auction_page from '$lib/assets/auction_platform/auction_page.png';
	import auctions_list from '$lib/assets/auction_platform/auctions_list.png';
	import auctions_table from '$lib/assets/auction_platform/auctions_table.png';
	import bids_list from '$lib/assets/auction_platform/bids_list.png';
	import verification_photo from '$lib/assets/auction_platform/verification_photo.png';

	// create an array from the auction images
	const images = [
		auction_created,
		auction_details,
		auction_page,
		auctions_list,
		auctions_table,
		bids_list,
		verification_photo
	];

	let imageZoomed = false;

	const handleHideMainGallery = () => {
		imageZoomed = !imageZoomed;
	};
</script>

<main>
	<div class="grid grid-cols-2 p-1 md:grid-cols-3 lg:grid-cols-3">
		{#each images as image}
			<div class="m-3 flex flex-row rounded-lg">
				<Dialog.Root>
					<Dialog.Trigger class="p-0.5" on:click={handleHideMainGallery}>
						<img
							alt="logo"
							src={image}
							class="logo rounded-lg object-cover duration-300"
							style="width: 350px;"
						/>
					</Dialog.Trigger>

					<Dialog.Content class="flex h-screen w-full items-center justify-center">
						
					</Dialog.Content>
				</Dialog.Root>
			</div>
		{/each}
	</div>
</main>
