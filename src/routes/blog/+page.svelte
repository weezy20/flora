<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1>### Welcome to my blogpost ## </h1>
<ul>
    {#each data.summaries as { slug, title }}
        <li>
            <a href="blog/{slug}">> {title}</a>
        </li>
    {/each}
</ul>
