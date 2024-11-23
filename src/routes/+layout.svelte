<script lang="ts">
	import '../app.css';
	import NavButton from '$lib/components/NavButton.svelte';
	let { children } = $props();
</script>

<div class="border-b-2 border-white dark:border-black">
	<nav class="flex justify-between px-5 py-4">
		<div class="flex justify-around">
			<a class="btnx" href="/home">Home</a>
			<a class="btnx" href="/about">About</a>
			<a class="btnx" href="/blog">Blog</a>
		</div>
		<NavButton href="/contact" name="Let's work together" />
	</nav>
</div>

{@render children()}


<footer>
	<br />
	<p>### Remember, flowers are always growing somewhere ###</p>
</footer>

<style>
	a:hover {
		color: white;
	}
	:global(body.light-mode) a:hover {
		color: black;
	}
</style>
