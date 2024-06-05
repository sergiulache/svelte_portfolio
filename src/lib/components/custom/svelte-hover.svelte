<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import CalendarDays from 'lucide-svelte/icons/calendar-days';
</script>

<main style="display: inline;">
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
</main>
