<script lang="ts">
	import '../app.css';
	import NavButton from '$lib/components/NavButton.svelte';
	let { children } = $props();
</script>

<div class="border-b-2 border-white dark:border-black">
	<nav class="flex justify-between px-5 py-4">
		<div class="flex justify-around">
			<a class="btn btn-outline rounded-full green-600 m-2" href="/home">Home</a>
			<a class="btn btn-outline rounded-full green-600 m-2" href="/about">About</a>
			<a class="btn btn-outline rounded-full green-600 m-2" href="/blog">Blog</a>
		</div>
		<NavButton href="/contact" name="Let's work together" />
	</nav>
</div>

{@render children()}

<footer class="w-full text-center bg-white dark:bg-black py-4 mt-auto">
	<p> Remember, flowers are always growing somewhere </p>
</footer>
