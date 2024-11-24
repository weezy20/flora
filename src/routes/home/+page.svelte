<script lang="ts">
	import Calendar from '$lib/components/Calendar.svelte';
	import Clock from '$lib/components/Clock.svelte';
</script>

<main class="min-h-screen bg-bg p-8 dark:bg-darkBg">
	<div class="mx-auto max-w-4xl space-y-8">
		<Clock />
		<Calendar />
	</div>
</main>
