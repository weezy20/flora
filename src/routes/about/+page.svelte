<script lang="ts">
	import { onMount } from 'svelte';
	import Tag from '$lib/components/Tag.svelte';

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
	let hoveredLink = '';

	function handleHover(link: string) {
		hoveredLink = link;
	}

	function handleLeave() {
		hoveredLink = '';
	}
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
				<Tag src="/favicon.png" name="Sveltekit" />
				<Tag src="/go.svg" name="Go" />
				<Tag src="/rust-logo-blk.svg" name="Rust" />
				<Tag src="/docker.webp" name="Docker" />
				<Tag src="/k8s.svg" name="Kubernetes" />
				<Tag src="/linux.png" name="Linux" />
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
					href="https://github.com/weezy20"
					target="_blank"
					rel="noopener noreferrer"
					on:mouseenter={() => handleHover('github')}
					on:mouseleave={handleLeave}
					class="btn border-2 border-border bg-main text-white shadow-light transition-transform hover:-translate-x-1
                    hover:-translate-y-1 hover:bg-mainAccent dark:shadow-dark"
				>
					GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/abhishek-shah-043b0bb3/"
					target="_blank"
					rel="noopener noreferrer"
					on:mouseenter={() => handleHover('linkedin')}
					on:mouseleave={handleLeave}
					class="btn border-2 border-border bg-main text-white shadow-light transition-transform hover:-translate-x-1
                    hover:-translate-y-1 hover:bg-mainAccent dark:shadow-dark"
				>
					LinkedIn
				</a>
				<a
					href="mailto:abhishekshah3@gmail.com"
					class="btn border-2 border-border bg-main text-white shadow-light transition-transform hover:-translate-x-1
                    hover:-translate-y-1 hover:bg-mainAccent dark:shadow-dark"
					rel="noopener noreferrer"
					on:mouseenter={() => handleHover('email')}
					on:mouseleave={handleLeave}
				>
					Email
				</a>
				<div class="relative ml-8 h-6 flex-1">
					<div class="absolute inset-0 flex items-center justify-center">
						<p
							class="transform text-lg transition-all duration-300"
							class:opacity-0={!hoveredLink}
							class:opacity-100={hoveredLink}
						>
							{#if hoveredLink === 'github'}
								Check out my open-source projects and contributions
							{:else if hoveredLink === 'linkedin'}
								Connect with me on LinkedIn and see my work experience
							{:else if hoveredLink === 'email'}
								Send me an email at abhishekshah3@gmail.com
							{/if}
						</p>
					</div>
				</div>
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
