<script lang="ts">
	import { onMount } from 'svelte';

	interface Project {
		name: string;
		description: string;
		tech: string[];
		link: string;
	}

	const projects: Project[] = [
		{
			name: 'Project Rust',
			description: 'A high-performance web service built with Rust and Actix',
			tech: ['Rust', 'Actix', 'PostgreSQL'],
			link: 'https://github.com/johndoe/project-rust'
		},
		{
			name: 'Go Microservices',
			description: 'Distributed system architecture using Go and gRPC',
			tech: ['Go', 'gRPC', 'Docker'],
			link: 'https://github.com/johndoe/go-microservices'
		},
		{
			name: 'SvelteKit App',
			description: 'Modern web application with SvelteKit and DaisyUI',
			tech: ['SvelteKit', 'TypeScript', 'TailwindCSS'],
			link: 'https://github.com/johndoe/sveltekit-app'
		}
	];

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<div class="min-h-screen bg-bg p-8 text-text dark:bg-darkBg dark:text-darkText">
	<div
		class="mx-auto max-w-4xl space-y-12 transition-all duration-500"
		class:opacity-100={isVisible}
		class:opacity-0={!isVisible}
	>
		<!-- Hero Section -->
		<div
			class="card border-2 border-border bg-white p-8 shadow-light transition-transform hover:-translate-x-1 hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack dark:shadow-dark"
		>
			<h1 class="mb-4 text-4xl font-heading">Abhishek Shah</h1>
			<h2 class="mb-6 text-2xl font-base text-main">Software Engineer</h2>
			<p class="mb-1 text-lg">
				Passionate about building and deploying robust, secure and scalable systems
			</p>
			<p class="mb-1 text-lg">
				Currently my tech stack is a mix of Rust, Go, and SvelteKit, although I can spend an entire
				day writing nothing but yaml files.
			</p>
			<p class="mb-2 text-lg">
				I have worked with crypto and databases before and I can also take care of server
				deployments.
			</p>
			<div class="flex flex-wrap gap-4">
				<span class="tag flex items-center">
					<img src="/favicon.png" alt="sveltekit" class="mr-2 inline-block h-full" />
					Sveltekit
				</span>
				<span class="tag">
					<img src="/go.svg" alt="go" class="mr-2 inline-block h-full" />
					Go
				</span>
				<span class="tag">
					<img src="/rust-logo-blk.svg" alt="rust " class="mr-2 inline-block h-full" />
					Rust
				</span>
				<span class="tag">
					<img src="/docker.webp" alt="docker" class="mr-2 inline-block h-full" />
					Docker</span
				>
				<span class="tag">
					<img src="/k8s.svg" alt="k8s" class="mr-2 inline-block h-full" />
					Kubernetes
				</span>
				<span class="tag">
					<img src="/linux.png" alt="linux" class="mr-2 inline-block h-full" />
					Linux
				</span>
			</div>
		</div>

		<!-- Projects Section -->
		<div class="space-y-8">
			<h3 class="text-3xl font-heading">Featured Projects</h3>
			<div class="grid gap-6 md:grid-cols-2">
				{#each projects as project}
					<div
						class="card border-2 border-border bg-white shadow-light transition-transform hover:-translate-x-1 hover:-translate-y-1 dark:border-darkBorder dark:bg-secondaryBlack dark:shadow-dark"
					>
						<div class="card-body">
							<h4 class="card-title text-xl font-heading">{project.name}</h4>
							<p class="py-2">{project.description}</p>
							<div class="my-2 flex flex-wrap gap-2">
								{#each project.tech as tech}
									<span class="badge badge-sm border-border bg-mainAccent text-white">{tech}</span>
								{/each}
							</div>
							<div class="card-actions justify-end">
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									class="btn border-2 border-border bg-main text-white shadow-light transition-transform hover:-translate-x-1
                            hover:-translate-y-1 hover:bg-mainAccent dark:shadow-dark"
								>
									View Project
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Contact Section -->
		<div
			class="card border-2 border-border bg-white p-8 shadow-light dark:border-darkBorder dark:bg-secondaryBlack dark:shadow-dark"
		>
			<h3 class="mb-6 text-3xl font-heading">Get in Touch</h3>
			<div class="flex flex-wrap gap-4">
				<a
					href="https://github.com/johndoe"
					target="_blank"
					rel="noopener noreferrer"
					class="btn border-2 border-border bg-main text-white shadow-light transition-transform hover:-translate-x-1
                    hover:-translate-y-1 hover:bg-mainAccent dark:shadow-dark"
				>
					GitHub
				</a>
				<a
					href="https://linkedin.com/in/johndoe"
					target="_blank"
					rel="noopener noreferrer"
					class="btn border-2 border-border bg-main text-white shadow-light transition-transform hover:-translate-x-1
                    hover:-translate-y-1 hover:bg-mainAccent dark:shadow-dark"
				>
					LinkedIn
				</a>
				<a
					href="mailto:john@doe.com"
					class="btn border-2 border-border bg-main text-white shadow-light transition-transform hover:-translate-x-1
                    hover:-translate-y-1 hover:bg-mainAccent dark:shadow-dark"
				>
					Email
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.opacity-0 {
		opacity: 0;
		transform: translateY(20px);
	}

	.opacity-100 {
		opacity: 1;
		transform: translateY(0);
	}
</style>
