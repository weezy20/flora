<script>
	let { name, src } = $props();
</script>

<span class="tag">
	<img {src} alt={name} class="mr-2 inline-block h-full" />
	{name}
</span>
