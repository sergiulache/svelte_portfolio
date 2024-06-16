<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import * as Form from '$lib/components/ui/form';
	import Label from '$lib/components/ui/label/label.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
</script>

<main class="text-primary-foreground w-full md:w-3/4">
	<p class="mb-4 text-4xl">Contact me</p>

	<div class="flex flex-row gap-2 w-full">
		<form action="https://formspree.io/f/myyrrlrn" method="POST" class="w-full">
			<Label for="name" class="text-primary-foreground">Name</Label>
			<Input
				id="name"
				name="name"
				type="text"
				class="mb-4  bg-transparent focus:ring-0 focus-visible:ring-0 md:w-1/2 lg:w-1/2"
			/>
			<Label for="email" class="text-primary-foreground">Email</Label>
			<Input
				id="email"
				name="email"
				type="email"
				class="mb-4  bg-transparent focus:ring-0 focus-visible:ring-0 md:w-1/2 lg:w-1/2"
			/>

			<Label for="message" class="text-primary-foreground">Message</Label>
			<Textarea
				id="message"
				name="message"
				class="mb-4 bg-transparent focus:ring-0 focus-visible:ring-0"
			></Textarea>
			<Button type="submit" class="bg-accent hover:bg-muted-foreground">Send</Button>
		</form>
	</div>
</main>
