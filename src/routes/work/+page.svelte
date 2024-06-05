<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import white_logo from '$lib/assets/white_logo.png';
</script>

<main>
	<p class="mb-4 text-4xl text-primary-foreground">My Work</p>
	<div class="flex flex-col gap-8">
		<div class="flex flex-col gap-4">
			<div class="flex flex-row gap-4">
				<div class="self-center">
					<img alt="logo" src={white_logo} class="logo" style="width: 100px;" />
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="mb-4 text-2xl text-white">Project 1</h3>
					<p class="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio sunt, odit aut
						provident facilis.
					</p>
					<p class="text-white">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem a eius iure provident
						dicta saepe distinctio optio culpa sequi tempora!
					</p>
					<div class="mt-4 flex flex-row gap-2">
						<Button class="bg-muted-foreground">View Code</Button>
						<Button>Live Demo</Button>
					</div>
				</div>
			</div>
		</div>
		<Separator class="bg-muted-foreground" />
		<div class="flex flex-col gap-4">
			<div class="flex flex-row gap-4">
				<div class="self-center">
					<img alt="logo" src={white_logo} class="logo" style="width: 100px;" />
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="mb-4 text-2xl text-white">Project 2</h3>
					<p class="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio sunt, odit aut
						provident facilis.
					</p>
					<p class="text-white">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem a eius iure provident
						dicta saepe distinctio optio culpa sequi tempora!
					</p>
					<div class="mt-4 flex flex-row gap-2">
						<Button class="bg-muted-foreground">View Code</Button>
						<Button>Live Demo</Button>
					</div>
				</div>
			</div>
		</div>
		<Separator class="bg-muted-foreground" />
		<div class="flex flex-col gap-4">
			<div class="flex flex-row gap-4">
				<div class="self-center">
					<img alt="logo" src={white_logo} class="logo" style="width: 100px;" />
				</div>
				<div class="flex flex-col gap-2">
					<h3 class="mb-4 text-2xl text-white">Project 3</h3>
					<p class="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio sunt, odit aut
						provident facilis.
					</p>
					<p class="text-white">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem a eius iure provident
						dicta saepe distinctio optio culpa sequi tempora!
					</p>
					<div class="mt-4 flex flex-row gap-2">
						<Button class="bg-muted-foreground">View Code</Button>
						<Button>Live Demo</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
