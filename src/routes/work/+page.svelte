<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import white_logo from '$lib/assets/white_logo.png';
    	import Icon from '@iconify/svelte';
</script>

<main>
	<p class="mb-9 text-4xl text-primary-foreground">My Work</p>
    <p class="text-background max-w-screen-sm my-4">
       I love helping people build ambitious projects with new and exciting technologies. Below are some of my most recent projects. 
    </p>
	<div class="flex flex-col gap-8 mt-12">
		<div class="flex flex-col">
			<div class="flex flex-row gap-4">
				<div class="self-center">
					<img alt="logo" src={white_logo} class="logo hidden md:block lg:block" style="width: 350px;" />
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
						<Button class="hover:underline hover:bg-primary underline-offset-4 ">
                            <Icon icon="mdi-github" class="mr-2" width="2rem" color="#8a8a8a" />
                            View Code
                        </Button>
						<Button class="bg-accent hover:bg-muted-foreground">Live Demo</Button>
					</div>
				</div>
			</div>
		</div>
		<Separator class="bg-muted-foreground" />
		<div class="flex flex-col">
			<div class="flex flex-row gap-4">
				<div class="self-center">
					<img alt="logo" src={white_logo} class="logo hidden md:block lg:block" style="width: 350px;" />
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
						<Button class="hover:underline hover:bg-primary underline-offset-4 ">
                            <Icon icon="mdi-github" class="mr-2" width="2rem" color="#8a8a8a" />
                            View Code
                        </Button>
						<Button class="bg-accent hover:bg-muted-foreground">Live Demo</Button>
					</div>
				</div>
			</div>
		</div>
		<Separator class="bg-muted-foreground" />
		<div class="flex flex-col">
			<div class="flex flex-row gap-4">
				<div class="self-center">
					<img alt="logo" src={white_logo} class="logo hidden md:block lg:block" style="width: 350px;" />
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
						<Button class="hover:underline hover:bg-primary underline-offset-4 ">View Code</Button>
						<Button class="bg-accent hover:bg-muted-foreground">Live Demo</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
