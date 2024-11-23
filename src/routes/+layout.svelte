<script lang="ts">
	import '../app.css';
	import NavButton from '$lib/components/NavButton.svelte';
	let { children } = $props();
</script>

<nav class="flex py-4 px-5 justify-between">
	<div class="flex justify-around">
		<a class="btn mx-2" href="/home">Home</a>
		<a class="btn mx-2" href="/about">About</a>
		<a class="btn mx-2" href="/blog">Blog</a>
	</div>
	<NavButton href="/contact" name="Let's work together" />
</nav>
<div class="border-b-5 border-black "></div>

{@render children()}

<footer>
	<br />
	<p>### Remember, flowers are always growing somewhere ###</p>
</footer>

<style>
</style>
