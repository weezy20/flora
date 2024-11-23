<script lang="ts">
	import '../app.css';
	import NavButton from '$lib/components/NavButton.svelte';
	let { children } = $props();
</script>

<nav class="py-4">
	<a href="/home">home</a>
	<a href="/about">about</a>
	<a href="/blog">blog</a>
	<NavButton href="/contact" name="Let's work together" />

</nav>

{@render children()}

<footer>
	<br>
	<p>### Remember, flowers are always growing somewhere ###</p>
</footer>

<style>
</style>