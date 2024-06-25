<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import Icon from '@iconify/svelte';

	let name = '';
	let email = '';
	let message = '';

	function handleCancel() {
		name = '';
		email = '';
		message = '';
	}
</script>

<main class="flex w-full flex-col text-primary-foreground md:w-full">
	<p class="mb-4 text-center text-4xl md:text-start lg:text-start">Contact me</p>
	<div class="md:1/2 w:1/2 flex flex-col gap-4 md:flex-col lg:w-full lg:flex-row">
		<Card.Root class=" w-full bg-primary">
			<Card.Header>
				<Card.Title>Send me a message</Card.Title>
				<Card.Description>Reach out to me in one-click.</Card.Description>
			</Card.Header>
			<Card.Content>
				<form action="https://formspree.io/f/myyrrlrn" method="POST" id="contactForm">
					<div class="grid w-full items-center gap-4">
						<div class="flex flex-col space-y-1.5">
							<Label for="name">Name</Label>
							<Input
								id="name"
								name="name"
								required
								class="text-black focus:ring-0 focus-visible:ring-0"
								placeholder="First and last name"
								bind:value={name}
							/>
						</div>
						<div class="flex flex-col space-y-1.5">
							<Label for="email">Email</Label>
							<Input
								id="email"
								required
								type="email"
								name="email"
								class="text-black focus:ring-0 focus-visible:ring-0"
								placeholder="Your email address"
								bind:value={email}
							/>
						</div>
						<div class="flex flex-col space-y-1.5">
							<Label for="message">Message</Label>
							<Textarea
								required
								id="message"
								name="message"
								class="mb-4  text-black focus:ring-0 focus-visible:ring-0"
								placeholder="Your message"
								bind:value={message}
							></Textarea>
						</div>
					</div>
					<div class="mt-4 flex justify-between">
						<Button variant="link" class="text-white" on:click={handleCancel}>Cancel</Button>
						<Button type="submit" class="bg-accent hover:bg-muted-foreground">Send</Button>
					</div>
				</form>
			</Card.Content>
		</Card.Root>

		<Card.Root class="h-1/2 bg-primary">
			<Card.Header>
				<Card.Title>Reach me directly</Card.Title>
			</Card.Header>
			<Card.Content class="flex flex-col gap-4">
				<div class="flex flex-row gap-2">
					<Icon icon="mdi:phone" width="2rem" color="#8a8a8a" />
					<a class="font-serif text-lg font-semibold" href="tel:+40726816544">+40 726 816 544</a>
				</div>
				<div class="flex flex-row gap-2">
					<Icon icon="mdi:email" width="2rem" color="#8a8a8a" />
					<a class="font-serif text-lg font-semibold" href="mailto:sergiu272001@gmail.com"
						>sergiu272001@gmail.com</a
					>
				</div>
				<div class="flex flex-row gap-2">
					<Icon icon="mdi:pin" width="2rem" color="#8a8a8a" />
					<p class="font-serif text-lg font-semibold">Bucharest, Romania</p>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</main>
