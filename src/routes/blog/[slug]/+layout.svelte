<script>
    let { data, children } = $props();
</script>

<div>
    <main>
        {@render children()}
    </main>
</div>

<aside>
    <h2> More Posts ...</h2>
    <ul>
        {#each data.summaries as { slug, title }}
            {#if slug !== data.currentSlug}
                <li>
                    <a href="/blog/{slug}">{title}</a>
                </li>
            {/if}
        {/each}
    </ul>
</aside>
