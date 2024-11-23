<script>
	let { data } = $props();
</script>

<h1>{data.post.title}</h1>
<p>{@html data.post.content}</p>
<p>slug = {data.currentSlug}</p>