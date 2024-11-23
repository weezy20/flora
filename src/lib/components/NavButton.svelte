<script>
	let { name, href } = $props();
</script>

<a {href}>
	<button
		class="transform rounded-base border border-border bg-main px-4 py-2 font-base text-white shadow-light transition-transform duration-200 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
		>{name}</button
	>
</a>
