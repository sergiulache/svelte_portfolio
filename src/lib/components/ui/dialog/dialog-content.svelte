<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import X from 'lucide-svelte/icons/x';
	import * as Dialog from './index.js';
	import { cn, flyAndScale } from '$lib/utils.js';

	type $$Props = DialogPrimitive.ContentProps;

	let className: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = flyAndScale;
	export let transitionConfig: $$Props['transitionConfig'] = {
		duration: 200
	};
	export { className as class };
</script>

<Dialog.Portal>
	<Dialog.Overlay />
	<DialogPrimitive.Content
		{transition}
		{transitionConfig}
		class={cn(
			'fixed left-1/2 top-1/2 z-50 grid max-h-screen max-w-screen-xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-primary px-6 py-3 shadow-lg sm:rounded-lg',
			className
		)}
		{...$$restProps}
	>
		<slot />
		<DialogPrimitive.Close
			class="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-primary transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-black"
		>
			<X class="h-4 w-4 text-red-500" />
			<span class="sr-only">Close</span>
		</DialogPrimitive.Close>
	</DialogPrimitive.Content>
</Dialog.Portal>
