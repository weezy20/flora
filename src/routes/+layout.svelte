<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav>
	<a href="/home">home</a>
	<a href="/about">about</a>
	<a href="/blog">blog</a>
</nav>

{@render children()}

<footer>
	<br>
	<p>### Remember, flowers are always growing somewhere ###</p>
</footer>